import React from "react";
import Book from "./book";

function Books(){
    return(
        <div>
            <ul>
                <li>
                    <Book/>
                    <div><button type="button">Remove</button></div>
                </li>
            </ul>
        </div>
    )
}

export default Books