import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCV } from '../context/CVContext';
import { Classic } from '../templates/Classic';
import { Modern } from '../templates/Modern';
import { Minimal } from '../templates/Minimal';
import { Executive } from '../templates/Executive';
import { Creative } from '../templates/Creative';
import { Technical } from '../templates/Technical';
import SEO from './SEO';

const TemplatesPage = () => {
    const navigate = useNavigate();
    const { setSelectedTemplate, t } = useCV();

    const templates = [
        { id: 'classic', name: 'Classic', Component: Classic, description: t.classicDesc },
        { id: 'modern', name: 'Modern', Component: Modern, description: t.modernDesc },
        { id: 'minimal', name: 'Minimal', Component: Minimal, description: t.minimalDesc },
        { id: 'executive', name: 'Executive', Component: Executive, description: t.executiveDesc },
        { id: 'creative', name: 'Creative', Component: Creative, description: t.creativeDesc },
        { id: 'technical', name: 'Technical', Component: Technical, description: t.technicalDesc },
    ];

    const handleSelectTemplate = (templateId) => {
        setSelectedTemplate(templateId);
        navigate('/editor');
    };

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <SEO
                title={t.templatesTitle}
                description={t.templatesPageDesc}
                keywords={t.templatesKeywords}
            />
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">{t.chooseTemplate}</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        {t.chooseTemplateDesc}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {templates.map((template) => (
                        <div key={template.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col">
                            {/* Preview Area - Scaled down */}
                            <div className="h-[400px] bg-gray-100 overflow-hidden relative group cursor-pointer" onClick={() => handleSelectTemplate(template.id)}>
                                <div className="w-full h-full flex justify-center pt-8">
                                    <div className="shadow-lg pointer-events-none select-none bg-white" style={{ width: '210mm', minHeight: '297mm', transform: 'scale(0.35)', transformOrigin: 'top center' }}>
                                        <template.Component />
                                    </div>
                                </div>

                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-indigo-900/0 group-hover:bg-indigo-900/10 transition-colors flex items-center justify-center">
                                    <button className="opacity-0 group-hover:opacity-100 bg-white text-indigo-600 font-bold py-3 px-6 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                        {t.useTemplate}
                                    </button>
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{template.name}</h3>
                                <p className="text-gray-600 text-sm mb-6 flex-1">{template.description}</p>
                                <button
                                    onClick={() => handleSelectTemplate(template.id)}
                                    className="w-full py-3 px-4 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
                                >
                                    {t.selectTemplate}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TemplatesPage;
