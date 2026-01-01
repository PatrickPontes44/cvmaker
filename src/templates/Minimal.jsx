import React from 'react';
import { useCV } from '../context/CVContext';

export const Minimal = React.forwardRef((props, ref) => {
    const { personalInfo, experience, education, skills, t } = useCV();

    return (
        <div ref={ref} className="w-[210mm] min-h-[297mm] bg-white p-16 shadow-2xl mx-auto text-gray-900" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
            {/* Header */}
            <header className="mb-12">
                <h1 className="text-5xl font-light tracking-tight mb-2">{personalInfo.name}</h1>
                <p className="text-xl text-gray-500 font-light mb-6">{personalInfo.title}</p>

                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
                    {personalInfo.location && <span>{personalInfo.location}</span>}
                    {personalInfo.email && <span>{personalInfo.email}</span>}
                    {personalInfo.phone && <span>{personalInfo.phone}</span>}
                </div>
            </header>

            <div className="grid grid-cols-1 gap-10">
                {/* Summary */}
                {personalInfo.summary && (
                    <section>
                        <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">{t.aboutMe}</h2>
                        <p className="text-sm leading-7 text-gray-700 font-light max-w-2xl">{personalInfo.summary}</p>
                    </section>
                )}

                {/* Experience */}
                {experience.length > 0 && (
                    <section>
                        <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">{t.experience}</h2>
                        <div className="space-y-8">
                            {experience.map(exp => (
                                <div key={exp.id} className="grid grid-cols-[120px_1fr] gap-6">
                                    <div className="text-xs text-gray-500 mt-1">{exp.dates}</div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{exp.role}</h3>
                                        <div className="text-sm text-gray-500 mb-2">{exp.company}</div>
                                        <p className="text-sm leading-6 text-gray-600 font-light whitespace-pre-wrap">{exp.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Education */}
                {education.length > 0 && (
                    <section>
                        <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">{t.education}</h2>
                        <div className="space-y-6">
                            {education.map(edu => (
                                <div key={edu.id} className="grid grid-cols-[120px_1fr] gap-6">
                                    <div className="text-xs text-gray-500 mt-1">{edu.dates}</div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{edu.school}</h3>
                                        <div className="text-sm text-gray-500">{edu.degree}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Skills */}
                {skills.length > 0 && (
                    <section>
                        <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">{t.skills}</h2>
                        <div className="flex flex-wrap gap-x-8 gap-y-2">
                            {skills.map((skill, index) => (
                                <span key={index} className="text-sm text-gray-700 font-light">
                                    {skill.trim()}
                                </span>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
});
