import Circle from "./Circle"
import Cross from "./Cross"


const Square = ({position, value, take_turn}) =>{
    const checkTurn = ()=>{
        if (value == "EMPTY")
          take_turn(position)
    }
   
    return(
        <div className="square" onClick={checkTurn} >
            {/* {square {position}} */}
           { value == "CIRCLE" && <Circle/>}
           { value == "CROSS" && <Cross/>}
        </div>
    )
}

export default Square
