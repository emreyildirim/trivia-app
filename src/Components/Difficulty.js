import React from 'react';
const Difficulty = (props) =>{


    return(
        <select className="difficulty" onChange={props.onChange}>
                <option value="easy">Choose Difficulty Level</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
        </select>
    )
}
export default Difficulty;