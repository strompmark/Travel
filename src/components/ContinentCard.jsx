import Styles from "./ContinentCard.module.css";

function ContinentCard(props) {
  return (
    <div className={Styles.Card}>
      <div>
        <img className={Styles.CardSize} src={props.substance.picture}/>
      </div>
      <div className={Styles.Fline}>
        {props.substance.name}
      </div>
      <div className={Styles.Sline}>
        {props.substance.description}
      </div>
    </div>
  );
}

export default ContinentCard;