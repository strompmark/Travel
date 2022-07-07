import { Link } from 'react-router-dom';
import Styles from "./Header.module.css";
import TabButton from "./TabButton";

function Header() {
    return(
        <div className={Styles.Center}>
            <Link to="/">
                <TabButton title="Home"/>
            </Link>
            <Link to="/Search">
                <TabButton title="Search"/>
            </Link>
        </div>
    );
}

export default Header;