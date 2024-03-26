import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './styles/index.scss'
const AboutPage = lazy(() => import('../pages/AboutPage/ui/AboutPage'));
const MainPage = lazy(() => import('../pages/MainPage/ui/MainPage'));
import { Suspense, lazy } from 'react';
import { classNames } from '../shared/lib/classNames';
import { useTheme } from './providers/ThemeProvider';


const SuspenseWrapper = (page: React.ReactNode) => {
    return (
        <Suspense fallback={<div>Loading.....</div>}>{page}</Suspense>
    )
}



export const App = () => {

    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to={'/'}>Main Page</Link>
            <Link to={'/about'}>About Page</Link>
            <button onClick={toggleTheme}>THEME</button>

            <Routes>
                <Route path="/" element={SuspenseWrapper(<MainPage />)} />
                <Route path="/about" element={SuspenseWrapper(<AboutPage />)} />
            </Routes>

        </div >
    )

}
