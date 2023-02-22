import pricesText from "./assets/10.png";
import eyes from "./assets/11.png";
import "./prices.scss";

const Prices = () => {
    return <div className="prices">
        <div className="notes">
            <span>
                Tattoo Placement    Size    Average Time (Spread Over Multiple Sessions)    Average Price Range
                Full Body Tattoo    Everywhere!    30+ hours    $100,000+
                Arm Tattoo    Full Sleeve    11 hours    $2,000 – $7,000
                Half Sleeve    5 hours    $800 – $2,000
                Upper Arm    3-5 hours    $600 – $1,300
                Forearm    2-5 hours    $300 – $1,300
                Back Tattoo    Full Back    40-60 hours    $7,000 – $9,000
                Half Back    20-40 hours    $2,500 – $5,000
                Medium Size    5 hours    $300 – $700
                Small Size    2-3 hours    $100 – $450
                Chest Tattoo    Full Chest    10-20 hours    $600 – $2,000
                Half Chest    8-12 hours    $450 – $1,200
                Medium Size    7-9 hours    $250 – $600
                Small Size    2-3 hours    $100 – $300
                Shoulder Tattoo    Back of Shoulder    7-9 hours    $1,000 – $1,700
                Shoulder Cap    4-5 hours    $800 – $1,500
                Hip Tattoo    Hip to Thigh    7-9 hours    $500 – $2,500
                Large Outer Hip    5-6 hours    $800 – $2,200
                Medium Size    4-5 hours    $250 – $700
                Small Inner Hipbone    2-3 hours    $100 – $300
                Face Tattoo    Full Face    5-6 hours    $500 – $1,000
                Small Size    2-3 hours    $200 – $800
                Miniscule Size    Up to 30 minutes    $40 – $80
                Bespoke (lip, eyeball, etc.)    Up to 1 hour    Unknown
                Hand Tattoo    Medium Size    3-4 hours    $100 – $250
                Finger Tattoo    Up to 1 hour    $50 – $100
                Small Size    2-3 hours    $40 – $80
                Foot Tattoo    Medium Foot Tattoo    3-4 hours    $100 – $200
                Medium Ankle Size    4-5 hours    $50 – $300
                Small Toe Size    Up to 1 hour    $40 – $100
                Rib Tattoo    Full Side Body    6-7hours    $1,000 – $2,000
                Medium Size    5-6 hours    $600 – $1,000
                Small Size    2-3 hours    $250 – $500
                Leg Tattoo    Thigh    5-6 hours    $500 – $1,000
                Lower Leg    5-6 hours    $500 – $1,200
            </span>
            <img className="eyes" src={eyes} draggable={false} alt="Our mascot" />
            <img className="title" src={pricesText} draggable={false} alt="Prices" />

        </div>
    </div>
}

export default Prices;