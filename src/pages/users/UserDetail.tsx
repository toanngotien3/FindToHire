import { USERS } from '@/consts'
import { getTgFromUsername, getUsernameFromTg } from '@/utils'
import { FaTelegramPlane } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { TbWorld } from 'react-icons/tb'
import { useParams } from 'react-router-dom'

export const UserDetail = () => {
  const { username } = useParams()
  const tg_from_params = getTgFromUsername(username || '')

  const user = USERS.find((user) => user.tg === tg_from_params)

  return (
    <div className="bg-black text-white h-app">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col justify-center">
          <div className="relative">
            {/* Main image */}
            <div className="w-full h-[160px] rounded-xl overflow-hidden mb-8">
              <img
                src={user?.banner}
                alt="Project Banner"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            {/* Logo - centered and overlapping the banner */}
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-16">
              <div className="w-32 h-32 rounded-full border-4 border-black overflow-hidden bg-black">
                <img
                  src={user?.logo}
                  alt="Project Logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Social links - absolute positioned on the right */}
            <div className="absolute top-4 right-4 flex gap-3">
              <a
                href={user?.tg}
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <FaTelegramPlane className="w-5 h-5" />
              </a>
              <a
                href={user?.x}
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <FaXTwitter className="w-5 h-5" />
              </a>
              <a
                href={user?.site}
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <TbWorld className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-6 mt-20 mb-4">
            <h1 className="text-3xl font-bold text-center">
              {user?.tg && getUsernameFromTg(user.tg)}
            </h1>
            <p className="text-gray-400 text-md leading-relaxed max-w-3xl mx-auto text-center">
              {user?.description}
            </p>

            {/* Additional project details can be added here */}
            <div className="grid grid-cols-3 gap-2 sm:gap-6 mt-8">
              <div className="bg-white/5 p-3 sm:p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-2">Role</h3>
                <p className="text-gray-400">{user?.role}</p>
              </div>
              <div className="bg-white/5 p-3 sm:p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-2">Exp</h3>
                <p className="text-gray-400">{user?.exp} year+</p>
              </div>
              <div className="bg-white/5 p-3 sm:p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-2">From</h3>
                <p className="text-gray-400">{user?.from}</p>
              </div>
            </div>
          </div>

          <button className="z-10 px-4 py-2 bg-red-900 text-white font-bold rounded-lg text-md mx-auto">
            <a href={user?.tg}>Chat now!</a>
          </button>
        </div>
      </div>
    </div>
  )
}
