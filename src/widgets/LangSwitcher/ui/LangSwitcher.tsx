import {classNames} from "shared/lib/classNames/classNames";
import cls from './LangSwitcher.module.scss'
import {AppButton, ThemeButton} from "shared/ui/AppButton/AppButton";
import {useTranslation} from "react-i18next";
import RuLangIcon from "shared/assets/icons/langSwitcher-ru.svg";
import EnLangIcon from "shared/assets/icons/langSwitcher-en.svg";

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
    const {i18n} = useTranslation()

    const handleToggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru') 
    }

    return (
        <AppButton onClick={handleToggleLanguage} theme={ThemeButton.CLEAR} className={classNames(cls.LangSwitcher, {}, [className])}>
            {i18n.language === 'ru'
                ? <RuLangIcon />
                : <EnLangIcon />
            }
        </AppButton>
    );
};

