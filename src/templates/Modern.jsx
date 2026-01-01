import React from 'react';
import { useCV } from '../context/CVContext';
import { MapPin, Mail, Phone } from 'lucide-react';

export const Modern = React.forwardRef((props, ref) => {
    const { personalInfo, experience, education, skills, t } = useCV();

    return (
        <div ref={ref} className="w-[210mm] min-h-[297mm] bg-white flex shadow-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            {/* Sidebar */}
            <aside className="w-1/3 bg-slate-900 text-white p-8">
                <div className="mb-10">
                    <h1 className="text-2xl font-bold mb-2 leading-tight">{personalInfo.name}</h1>
                    <p className="text-blue-400 text-sm font-medium uppercase tracking-wide">{personalInfo.title}</p>
                </div>

                <div className="space-y-6 text-sm mb-12">
                    {personalInfo.email && (
                        <div className="flex items-center gap-3">
                            <span className="p-2 bg-slate-800 rounded-full text-blue-400"><Mail size={14} /></span>
                            <span className="break-all text-slate-300">{personalInfo.email}</span>
                        </div>
                    )}
                    {personalInfo.phone && (
                        <div className="flex items-center gap-3">
                            <span className="p-2 bg-slate-800 rounded-full text-blue-400"><Phone size={14} /></span>
                            <span className="text-slate-300">{personalInfo.phone}</span>
                        </div>
                    )}
                    {personalInfo.location && (
                        <div className="flex items-center gap-3">
                            <span className="p-2 bg-slate-800 rounded-full text-blue-400"><MapPin size={14} /></span>
                            <span className="text-slate-300">{personalInfo.location}</span>
                        </div>
                    )}
                </div>

                {education.length > 0 && (
                    <section className="mb-10">
                        <h2 className="text-lg font-bold text-white uppercase tracking-wider mb-6 pb-2 border-b border-slate-700">{t.education}</h2>
                        <div className="space-y-6">
                            {education.map(edu => (
                                <div key={edu.id}>
                                    <h3 className="font-bold text-white">{edu.degree}</h3>
                                    <div className="text-blue-400 text-xs mb-1">{edu.school}</div>
                                    <div className="text-slate-400 text-xs italic">{edu.dates}</div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {skills.length > 0 && (
                    <section>
                        <h2 className="text-lg font-bold text-white uppercase tracking-wider mb-6 pb-2 border-b border-slate-700">{t.skills}</h2>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill, index) => (
                                <span key={index} className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-300">
                                    {skill.trim()}
                                </span>
                            ))}
                        </div>
                    </section>
                )}
            </aside>

            {/* Main Content */}
            <main className="w-2/3 p-10 bg-gray-50 text-slate-800">
                {personalInfo.summary && (
                    <section className="mb-10">
                        <h2 className="text-xl font-bold text-slate-900 border-l-4 border-blue-500 pl-4 mb-4 uppercase tracking-wide">{t.profile}</h2>
                        <p className="text-slate-600 leading-relaxed text-sm">{personalInfo.summary}</p>
                    </section>
                )}

                {experience.length > 0 && (
                    <section>
                        <h2 className="text-xl font-bold text-slate-900 border-l-4 border-blue-500 pl-4 mb-6 uppercase tracking-wide">{t.workHistory}</h2>
                        <div className="space-y-8">
                            {experience.map(exp => (
                                <div key={exp.id} className="relative pl-6 border-l border-slate-200">
                                    <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
                                    <h3 className="font-bold text-lg text-slate-900 leading-none mb-1">{exp.role}</h3>
                                    <div className="flex justify-between text-sm text-blue-600 font-medium mb-2">
                                        <span>{exp.company}</span>
                                        <span>{exp.dates}</span>
                                    </div>
                                    <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-wrap">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </main>
        </div>
    );
});
