import React, { useState, useEffect,Fragment} from "react";

    function Category (props){
        const [category,SetCategory]=useState([]);

        useEffect(()=>{
            fetch(
                'https://opentdb.com/api_category.php'
            )
                .then((res)=>res.json())
                .then((data)=>{
                    SetCategory(data.trivia_categories)
                })
        },[])

        return (
            <Fragment>
                 {category.map((categories) =>(
                    <button className="category-btn" value={categories.id} onClick={props.onClick}>{categories.name}</button>
                  ))}
            </Fragment>
          );
        }

    export default Category