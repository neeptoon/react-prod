import {Route, Routes} from "react-router-dom";
import { routerConfig } from "../config";


const AppRouter = () => {
    return (
        <Routes>
            {Object.values(routerConfig).map(({element, path}) => <Route path={path} element={element}/>)}
        </Routes>
    );
};
export default AppRouter;
