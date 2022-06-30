import ContinentCard from "./ContinentCard";
import DestinationCard from "./DestinationCard";
import Africa from "../Images/Africa.png";
import America from "../Images/America.png";
import Asia from "../Images/Asia.png";
import Australia from "../Images/Australia.png";
import Europe from "../Images/Europe.png";
import Amsterdam from "../Images/Amsterdam.jpg";
import Athens from "../Images/Athens.png";
import Brussels from "../Images/Brussels.png";
import Paris from "../Images/Paris.jpg";
import Vienna from  "../Images/Vienna.jpg";

var Continents = [ 
    {
        description: "1. kontinens",
        name: "Európa",
        picture: Europe,
    },
    {
        description: "2. kontinens",
        name: "Ázsia",
        picture: Asia,
    }, 
    {
        description: "3. kontinens",
        name: "Afrika",
        picture: Africa,
    },
    {
        description: "4. kontinens",
        name: "Amerika",
        picture: America,
    },
    {
        description: "5. kontinens",
        name: "Ausztrália",
        picture: Australia,
    },
]

var Destination = [
    {
        date: "2022",
        name: "Párizs",
        picture: Paris,
    },
    {
        date: "2021",
        name: "Athén",
        picture: Athens,
    },
    {
        date: "2021",
        name: "Bécs",
        picture: Vienna,
    },
    {
        date: "2019",
        name: "Amszterdam",
        picture: Amsterdam,
    },
    {
        date: "2016",
        name: "Brüsszel",
        picture: Brussels,
    },
]

function Content() {
    return(
        <div>
            <div>
                {Continents.map(item => (<ContinentCard substance={item}/>))}
            </div>
            <div>
                {Destination.map(item => (<DestinationCard substance={item}/>))}
            </div>
        </div>
    );
}

export default Content;