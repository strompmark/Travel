import Styles from "./TabButton.module.css";

function TabButton(props) {
    return (
        <div className={Styles.Tag}>
            <button className={Styles.Button}>{props.title}</button>
        </div>
    );
}

export default TabButton;