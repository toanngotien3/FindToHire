import { UserType } from "@/types";
import UserImg1 from '@/assets/users/mc.jpg'
import UserImg2 from '@/assets/users/theg.jpg'
import UserImg3 from '@/assets/users/caith.jpg'
import UserImg4 from '@/assets/users/mym.jpg'
// Sample user data
export const USERS: UserType[] = [
    {
        id: 1,
        name: "The MC Dev",
        username: "TheMCdev",
        position: "Senior Developer",
        imageUrl: UserImg1,
    },
    {
        id: 2,
        name: "xTheG33",
        username: "xTheG33",
        position: "Hype Guy",
        imageUrl: UserImg2,
    },
    {
        id: 3,
        name: "Caithlyn",
        username: "Caiteycrypto",
        position: "Gem",
        imageUrl: UserImg3,
    },
    {
        id: 4,
        name: "Meet Your Maker",
        username: "xMeetYourMaker",
        position: "Admin",
        imageUrl: UserImg4,
    },
]