import React from 'react'
import { Link, LinkProps } from 'react-router-dom'
import cls from './AppLink.module.scss'
import { classNames } from 'shared/lib/classNames';

export const enum AppLinkTheme {
  PRIMARY ='primary',
  SECONDARY = 'secondary'
}

type AppLinkProps = {
    className?: string;
    children: React.ReactNode;
    theme?: string;
} & LinkProps

function AppLink({className, children, to, theme = AppLinkTheme.PRIMARY}: AppLinkProps) {
  return (
    <Link className={classNames(cls.link, {}, [className, cls[theme]])} to={to}>{children}</Link>
  )
}

export default AppLink
