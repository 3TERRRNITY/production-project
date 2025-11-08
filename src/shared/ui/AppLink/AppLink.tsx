import {classNames} from "shared/lib/classNames/classNames"
import cls from './AppLink.module.scss'
import type { LinkProps} from "react-router-dom"
import {Link} from "react-router-dom"
import type {FC} from "react"

export enum AppLinkTheme {
    primary = 'primary',
    secondary = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
     const {className, children, to, theme, ...otherProps} = props
    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    )
}

