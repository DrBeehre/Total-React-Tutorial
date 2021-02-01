import * as React from 'react';

function CustomDate() {
    const [timeString, setTimeString] = React.useState("");

    let getTime = () => {
        setTimeString(new Date().toTimeString());
    }

    return (
        <div>
            {timeString}
            <button onClick={getTime}>Get the Time</button>
        </div>
    )
}

export default CustomDate;