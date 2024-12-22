export const getUsernameFromTg = (tg:string)=> tg.split('t.me/')[1]
export const getTgFromUsername = (username:string)=> `https://t.me/${username}`