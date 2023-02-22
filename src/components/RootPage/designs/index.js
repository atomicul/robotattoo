import { useNavigate } from "react-router-dom";
import text from "./assets/12.png"
import tattoList from "./list";
import "./designs.scss";

const Designs = () => {
    const navTo = useNavigate();

    return <div className="designs">
        <div className="head">
            <div className="img-container">
                <img src={text} draggable={false} alt="When you're reaady press on the design of your choice :)" />
            </div>
            <div className="hr"></div>
        </div>
        <div className="select-container">
            {
                tattoList.map((el, idx) => (
                    <div className="selectable" key={idx}>
                        <img src={el.image} draggable={false} alt="a beutiful model" />
                        <button onClick={() => navTo('/done')}>${el.price}</button>
                    </div>
                ))
            }
        </div>
    </div>
}

export default Designs;