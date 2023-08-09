import { TOURS } from "../Resources/TOURS"
import TourCard from "./TourCard"

const TourCardList = () => {
    return(
        <div className="cardList">
            {TOURS.map((tours) => {
                return(
                    <div className="col" key={tours.id}>
                        <TourCard tours={tours}/>
                    </div>
                )
            })}
        </div>
    )
}

export default TourCardList;