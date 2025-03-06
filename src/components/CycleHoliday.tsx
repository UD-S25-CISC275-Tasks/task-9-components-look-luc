import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    type holidays = "🎏" | "🎃" | "🪔" | "🧑‍🎄" | "🦃";
    const holidayTransition: Record<holidays, holidays> = {
        "🎏": "🪔",
        "🪔": "🎃",
        "🎃": "🦃",
        "🦃": "🧑‍🎄",
        "🧑‍🎄": "🎏",
    };
    const holidayAlpha: Record<holidays, holidays> = {
        "🧑‍🎄": "🪔",
        "🪔": "🎏",
        "🎏": "🎃",
        "🎃": "🦃",
        "🦃": "🧑‍🎄",
    };

    const [holiday, setHoliday] = useState<holidays>("🎏");

    function changeHolidayAlpha(): void {
        const newHoliday = holidayAlpha[holiday];
        setHoliday(newHoliday);
    }
    function changeHolidayCal(): void {
        const newHoliday = holidayTransition[holiday];
        setHoliday(newHoliday);
    }

    return (
        <div>
            Cycle Holiday
            <div>
                <span data-testid="Holiday">
                    <p>Holiday: {holiday}</p>
                </span>
                <Button
                    onClick={() => {
                        changeHolidayAlpha();
                    }}
                >
                    Advance by Alphabet
                </Button>
                <Button
                    onClick={() => {
                        changeHolidayCal();
                    }}
                >
                    Advance by Year
                </Button>
            </div>
        </div>
    );
}
