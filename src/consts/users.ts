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
        role: "Senior Developer",
        logo: UserImg1,
        banner: UserImg1,
        detail: "A Senior Blockchain Developer is an expert in designing, developing, and implementing decentralized applications and smart contracts. They excel in blockchain frameworks like Ethereum or Hyperledger, ensure security and scalability, and lead technical teams. With strong problem-solving skills and knowledge of cryptography, they play a key role in building innovative, blockchain-based solutions for various industries.",
        tg: "https://t.me/TheMCdev",
        x: "https://www.x.com/themcdev",
        site: "https://www.themcdev.com/",
        exp: 12,
        from: "USA"
    },
    {
        id: 2,
        name: "xTheG33",
        username: "xTheG33",
        role: "Hype Guy",
        logo: UserImg2,
        banner: UserImg2,
        detail: "Yo, listen up! Ready to level up your English game? 🚀 This course isn’t just learning—it’s an adventure! 🗺️ Dive into exciting lessons, master vocab like a boss, and crush every convo! 💬🔥 Let’s make learning fun and unstoppable. Join now, and let’s go! 🎉✨.",
        tg: "https://t.me/xTheG33",
        x: "https://x.com/xTheG33",
        site: "",
        exp: 3,
        from: "Viet Nam"
    },
    {
        id: 3,
        name: "Caithlyn",
        username: "Caiteycrypto",
        role: "Gem",
        logo: UserImg3,
        banner: UserImg3,
        detail: "A gem doesn't shine without the right light, and she's her own spotlight, she's the kind of gem that doesn’t just sit on a crown, she builds kingdoms. 👑💎",
        tg: "https://t.me/Caiteycrypto",
        x: "https://x.com/CryptoMaidSOL",
        site: "",
        exp: 2,
        from: "Holland"
    },
    {
        id: 4,
        name: "Meet Your Maker",
        username: "xMeetYourMaker",
        role: "Admin",
        logo: UserImg4,
        banner: UserImg4,
        detail: "The Admin position is responsible for overseeing daily operations, managing team coordination, and ensuring smooth execution of tasks. This role involves handling administrative duties, updating records, and maintaining efficient communication between departments. The ideal candidate will possess strong organizational skills, attention to detail, and the ability to manage multiple tasks in a fast-paced environment.",
        tg: "https://t.me/xMeetYourMaker",
        x: "https://x.com/mymxcrypto",
        site: "",
        exp: 3,
        from: "Indo"
    },
]