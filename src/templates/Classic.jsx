import React from 'react';
import { useCV } from '../context/CVContext';
import { MapPin, Mail, Phone, Linkedin } from 'lucide-react';

export const Classic = React.forwardRef((props, ref) => {
    const { personalInfo, experience, education, skills, t } = useCV();

    return (
        <div ref={ref} className="w-[210mm] min-h-[297mm] bg-white p-12 shadow-2xl mx-auto text-gray-800" style={{ fontFamily: 'Georgia, serif' }}>
            {/* Header */}
            <header className="border-b-2 border-gray-800 pb-6 mb-8 text-center">
                <h1 className="text-4xl font-bold uppercase tracking-wider mb-2">{personalInfo.name}</h1>
                <p className="text-xl font-light italic text-gray-600 mb-4">{personalInfo.title}</p>

                <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
                    {personalInfo.location && (
                        <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" /> {personalInfo.location}
                        </div>
                    )}
                    {personalInfo.email && (
                        <div className="flex items-center gap-1">
                            <Mail className="w-4 h-4" /> {personalInfo.email}
                        </div>
                    )}
                    {personalInfo.phone && (
                        <div className="flex items-center gap-1">
                            <Phone className="w-4 h-4" /> {personalInfo.phone}
                        </div>
                    )}
                </div>
            </header>

            {/* Summary */}
            {personalInfo.summary && (
                <section className="mb-8">
                    <h2 className="text-lg font-bold uppercase tracking-widest border-b border-gray-300 mb-4 pb-1">{t.summary}</h2>
                    <p className="text-sm leading-relaxed text-justify">{personalInfo.summary}</p>
                </section>
            )}

            {/* Experience */}
            {experience.length > 0 && (
                <section className="mb-8">
                    <h2 className="text-lg font-bold uppercase tracking-widest border-b border-gray-300 mb-4 pb-1">{t.workHistory}</h2>
                    <div className="space-y-6">
                        {experience.map(exp => (
                            <div key={exp.id}>
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="font-bold text-md">{exp.role}</h3>
                                    <span className="text-sm italic">{exp.dates}</span>
                                </div>
                                <div className="text-sm font-semibold mb-2">{exp.company}</div>
                                <p className="text-sm leading-relaxed whitespace-pre-wrap">{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Education */}
            {education.length > 0 && (
                <section className="mb-8">
                    <h2 className="text-lg font-bold uppercase tracking-widest border-b border-gray-300 mb-4 pb-1">{t.education}</h2>
                    <div className="space-y-4">
                        {education.map(edu => (
                            <div key={edu.id}>
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="font-bold text-md">{edu.school}</h3>
                                    <span className="text-sm italic">{edu.dates}</span>
                                </div>
                                <div className="text-sm">{edu.degree}</div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Skills */}
            {skills.length > 0 && (
                <section className="mb-8">
                    <h2 className="text-lg font-bold uppercase tracking-widest border-b border-gray-300 mb-4 pb-1">{t.skills}</h2>
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill, index) => (
                            <span key={index} className="px-3 py-1 bg-gray-100 rounded text-sm border border-gray-200">
                                {skill.trim()}
                            </span>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
});
