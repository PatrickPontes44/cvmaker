import React from 'react';
import { useCV } from '../context/CVContext';
import { MapPin, Mail, Phone } from 'lucide-react';

export const Executive = React.forwardRef((props, ref) => {
    const { personalInfo, experience, education, skills, t } = useCV();

    return (
        <div ref={ref} className="w-[210mm] min-h-[297mm] bg-white shadow-2xl mx-auto" style={{ fontFamily: 'Georgia, serif' }}>
            {/* Header */}
            <header className="bg-gradient-to-r from-slate-800 to-slate-900 text-white px-12 py-10">
                <h1 className="text-4xl font-bold mb-2 tracking-wide">{personalInfo.name}</h1>
                <p className="text-xl text-slate-300 mb-6 italic">{personalInfo.title}</p>

                <div className="flex flex-wrap gap-6 text-sm text-slate-300">
                    {personalInfo.email && (
                        <div className="flex items-center gap-2">
                            <Mail size={16} />
                            <span>{personalInfo.email}</span>
                        </div>
                    )}
                    {personalInfo.phone && (
                        <div className="flex items-center gap-2">
                            <Phone size={16} />
                            <span>{personalInfo.phone}</span>
                        </div>
                    )}
                    {personalInfo.location && (
                        <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span>{personalInfo.location}</span>
                        </div>
                    )}
                </div>
            </header>

            {/* Content */}
            <div className="px-12 py-8">
                {personalInfo.summary && (
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b-2 border-slate-800">{t.profile}</h2>
                        <p className="text-slate-700 leading-relaxed">{personalInfo.summary}</p>
                    </section>
                )}

                {experience.length > 0 && (
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b-2 border-slate-800">{t.experience}</h2>
                        <div className="space-y-6">
                            {experience.map(exp => (
                                <div key={exp.id}>
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                                        <span className="text-sm text-slate-600 italic">{exp.dates}</span>
                                    </div>
                                    <div className="text-slate-700 font-semibold mb-2">{exp.company}</div>
                                    <p className="text-slate-600 leading-relaxed whitespace-pre-wrap">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                <div className="grid grid-cols-2 gap-8">
                    {education.length > 0 && (
                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b-2 border-slate-800">{t.education}</h2>
                            <div className="space-y-4">
                                {education.map(edu => (
                                    <div key={edu.id}>
                                        <h3 className="font-bold text-slate-900">{edu.degree}</h3>
                                        <div className="text-slate-700">{edu.school}</div>
                                        <div className="text-sm text-slate-600 italic">{edu.dates}</div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {skills.length > 0 && (
                        <section>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b-2 border-slate-800">{t.skills}</h2>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, index) => (
                                    <span key={index} className="px-3 py-1 bg-slate-100 text-slate-800 text-sm rounded border border-slate-300">
                                        {skill.trim()}
                                    </span>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </div>
    );
});
