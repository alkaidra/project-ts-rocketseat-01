import { PencilLine } from '@phosphor-icons/react'

import styles from './Sidebar.module.css'

import backgroundAside from '../assets/background-aside.svg'
import { Avatar } from './Avatar'

export function Sidebar() {
    return (
        <aside
            className={styles.sidebar}
        >
            <img 
                src={backgroundAside}
                className={styles.cover}    
            />

            <div
                className={styles.profile}
            >
                <Avatar
                    // src="https://avatars.githubusercontent.com/u/108828773?v=4"
                    src="https://github.com/joaovitor.png"
                />
                <strong>João</strong>
                <span>Desenvolvedor</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar o seu perfil
                </a>
            </footer>
        </aside>
    )
}