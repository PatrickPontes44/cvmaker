import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const PrintPortal = ({ children }) => {
    const [container, setContainer] = useState(null);

    useEffect(() => {
        const div = document.createElement('div');
        div.id = 'print-portal';
        document.body.appendChild(div);
        setContainer(div);

        return () => {
            document.body.removeChild(div);
        };
    }, []);

    if (!container) return null;

    return createPortal(children, container);
};

export default PrintPortal;
