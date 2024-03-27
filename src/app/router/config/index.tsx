import { Suspense, lazy } from "react"
import { RouteProps } from "react-router-dom"

const AboutPage = lazy(() => import('pages/AboutPage/ui/AboutPage'));
const MainPage = lazy(() => import('pages/MainPage/ui/MainPage'));

const SuspenseWrapper = (page: React.ReactNode) => {
    return (
        <Suspense fallback={<div>Loading.....</div>}>{page}</Suspense>
    )
}

export const enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about'
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: 'about'
}

export const routerConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePaths[AppRoutes.MAIN],
        element: SuspenseWrapper(<MainPage />)
    },
    [AppRoutes.ABOUT]: {
        path: RoutePaths[AppRoutes.ABOUT],
        element: SuspenseWrapper(<AboutPage />)
    }


}
