import "./DestinationCard.css";

function DestinationCard(props) {
    return(
        <div className="Card">
            <div>
                <img className="CardSize" src={props.substance.picture}/>
            </div>
            <div className="Fline">
                {props.substance.name}
            </div>
            <div className="Sline">
                {props.substance.date}
            </div>
        </div>
    );
}

export default DestinationCard;