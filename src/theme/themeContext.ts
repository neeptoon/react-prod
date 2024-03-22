import { createContext } from 'react';

export const enum Theme {
    DARK = 'dark',
    LIGHT = 'light'
}

export type ThemeType = Partial<{
    theme: Theme,
    setTheme: (theme: Theme) => void
}>

export const ThemeContext = createContext<ThemeType>({});
