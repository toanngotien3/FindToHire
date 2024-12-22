import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from 'react-router-dom';

export const Layout = () => {
    return (
        <div className="max-w-md mx-auto">
            <div className="flex flex-col min-h-screen">
                <Header />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>

    );
};

