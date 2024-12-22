import { USERS } from "@/consts"
import { Link } from "react-router-dom"

export const Users = () => {
    return <div className="w-full mx-auto p-4 h-app">
        <ul className="divide-y divide-gray-200">
            {USERS.map((user) => (
                <li
                    key={user.id}
                    className="flex items-center justify-between py-4 hover:bg-gray-50 px-4 rounded-lg transition-colors gap-4"
                >
                    <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full overflow-hidden">
                            <img src={user.logo} alt={user.name} />
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900">{user.name}</h3>
                            <p className="text-sm text-gray-500">{user.role}</p>
                        </div>
                    </div>
                    <button className="z-10 px-4 py-2 bg-red-900 text-white font-bold rounded-lg text-sm"><Link to={`/users/${user.username}`}>See more</Link></button>
                </li>
            ))}
        </ul>
    </div>
}