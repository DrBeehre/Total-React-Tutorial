import * as React from 'react';

function FruitLoops(){
    let fruit : Array<String> = [
        "red",
        "yellow",
        "blue",
        "green"
    ]

    return (
        <ul>
            {fruit.map((value, index) => {
                return <li key={index}>{value}</li>
            })}
        </ul>
    )
}

export default FruitLoops;