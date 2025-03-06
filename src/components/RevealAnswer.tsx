import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [visibility, setVisibility] = useState<boolean>(false);
    return (
        <div>
            <Button
                onClick={() => {
                    setVisibility(!visibility);
                }}
            >
                Reveal Answer
            </Button>
            {visibility && <div>42</div>}
        </div>
    );
}
