import style from "./DestinationCard.module.css"

function DestinationCard(props) {
    return(
        <div className={style.Card}>
            <div>
                <img className={style.CardSize} src={props.substance.picture}/>
            </div>
            <div className={style.Fline}>
                {props.substance.name}
            </div>
            <div className={style.Sline}>
                {props.substance.date}
            </div>
        </div>
    );
}

export default DestinationCard;