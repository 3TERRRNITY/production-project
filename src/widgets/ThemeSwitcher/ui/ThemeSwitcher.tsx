import {classNames} from "shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss'
import {Theme, useTheme} from "app/providers/ThemeProvider";
import LightIcon from 'shared/assets/icons/themeSwitcher-light.svg';
import DarkIcon from 'shared/assets/icons/themeSwitcher-dark.svg';
import {AppButton, ThemeButton} from "shared/ui/AppButton/AppButton";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {toggleTheme, theme} = useTheme()
    return (
            <AppButton theme={ThemeButton.CLEAR} className={classNames(cls.ThemeSwitcher, {}, [className])} onClick={toggleTheme}>
                {theme === Theme.LIGHT ? (
                    <LightIcon />
                ) : (
                    <DarkIcon   />
                )}
            </AppButton>
    );
};

