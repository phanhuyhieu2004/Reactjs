import React, { useEffect } from 'react';

function ColorfulBubbles() {
    useEffect(() => {
        const handleMouseMove = (e) => {
            const body = document.querySelector("body");
            const circle = document.createElement("div");
            const x = e.clientX;
            const y = e.clientY;
            circle.classList.add('colorful-bubble');
            circle.style.left = x + "px";
            circle.style.top = y + "px";
            const size = Math.random() * 100;
            circle.style.width = 10 + size + "px";
            circle.style.height = 10 + size + "px";
            body.appendChild(circle);
            setTimeout(function () {
                circle.remove();
            }, 1800);
        };

        document.addEventListener("mousemove", handleMouseMove);

        // Clean up
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return null;
}

export default ColorfulBubbles;
