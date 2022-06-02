import React from "react";

function Book(props){
    const newData = props.bookStore;
    return(
       
       <>
       {newData.map(item=> <div key={item.id}>
            <h2>{item.title}</h2>
            <h5>{item.author}</h5>
        </div>)}
       </>
    )
}

export default Book;