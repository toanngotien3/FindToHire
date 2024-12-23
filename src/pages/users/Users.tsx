import { USERS } from '@/consts'
import { getUsernameFromTg } from '@/utils'
import { Link } from 'react-router-dom'
import { FaThumbsUp } from 'react-icons/fa6'

export const Users = () => {
  return (
    <div className="w-full mx-auto p-4 h-app bg-black">
      <ul className="flex flex-col">
        {USERS.map((user) => (
          <Link to={`/users/${getUsernameFromTg(user.tg)}`}>
            <li
              key={user.tg}
              className="flex items-center justify-between py-4 hover:bg-gray-900 px-4 transition-colors gap-4 border-red-900 border-b-2"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full overflow-hidden">
                  <img src={user.logo} alt={user.name} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    {user.name}
                  </h3>
                  <p className="text-sm text-white">{user.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-white">
                  <FaThumbsUp size={16} />
                  <h5>{user.rate?.thumb_up || 0}</h5>
                </div>
                {user.rate?.label && (
                  <div className={`label flex items-center gap-1 text-white py-1 px-3 rounded-lg`}>
                    <h5 className='text-black font-bold text-sm uppercase'>{user.rate.label}</h5>
                  </div>
                )}
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}
