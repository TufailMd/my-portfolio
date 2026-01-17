import { useEffect, useState } from "react";

const words = ["a coder.", "a problem solver."];
const TYPING_SPEED = 120;
const DELETING_SPEED = 60;
const PAUSE_TIME = 1200;

export default function TypingText() {
    const [wordIndex, setWordIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex];

        let timeout;

        if (!isDeleting && displayText.length < currentWord.length) {
            // typing
            timeout = setTimeout(() => {
                setDisplayText(currentWord.slice(0, displayText.length + 1));
            }, TYPING_SPEED);
        }
        else if (!isDeleting && displayText.length === currentWord.length) {
            // pause before deleting
            timeout = setTimeout(() => {
                setIsDeleting(true);
            }, PAUSE_TIME);
        }
        else if (isDeleting && displayText.length > 0) {
            // deleting
            timeout = setTimeout(() => {
                setDisplayText(currentWord.slice(0, displayText.length - 1));
            }, DELETING_SPEED);
        }
        else if (isDeleting && displayText.length === 0) {
            // move to next word
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
        }

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, wordIndex]);

    return (
        <span className="text-zinc-100 font-semibold tracking-wide">
            {displayText}
            <span className="ml-1 animate-pulse">|</span>
        </span>
    );
}

// D:\Web Development\Session 5(Mini project)\react\tufail\src\components\TypingText.jsx