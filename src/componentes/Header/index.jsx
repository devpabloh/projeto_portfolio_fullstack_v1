import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import {FaSun, FaMoon} from "react-icons/fa";
import {FiSettings} from "react-icons/fi";
import {useSettings} from '../../contexts/SettingsContext';
import { useState } from "react";

const Header = ()=>{
    const [showSettings, setShowSettings] = useState(false);
    const {theme, language, toggleTheme, setLanguage} = useSettings();
    
    return (
        <header className={styles.headerContainer}>
            <h2><Link to='/'>Dev. Pablo H.</Link></h2>
            <ul className={styles.navContainer}>
                <li><Link to='/'>Inicio</Link></li>
                <li><Link to='/about'>Sobre</Link></li>
                <li><Link to='/skills'>Habilidades</Link></li>
                <li><Link to='/projects'>Projetos</Link></li>
                <li><Link to='/contact'>Contatos</Link></li>
                <li>
                    <div className={styles.settingsContainer}>
                        <button 
                            onClick={() => setShowSettings(!showSettings)}
                            className={styles.settingsButton}
                        >
                            <FiSettings/>
                        </button>
                        {showSettings && (
                            <div className={styles.settingsDropdown}>
                                <div 
                                    onClick={toggleTheme}
                                    className={styles.themeOption}
                                >
                                    {theme === 'light' ? <FaSun/> : <FaMoon/>}
                                    {theme === 'light' ? 'Claro' : 'Escuro'}
                                </div>
                                <select 
                                    value={language} 
                                    onChange={(e) => setLanguage(e.target.value)}
                                    className={styles.languageSelect}
                                >
                                    <option value="pt">Português</option>
                                    <option value="en">English</option>
                                </select>
                            </div>
                        )}
                    </div>
                </li>
            </ul>
        </header>
    );
};

export default Header;