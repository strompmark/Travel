import Styles from "./DestinationCard.module.css"

function DestinationCard(props) {
    return(
        <div className={Styles.Card}>
            <div>
                <img className={Styles.CardSize} src={props.substance.picture}/>
            </div>
            <div className={Styles.Fline}>
                {props.substance.name}
            </div>
            <div className={Styles.Sline}>
                {props.substance.date}
            </div>
        </div>
    );
}

export default DestinationCard;