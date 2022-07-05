import TabButton from "./TabButton";
import { Link } from 'react-router-dom';

function Header() {
    return(
        <div>
            <Link to="/">
                <TabButton title="Home"/>
            </Link>
            <Link to="/search">
                <TabButton title="Search"/>
            </Link>
        </div>
    );
}

export default Header;