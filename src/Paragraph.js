import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function Paragraph() {
    const context = useContext(ThemeContext);
    return (
        <p className={context.theme}>
            em la ai tu dau buoc den noi day diu dang chan phuong
        </p>
    );
}

export default Paragraph;
