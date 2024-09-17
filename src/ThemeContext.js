import { createContext, useState } from 'react';

//1. Create context
//2. Provider
//3. Consumer
const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('dark');
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };
    const value = {
        theme,
        toggleTheme,
    };
    console.log(ThemeContext);
    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
}

export { ThemeContext, ThemeProvider };
