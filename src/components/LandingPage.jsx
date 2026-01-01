import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Wand2, Download } from 'lucide-react';
import { useCV } from '../context/CVContext';
import SEO from './SEO';

const LandingPage = () => {
    const { t } = useCV();

    return (
        <div className="bg-white">
            <SEO
                title={t.homeTitle}
                description={t.homeDesc}
                keywords={t.homeKeywords}
            />
            {/* Hero Section */}
            <section className="relative overflow-hidden pt-20 pb-32">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-50 to-white -z-10" />
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
                        {t.heroTitle.split(t.heroTitleHighlight)[0]}<span className="text-indigo-600">{t.heroTitleHighlight}</span>{t.heroTitle.split(t.heroTitleHighlight)[1]}
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
                        {t.heroDesc}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/editor" className="px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
                            {t.getStarted} <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link to="/templates" className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all flex items-center gap-2">
                            {t.viewTemplates}
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 text-indigo-600">
                                <Wand2 className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{t.easyBuilder}</h3>
                            <p className="text-gray-600">{t.easyBuilderDesc}</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 text-indigo-600">
                                <CheckCircle2 className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{t.profTemplates}</h3>
                            <p className="text-gray-600">{t.profTemplatesDesc}</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 text-indigo-600">
                                <Download className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{t.instantDownload}</h3>
                            <p className="text-gray-600">{t.instantDownloadDesc}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
