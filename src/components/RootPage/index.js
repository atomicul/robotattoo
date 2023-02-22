import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import welcomeText from "./assets/2.png";
import robot6 from "./assets/6.png";
import logo from "./assets/1.png";
import "./root-page.scss";

const RootPage = () => {
    const navTo = useNavigate();
    let location = useLocation();

    const [displayFriend, setDisplayFriend] = useState(false);

    useEffect(() => {
        setDisplayFriend(location.pathname === '/');
        console.log(location, location.pathname === '/')
    }, [location]);

    return <div className="root-page">
        <header>
            <div className="logos">
                <img className="logo" src={logo} onClick={() => navTo('/')} draggable={false} alt="Our Logo" />
                <img className="welcome-text" src={welcomeText} draggable={false} alt="Welcome!" />
            </div>
            <div className="menu">
                <div className="hr"></div>
                <nav>
                    <div className="link" onClick={() => { navTo('/prices') }}>Prices</div>
                    <div className="link" onClick={() => { navTo('/designs') }}>Our designs</div>
                    <div className="link" onClick={() => { navTo('/terms') }}>Privacy {'&'} confidentiality</div>
                </nav>
                <img className="robot" src={robot6} style={{ display: displayFriend ? null : 'none' }} draggable={false} alt="Our mascot" />
            </div>
        </header>
        <main>
            <Outlet />
        </main>
    </div>
}

export default RootPage;