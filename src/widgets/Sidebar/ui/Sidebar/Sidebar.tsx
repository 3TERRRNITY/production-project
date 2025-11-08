import {classNames} from "shared/lib/classNames/classNames"
import cls from './Sidebar.module.scss'
import {useState} from "react"
import {ThemeSwitcher} from "widgets/ThemeSwitcher"
import {LangSwitcher} from "widgets/LangSwitcher"
import {AppButton, ThemeButton} from "shared/ui/AppButton/AppButton"

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const handleToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <AppButton onClick={handleToggle} theme={ThemeButton.CLEAR}>

            </AppButton>
            <div className={classNames(cls.switchers, {[cls.switcherCollapsed]: collapsed}, [])}>
                <ThemeSwitcher/>
                <span className={classNames(cls.sidebarDivider, {[cls.sidebarDividerCollapsed]: collapsed}, [])} />
                <LangSwitcher />
            </div>
        </div>
    )
}

