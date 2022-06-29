import TravelCard from "./TravelCard";
import Africa from "../Images/africa.png"
import America from "../Images/america.png"
import Asia from "../Images/asia.png"
import Australia from "../Images/australia.jpg"
import Europe from "../Images/europe.webp"

var Places = [ 
    {
        nev: "Európa",
        leiras: "1. kontinens",
        kep: Europe,
    },
    {
        nev: "Ázsia",
        leiras: "2. kontinens",
        kep: Asia,
    }, 
    {
        nev: "Afrika",
        leiras: "3. kontinens",
        kep: Africa,
    },
    {
        nev: "Amerika",
        leiras: "4. kontinens",
        kep: America,
    },
    {
        nev: "Ausztrália",
        leiras: "5. kontinens",
        kep: Australia,
    },
]

function Content() {
    return(
        <div>
            {Places.map(item => (<TravelCard tartalom={item}/>))}
        </div>
    );
}

export default Content;