import '../CSS/AboutUsStats.css'

import React, { useEffect, useState } from 'react';

const CountUpAnimation = ({
    iconComponent,
    initialValue,
    targetValue,
    text,
}) => {
    const [count, setCount] = useState(initialValue);
    const duration = 4000; // 4 seconds

    useEffect(() => {
        let startValue = initialValue;
        const interval = Math.floor(
            duration / (targetValue - initialValue));

        const counter = setInterval(() => {
            startValue += 1;
            setCount(startValue);
            if (startValue >= targetValue) {
                clearInterval(counter);
            }
        }, interval);

        return () => {
            clearInterval(counter);
        };
    }, [targetValue, initialValue]);

    return (
        <div className="AboutUscontainer">
            <div className="icon">{iconComponent}</div>
            <span className="num">{count}</span>
            <span className="text">{text}</span>
        </div>
    );
};

function App() {
    return (
        <div>
            <div className="wrapper">
                <CountUpAnimation
                    initialValue={11000}
                    targetValue={16000}
                    text="Inspired"
                />
                <CountUpAnimation
                    initialValue={0}
                    targetValue={7}
                    text="Years in Business"
                />
                <CountUpAnimation
                    initialValue={0}
                    targetValue={15}
                    text="Team Members"
                />
                <CountUpAnimation initialValue={0}
                    targetValue={3}
                    text="Missions"
                />
            </div>
        </div>
    );
}

export default App;
