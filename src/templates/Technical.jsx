import React from 'react';
import { useCV } from '../context/CVContext';
import { MapPin, Mail, Phone } from 'lucide-react';

export const Technical = React.forwardRef((props, ref) => {
    const { personalInfo, experience, education, skills, t } = useCV();

    return (
        <div ref={ref} className="w-[210mm] min-h-[297mm] bg-white shadow-2xl mx-auto" style={{ fontFamily: 'Roboto Mono, monospace' }}>
            {/* Header */}
            <header className="bg-black text-green-400 px-10 py-8 border-b-4 border-green-400">
                <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-green-500">$</span>
                    <h1 className="text-3xl font-bold">{personalInfo.name}</h1>
                </div>
                <p className="text-lg text-green-300 mb-4">{'> '}{personalInfo.title}</p>

                <div className="flex flex-wrap gap-4 text-sm">
                    {personalInfo.email && (
                        <div className="flex items-center gap-2">
                            <Mail size={14} className="text-green-500" />
                            <span>{personalInfo.email}</span>
                        </div>
                    )}
                    {personalInfo.phone && (
                        <div className="flex items-center gap-2">
                            <Phone size={14} className="text-green-500" />
                            <span>{personalInfo.phone}</span>
                        </div>
                    )}
                    {personalInfo.location && (
                        <div className="flex items-center gap-2">
                            <MapPin size={14} className="text-green-500" />
                            <span>{personalInfo.location}</span>
                        </div>
                    )}
                </div>
            </header>

            <div className="grid grid-cols-3 gap-0">
                {/* Sidebar */}
                <aside className="col-span-1 bg-gray-900 text-gray-300 p-6">
                    {skills.length > 0 && (
                        <section className="mb-8">
                            <h2 className="text-lg font-bold text-green-400 mb-4 flex items-center gap-2">
                                <span className="text-green-500">{'# '}</span>{t.skills}
                            </h2>
                            <div className="space-y-2">
                                {skills.map((skill, index) => (
                                    <div key={index} className="flex items-center gap-2 text-sm">
                                        <span className="text-green-500">{'>'}</span>
                                        <span>{skill.trim()}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {education.length > 0 && (
                        <section>
                            <h2 className="text-lg font-bold text-green-400 mb-4 flex items-center gap-2">
                                <span className="text-green-500">{'# '}</span>{t.education}
                            </h2>
                            <div className="space-y-4 text-sm">
                                {education.map(edu => (
                                    <div key={edu.id}>
                                        <div className="font-bold text-green-300">{edu.degree}</div>
                                        <div className="text-gray-400">{edu.school}</div>
                                        <div className="text-xs text-gray-500">{edu.dates}</div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </aside>

                {/* Main Content */}
                <main className="col-span-2 p-8 bg-gray-50">
                    {personalInfo.summary && (
                        <section className="mb-8">
                            <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <span className="text-green-600">{'## '}</span>{t.aboutMe}
                            </h2>
                            <div className="bg-white p-4 rounded border-l-4 border-green-500">
                                <p className="text-gray-700 leading-relaxed text-sm">{personalInfo.summary}</p>
                            </div>
                        </section>
                    )}

                    {experience.length > 0 && (
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="text-green-600">{'## '}</span>{t.experience}
                            </h2>
                            <div className="space-y-6">
                                {experience.map(exp => (
                                    <div key={exp.id} className="bg-white p-5 rounded border-l-4 border-gray-300 hover:border-green-500 transition-colors">
                                        <div className="flex justify-between items-baseline mb-2">
                                            <h3 className="text-lg font-bold text-gray-900">
                                                <span className="text-green-600">{'> '}</span>{exp.role}
                                            </h3>
                                            <span className="text-xs text-gray-500 font-mono bg-gray-100 px-2 py-1 rounded">{exp.dates}</span>
                                        </div>
                                        <div className="text-green-600 font-semibold text-sm mb-3">{exp.company}</div>
                                        <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-wrap">{exp.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </main>
            </div>
        </div>
    );
});
