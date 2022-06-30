import "./ContinentCard.css";

function ContinentCard(props) {
  return (
    <div className="Card">
      <div>
      <img className="CardSize" src={props.substance.picture}/>
      </div>
      <div className="Fline">
        {props.substance.name}
      </div>
      <div className="Sline">
        {props.substance.description}
      </div>
    </div>
  );
}

export default ContinentCard;