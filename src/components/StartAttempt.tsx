import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [progress, setProgress] = useState<boolean>(false);
    const [attempts, setAttempts] = useState<number>(4);
    const buttonUpdate = () => {
        setAttempts((prevAtt) => prevAtt - 1),
            setProgress((prevProgress) => !prevProgress);
    };
    return (
        <div>
            {attempts}
            <Button onClick={buttonUpdate}>Start Quiz</Button>
            <Button onClick={() => setProgress(!progress)}>Stop Quiz</Button>
            <Button onClick={() => setAttempts(attempts + 1)}>Mulligan</Button>
        </div>
    );
}
