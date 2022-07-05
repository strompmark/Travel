import "./TabButton.css";

function TabButton(props) {
    return (
        <div className="Tag">
            <button className="Button">{props.title}</button>
        </div>
    );
}

export default TabButton;