import './Header.css';
import {logoImage} from "../../assets/images";
import NavigationTop from "../Navigation/NavigationTop";

const Header = () => {
    return (
        <header className="header">
            <div className="header-wrapper">
                <div className="logo">
                    <a href="#">
                        <img src={logoImage} alt="The Bike Shop"/>
                    </a>
                </div>
                <NavigationTop/>
            </div>

        </header>
    )
}

export default Header;