import { Link} from 'react-router-dom'
import './styles/index.scss'
import { classNames } from 'shared/lib/classNames';
import { useTheme } from './providers/ThemeProvider';
import {AppRouter} from "app/router";
import NavBar from 'widgets/navbar';

export const App = () => {

    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <NavBar/>
            <button onClick={toggleTheme}>THEME</button>
            <AppRouter/>
        </div >
    )

}
