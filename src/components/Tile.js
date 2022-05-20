import { useState } from "react";

function Tile({ name, specialty, greased, weight, image}) {
    const [isClicked, setClicked] = useState(false);
     const handleClick = () =>setClicked(!isClicked)
    if (isClicked) {
        return (
            <li className={"ui eight wide column pigTile maxPigTile"} greased={greased.toString()} onClick={handleClick}>
                <h3>Name: {name}</h3>
                <p>Specialty: {specialty}</p>
                <p>Weight: {weight}</p>
                <img src={image} alt='sorry' />

            </li>
        )
    }
    else {
        return (
            <li className={"ui eight wide column pigTile maxPigTile"} greased={greased.toString()} onClick={handleClick}>
                <h3>Name: {name}</h3>
                <img src={image} alt='sorry' />

            </li>
        )
    }
}

export default Tile