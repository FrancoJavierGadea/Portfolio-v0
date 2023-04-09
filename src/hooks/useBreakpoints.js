import { useEffect, useState } from "react";


const mediaQuerys = {
    'sm': '(min-width: 576px)',
    'md': '(min-width: 768px)',
    'lg': '(min-width: 992px)',
    'xl': '(min-width: 1200px)',
    'xxl': '(min-width: 1400px)'
}

function useBreakPoints(breakPoint = 'xxl') {

    const [value, setValue] = useState(false);


    useEffect(() => {

        const query = window.matchMedia(mediaQuerys[breakPoint]);


        setValue(query.matches);
        
        
        const listener = (e) => {

            setValue(e.matches);
        }

        query.addEventListener('change', listener);
        
        return () => {

            query.removeEventListener('change', listener);
        }

    }, []);

 
    return [value];
}

export default useBreakPoints;