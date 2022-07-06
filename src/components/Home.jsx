import CoverImage from "../Images/OpeningImage.jpg";
import Styles from "./Home.module.css";

function Home() {
    return(
        <div className={Styles.Background}>
            <div>
                <img className={Styles.Image} src={CoverImage}/>
                <span className={Styles.Description}>
                    Gondolom senki sem lepődik meg azon, ha azt mondom, hogy mi egy pár vagyunk!<br/>
                    2021-ben kezdtünk el közösen utazgatni, azóta jártunk már pár országban,<br/>
                    és sikeresen felfedeztünk egy-két nagyobb várost. A cél az az, hogy ezen az oldalon<br/>
                    dokumentáljuk majd az egyes utazásainkat. Ha te is szeretsz utazni, és nem riadsz meg attól,<br/>
                    hogy egy azonos nemű pár utazós történein keresztül fedezd fel a világot, akkor kérlek tarts velünk!<br/>
                    <br/>
                    <b>Gergő & Mark</b>
                </span>
            </div>
            <h1 className={Styles.Title}>E & C - Evil & Clumsy travel agency</h1>
        </div>
    );
}

export default Home;