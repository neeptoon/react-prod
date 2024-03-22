import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import '../styles/index.scss'
const AboutPage = lazy(() => import('../pages/AboutPage/AboutPage'));
const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
import { Suspense, lazy } from 'react';
import { useTheme } from '../theme/useTheme'
import { classNames } from '../helpers/classNames';


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
