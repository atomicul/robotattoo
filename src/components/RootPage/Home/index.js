import { useNavigate } from "react-router-dom";
import insertText from "./assets/3.png";
import designText from "./assets/4.png";
import arrowRight from "./assets/7.png";
import arrowLeft from "./assets/8.png";
import robotHead from "./assets/9.png";
import hereText from "./assets/5.png";
import React from "react";
import "./home.scss";

const Home = () => {
    const navTo = useNavigate();
    const [uploadImage, setUploadImage] = React.useState("");

    const handleUpload = event => {
        setUploadImage(URL.createObjectURL(event.target.files[0]));
    };

    return (
        <div className="home">
            <button className="button">
                <img className="insert" src={insertText} draggable={false} alt="insert" />
                <img className="design" src={designText} draggable={false} alt="design" />
                <img className="here" src={hereText} draggable={false} alt="here" />
                <div className="overflow-hidden">
                    <img className="arrow-right" src={arrowRight} draggable={false} alt="arrow" />
                    <img className="robot" src={robotHead} draggable={false} alt="Our mascot" />
                    <img className="arrow-left" src={arrowLeft} draggable={false} alt="arrow" />
                    <input type="file" accept="image/png" onChange={handleUpload} />
                </div>
            </button>
            <div className="design-container">
                <div className="design-box" style={{ backgroundImage: `url(${uploadImage})` }}>
                </div>
                <button className="proceed" onClick={() => navTo('/done')}>proceed</button>
            </div>
        </div>
    );
};

export default Home;