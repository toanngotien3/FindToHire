import { UserFilterType } from '@/types'

interface UserFilterProps {
  filter: UserFilterType
  handleFilter: (value: string, key: string) => void
}

export const UserFilter: React.FC<UserFilterProps> = ({
  filter,
  handleFilter,
}) => {
  return (
    <div className="bg-black">
      <div className="flex gap-2">
        <div>
          <label
            htmlFor="role"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Select Role
          </label>
          <select
            id="role"
            value={filter.role}
            onChange={(e) => handleFilter('role', e.target.value)}
            className="w-full px-2 py-1 border-gray-500 bg-gray-700 text-white rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="developer">Developer</option>
            <option value="mod">Moderator</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="filterBy"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Filter By
          </label>
          <select
            id="filterBy"
            value={filter.filter_by}
            onChange={(e) => handleFilter('filter_by', e.target.value)}
            className="w-full  px-2 py-1 border-gray-500 bg-gray-700 text-white rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="thumb-up">Thumb Up</option>
            <option value="exp">Experience</option>
            <option value="country">Country</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="filterBy"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Telegram
          </label>
          <input
            id="telegram"
            type="text"
            value={filter.tg}
            onChange={(e) => handleFilter('tg', e.target.value)}
            className="w-full px-2 py-1 border-gray-500 bg-gray-700 text-white rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>
    </div>
  )
}
