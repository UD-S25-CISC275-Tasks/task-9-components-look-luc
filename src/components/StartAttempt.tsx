import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [progress, setProgress] = useState<boolean>(false);
    const [attempts, setAttempts] = useState<number>(4);
    const buttonUpdate = () => {
        setAttempts((prevAtt) => prevAtt - 1);
        setProgress(true);
    };
    return (
        <div>
            Start Attempt
            <p>{attempts}</p>
            <Button
                onClick={buttonUpdate}
                disabled={progress || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button
                onClick={() => {
                    setAttempts(attempts + 1);
                }}
                disabled={progress}
            >
                Mulligan
            </Button>
            <Button
                onClick={() => {
                    setProgress(false);
                }}
                disabled={!progress}
            >
                Stop Quiz
            </Button>
        </div>
    );
}
