import { useState, useEffect } from "react";

export const useDarkMode = () => {
    const [isDark, setIsDark] = useState(
        () => localStorage.getItem('theme') !== 'Light'
    );

    useEffect(()=>{
        document.documentElement.classList.toggle('dark', isDark)
        localStorage.setItem('theme', isDark? 'Dark' : 'Light')
    },[isDark])

    return [isDark, setIsDark];
}