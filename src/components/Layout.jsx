import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FileText, Github, Languages } from 'lucide-react';
import { useCV } from '../context/CVContext';

const Layout = ({ children }) => {
    const location = useLocation();
    const isEditor = location.pathname.startsWith('/editor');
    const { language, setLanguage, t } = useCV();

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'en' ? 'pt' : 'en');
    };

    return (
        <div className="min-h-screen flex flex-col font-sans text-gray-900">
            <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 font-bold text-xl text-indigo-600">
                        <FileText className="w-6 h-6" />
                        <span>CV Maker</span>
                    </Link>

                    <nav className="flex items-center gap-6">
                        <Link to="/" className="text-sm font-medium hover:text-indigo-600 transition-colors">{t.home}</Link>
                        <Link to="/editor" className="text-sm font-medium hover:text-indigo-600 transition-colors">{t.editor}</Link>
                        <Link to="/templates" className="text-sm font-medium hover:text-indigo-600 transition-colors">{t.viewTemplates}</Link>
                    </nav>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
                        >
                            <Languages className="w-4 h-4" />
                            <span>{language === 'en' ? 'EN' : 'PT'}</span>
                        </button>
                        <a href="https://github.com/PatrickPontes44/cvmaker" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                        {!isEditor && (
                            <Link to="/editor" className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm cursor-pointer">
                                {t.createCv}
                            </Link>
                        )}
                    </div>
                </div>
            </header>

            <main className="flex-1">
                {children}
            </main>

            <footer className="bg-gray-50 border-t border-gray-200 py-8 mt-auto">
                <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} CV MAKER. Feito com ❤️ por <a href="https://patrickpontes.com" target="_blank" rel="noopener noreferrer">Patrick Pontes</a>.</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
