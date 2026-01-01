import React from 'react';
import { useCV } from '../context/CVContext';
import { Plus, Trash2 } from 'lucide-react';

const Editor = () => {
    const {
        personalInfo, setPersonalInfo,
        experience, setExperience,
        education, setEducation,
        skills, setSkills,
        t
    } = useCV();

    const handlePersonalChange = (e) => {
        const { name, value } = e.target;
        setPersonalInfo(prev => ({ ...prev, [name]: value }));
    };

    const handleExperienceChange = (id, e) => {
        const { name, value } = e.target;
        setExperience(prev => prev.map(exp => exp.id === id ? { ...exp, [name]: value } : exp));
    };

    const addExperience = () => {
        setExperience(prev => [...prev, { id: Date.now(), role: '', company: '', dates: '', description: '' }]);
    };

    const removeExperience = (id) => {
        setExperience(prev => prev.filter(exp => exp.id !== id));
    };

    const handleEducationChange = (id, e) => {
        const { name, value } = e.target;
        setEducation(prev => prev.map(edu => edu.id === id ? { ...edu, [name]: value } : edu));
    };

    const addEducation = () => {
        setEducation(prev => [...prev, { id: Date.now(), degree: '', school: '', dates: '' }]);
    };

    const removeEducation = (id) => {
        setEducation(prev => prev.filter(edu => edu.id !== id));
    };

    const handleSkillsChange = (e) => {
        setSkills(e.target.value.split(','));
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 overflow-y-auto h-full space-y-8">

            {/* Personal Info */}
            <section>
                <h2 className="text-xl font-semibold mb-4 text-gray-800">{t.personalInfo}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">{t.fullName}</label>
                        <input type="text" name="name" value={personalInfo.name} onChange={handlePersonalChange} className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">{t.jobTitle}</label>
                        <input type="text" name="title" value={personalInfo.title} onChange={handlePersonalChange} className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">{t.email}</label>
                        <input type="email" name="email" value={personalInfo.email} onChange={handlePersonalChange} className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">{t.phone}</label>
                        <input type="text" name="phone" value={personalInfo.phone} onChange={handlePersonalChange} className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">{t.location}</label>
                        <input type="text" name="location" value={personalInfo.location} onChange={handlePersonalChange} className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">{t.summary}</label>
                        <textarea name="summary" value={personalInfo.summary} onChange={handlePersonalChange} rows="3" className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>
                </div>
            </section>

            {/* Experience */}
            <section>
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">{t.experience}</h2>
                    <button onClick={addExperience} className="flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                        <Plus className="w-4 h-4" /> {t.add}
                    </button>
                </div>
                <div className="space-y-6">
                    {experience.map((exp, index) => (
                        <div key={exp.id} className="p-4 bg-gray-50 rounded-md border border-gray-100 relative group">
                            <button onClick={() => removeExperience(exp.id)} className="absolute top-2 right-2 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Trash2 className="w-4 h-4" />
                            </button>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-medium text-gray-500 mb-1">{t.role}</label>
                                    <input type="text" name="role" value={exp.role} onChange={(e) => handleExperienceChange(exp.id, e)} className="w-full p-2 bg-white border border-gray-200 rounded-sm text-sm" />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-gray-500 mb-1">{t.company}</label>
                                    <input type="text" name="company" value={exp.company} onChange={(e) => handleExperienceChange(exp.id, e)} className="w-full p-2 bg-white border border-gray-200 rounded-sm text-sm" />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-xs font-medium text-gray-500 mb-1">{t.dates}</label>
                                    <input type="text" name="dates" value={exp.dates} onChange={(e) => handleExperienceChange(exp.id, e)} className="w-full p-2 bg-white border border-gray-200 rounded-sm text-sm" placeholder="e.g. Jan 2020 - Present" />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-xs font-medium text-gray-500 mb-1">{t.description}</label>
                                    <textarea name="description" value={exp.description} onChange={(e) => handleExperienceChange(exp.id, e)} rows="3" className="w-full p-2 bg-white border border-gray-200 rounded-sm text-sm" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Education */}
            <section>
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">{t.education}</h2>
                    <button onClick={addEducation} className="flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                        <Plus className="w-4 h-4" /> {t.add}
                    </button>
                </div>
                <div className="space-y-4">
                    {education.map((edu) => (
                        <div key={edu.id} className="p-4 bg-gray-50 rounded-md border border-gray-100 relative group">
                            <button onClick={() => removeEducation(edu.id)} className="absolute top-2 right-2 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Trash2 className="w-4 h-4" />
                            </button>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-medium text-gray-500 mb-1">{t.degree}</label>
                                    <input type="text" name="degree" value={edu.degree} onChange={(e) => handleEducationChange(edu.id, e)} className="w-full p-2 bg-white border border-gray-200 rounded-sm text-sm" />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-gray-500 mb-1">{t.school}</label>
                                    <input type="text" name="school" value={edu.school} onChange={(e) => handleEducationChange(edu.id, e)} className="w-full p-2 bg-white border border-gray-200 rounded-sm text-sm" />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-xs font-medium text-gray-500 mb-1">{t.dates}</label>
                                    <input type="text" name="dates" value={edu.dates} onChange={(e) => handleEducationChange(edu.id, e)} className="w-full p-2 bg-white border border-gray-200 rounded-sm text-sm" placeholder="e.g. 2016 - 2020" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Skills */}
            <section>
                <h2 className="text-xl font-semibold mb-4 text-gray-800">{t.skills}</h2>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.skillsList}</label>
                    <textarea
                        value={skills.join(', ')}
                        onChange={handleSkillsChange}
                        rows="3"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="React, JavaScript, CSS, HTML..."
                    />
                </div>
            </section>

        </div>
    );
};

export default Editor;
