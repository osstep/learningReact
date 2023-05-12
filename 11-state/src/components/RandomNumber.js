import { useState } from "react"
import generateRandomNum from "../utils/generateRandomNum"


function RenderNumber(props) {
    const [randomNum, setRandomNum] = useState(generateRandomNum(props.maxNumber))
    const changeRandomNum = () => {
        setRandomNum(generateRandomNum(props.maxNumber))
    }


    return (
        <div>
            <h1>{randomNum}</h1>
            <button onClick={changeRandomNum}>Generate new random number</button>
        </div>
    )
}

export default RenderNumber