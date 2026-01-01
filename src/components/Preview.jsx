import React from 'react';
import { useCV } from '../context/CVContext';
import { Classic } from '../templates/Classic';
import { Modern } from '../templates/Modern';
import { Minimal } from '../templates/Minimal';
import { Executive } from '../templates/Executive';
import { Creative } from '../templates/Creative';
import { Technical } from '../templates/Technical';

const Preview = React.forwardRef((props, ref) => {
    const { selectedTemplate } = useCV();

    const renderTemplate = () => {
        switch (selectedTemplate) {
            case 'modern':
                return <Modern ref={ref} />;
            case 'minimal':
                return <Minimal ref={ref} />;
            case 'executive':
                return <Executive ref={ref} />;
            case 'creative':
                return <Creative ref={ref} />;
            case 'technical':
                return <Technical ref={ref} />;
            case 'classic':
            default:
                return <Classic ref={ref} />;
        }
    };

    if (props.printMode) {
        return renderTemplate();
    }

    return (
        <div className="bg-gray-100 p-8 flex justify-center overflow-auto h-full min-h-screen">
            <div className="transform scale-[0.6] md:scale-[0.7] lg:scale-[0.8] origin-top">
                {renderTemplate()}
            </div>
        </div>
    );
});

export default Preview;
