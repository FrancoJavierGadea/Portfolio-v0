import { useEffect, useState } from "react";

const DARK = {mode: 'dark', isDark: true, isLight: false};

const LIGHT = {mode: 'light', isDark: false, isLight: true};

function useTheme() {

    const [theme, setTheme] = useState(DARK);

    useEffect(() => {

        const query = window.matchMedia('(prefers-color-scheme: dark)');


        setTheme(query.matches ? DARK : LIGHT);


        const listener = (e) => {

            setTheme(query.matches ? DARK : LIGHT);
        }

        query.addEventListener('change', listener);

        return () => {

            query.removeEventListener('change', listener);
        }

    }, []);

    useEffect(() => {

        document.documentElement.setAttribute('data-bs-theme', theme.mode);
        
    }, [theme]);

    const changeTheme = () => {

        setTheme(({mode}) => {

            return mode === 'dark' ? LIGHT : DARK;
        });
    }


    return {theme, changeTheme};
}

export default useTheme;