import { useState, useEffect } from "react";

export const useTypewriter = (text, speed = 200)=>{
    const [displayedText, setDisplayedText] = useState("|");
    const [showCursor, setShowCursor] = useState(true);

    useEffect(()=>{
        let currentIndex = 0;
        setDisplayedText("|");

        const typingInterval = setInterval(()=>{
            if(currentIndex < text.length){
                setDisplayedText(text.substring(0, currentIndex + 1) + (showCursor ? "|" : ""));
                currentIndex++
            }else{
                setShowCursor(prev => !prev);
                setDisplayedText(text + (showCursor? "|" : ""));
            }
        }, speed);
        return ()=> clearInterval(typingInterval); // limpando o intervalo de tempo para evitar vazamento de memória
    }, [text, speed, showCursor])

    return displayedText;
} 