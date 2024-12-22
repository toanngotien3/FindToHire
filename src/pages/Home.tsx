import { Link } from "react-router-dom";

export const Home = () => (
    <section id="home" className="relative flex flex-col items-center justify-center px-4 py-24 h-app">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <h1 className="z-10 text-4xl font-bold text-white mb-4">Find To Hire!</h1>
        <h3 className="z-10 text-lg font-bold text-white text-center mb-4">Let's find moderators, admins, and other roles for your projects! </h3>
        <p className="z-10 text-sm text-white text-center mb-4">*If you're looking for a specific person, you can search their username directly, or look in the community or forum sections where roles are often listed.</p>
        <button className="z-10 px-4 py-2 bg-red-900 text-white font-bold rounded-lg text-lg"><Link to="/users">Find now!</Link></button>
    </section>
)