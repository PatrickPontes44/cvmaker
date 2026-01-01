import React, { useRef } from 'react';
import { useCV } from '../context/CVContext';
import Editor from './Editor';
import Preview from './Preview';
import { Download, LayoutTemplate } from 'lucide-react';
import SEO from './SEO';

import PrintPortal from './PrintPortal';

const EditorPage = () => {
    const { selectedTemplate, setSelectedTemplate, t, personalInfo } = useCV();
    const componentRef = useRef();
    const printRef = useRef();

    const handleDownloadPDF = () => {
        window.print();
    };

    return (
        <div className="flex flex-col h-[calc(100vh-64px)]">
            <SEO
                title={t.editorTitle}
                description={t.editorDesc}
                keywords={t.editorKeywords}
            />

            {/* Hidden Print Preview - Visible ONLY when printing */}
            <PrintPortal>
                <div id="print-content" className="print-only">
                    <Preview ref={printRef} printMode={true} />
                </div>
            </PrintPortal>

            {/* Toolbar */}
            <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between shadow-sm z-10">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-gray-700 font-medium">
                        <LayoutTemplate className="w-5 h-5" />
                        <span>{t.template}:</span>
                    </div>
                    <select
                        value={selectedTemplate}
                        onChange={(e) => setSelectedTemplate(e.target.value)}
                        className="border border-gray-300 rounded-md p-1.5 text-sm focus:ring-indigo-500 focus:border-indigo-500"
                    >
                        <option value="classic">Classic</option>
                        <option value="modern">Modern</option>
                        <option value="minimal">Minimal</option>
                        <option value="executive">Executive</option>
                        <option value="creative">Creative</option>
                        <option value="technical">Technical</option>
                    </select>
                </div>

                <button
                    onClick={handleDownloadPDF}
                    className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors font-medium shadow-sm"
                >
                    <Download className="w-4 h-4" />
                    {t.downloadPdf}
                </button>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex overflow-hidden">
                {/* Editor Panel */}
                <div className="w-full md:w-1/2 lg:w-5/12 overflow-y-auto border-r border-gray-200 bg-gray-50 p-6">
                    <Editor />
                </div>

                {/* Preview Panel */}
                <div className="hidden md:block w-1/2 lg:w-7/12 bg-gray-200 overflow-y-scroll relative">
                    <Preview ref={componentRef} />
                </div>
            </div>
        </div>
    );
};

export default EditorPage;
