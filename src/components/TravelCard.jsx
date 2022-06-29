import "./TravelCard.css";

function TravelCard(props) {
  return (
    <div className="Card">
      <div>
      <img className="Size" src={props.tartalom.kep}/>
      </div>
      <div className="Center">
        {props.tartalom.nev}
      </div>
      <div className="Center">
        {props.tartalom.leiras}
      </div>
    </div>
  );
}

export default TravelCard;