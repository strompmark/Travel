import styles from "./ContinentCard.module.css";

function ContinentCard(props) {
  return (
    <div className={styles.Card}>
      <div>
      <img className={styles.CardSize} src={props.substance.picture}/>
      </div>
      <div className={styles.Fline}>
        {props.substance.name}
      </div>
      <div className={styles.Sline}>
        {props.substance.description}
      </div>
    </div>
  );
}

export default ContinentCard;