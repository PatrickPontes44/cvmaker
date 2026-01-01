import React from 'react';
import { useCV } from '../context/CVContext';
import { MapPin, Mail, Phone } from 'lucide-react';

export const Creative = React.forwardRef((props, ref) => {
    const { personalInfo, experience, education, skills, t } = useCV();

    return (
        <div ref={ref} className="w-[210mm] min-h-[297mm] bg-gradient-to-br from-purple-50 to-pink-50 shadow-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            {/* Header with gradient */}
            <header className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white px-10 py-12 rounded-br-[100px]">
                <h1 className="text-5xl font-black mb-3 tracking-tight">{personalInfo.name}</h1>
                <p className="text-2xl font-light mb-6">{personalInfo.title}</p>

                <div className="flex flex-wrap gap-4 text-sm">
                    {personalInfo.email && (
                        <div className="flex items-center gap-2 bg-white/20 px-3 py-2 rounded-full backdrop-blur-sm">
                            <Mail size={14} />
                            <span>{personalInfo.email}</span>
                        </div>
                    )}
                    {personalInfo.phone && (
                        <div className="flex items-center gap-2 bg-white/20 px-3 py-2 rounded-full backdrop-blur-sm">
                            <Phone size={14} />
                            <span>{personalInfo.phone}</span>
                        </div>
                    )}
                    {personalInfo.location && (
                        <div className="flex items-center gap-2 bg-white/20 px-3 py-2 rounded-full backdrop-blur-sm">
                            <MapPin size={14} />
                            <span>{personalInfo.location}</span>
                        </div>
                    )}
                </div>
            </header>

            {/* Content */}
            <div className="px-10 py-8">
                {personalInfo.summary && (
                    <section className="mb-8 bg-white rounded-2xl p-6 shadow-lg">
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">{t.aboutMe}</h2>
                        <p className="text-gray-700 leading-relaxed">{personalInfo.summary}</p>
                    </section>
                )}

                {experience.length > 0 && (
                    <section className="mb-8">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">{t.experience}</h2>
                        <div className="space-y-6">
                            {experience.map(exp => (
                                <div key={exp.id} className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-purple-500">
                                    <div className="flex justify-between items-start mb-3">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                                            <div className="text-purple-600 font-semibold">{exp.company}</div>
                                        </div>
                                        <span className="text-sm text-gray-500 bg-purple-100 px-3 py-1 rounded-full">{exp.dates}</span>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                <div className="grid grid-cols-2 gap-6">
                    {education.length > 0 && (
                        <section>
                            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">{t.education}</h2>
                            <div className="space-y-4">
                                {education.map(edu => (
                                    <div key={edu.id} className="bg-white rounded-xl p-4 shadow">
                                        <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                                        <div className="text-purple-600 text-sm">{edu.school}</div>
                                        <div className="text-xs text-gray-500">{edu.dates}</div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {skills.length > 0 && (
                        <section>
                            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">{t.skills}</h2>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, index) => (
                                    <span key={index} className="px-3 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm rounded-full font-medium shadow">
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
