import { render } from 'react-dom'
import { App } from './components/App'
import { BrowserRouter } from 'react-router-dom'
import ThemeProvider from './theme/themeProvider'


render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
)
