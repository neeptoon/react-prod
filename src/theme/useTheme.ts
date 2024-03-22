import { useContext } from "react"
import { Theme, ThemeContext } from "./themeContext"

type UseThemeType = {
    theme: Theme,
    toggleTheme: () => void;
}

export const useTheme = (): UseThemeType => {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = () => { setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK) }

    return {theme, toggleTheme}
}
