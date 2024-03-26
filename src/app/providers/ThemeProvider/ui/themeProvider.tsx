import { useState } from 'react';
import { Theme, ThemeContext, ThemeType } from '../lib/themeContext';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<Theme>(Theme.DARK)

    const defaultTheme: ThemeType = {
        theme: theme,
        setTheme: setTheme,
    }

    return (
        <ThemeContext.Provider value={defaultTheme}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;
