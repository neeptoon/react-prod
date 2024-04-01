import { classNames } from 'shared/lib/classNames'
import { NavBarProps } from '../model'
import cls from './NavBar.module.scss'
import {AppLink} from 'shared/ui/AppLink/'
import { useTheme } from 'app/providers/ThemeProvider';
import { Theme } from 'app/providers/ThemeProvider/lib/themeContext';
import { AppLinkTheme } from 'shared/ui/AppLink/ui/AppLink';

function NavBar({className}: NavBarProps) {
  const {theme} = useTheme();

  const appLinkTheme = theme === Theme.DARK ? AppLinkTheme.PRIMARY : AppLinkTheme.SECONDARY
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={classNames(cls.links)}>
        <AppLink to={'/'} theme={appLinkTheme}>Main Page</AppLink>
        <AppLink to={'/about'} theme={appLinkTheme}>About Page</AppLink>
      </div>
    </div>
  )
}

export default NavBar
