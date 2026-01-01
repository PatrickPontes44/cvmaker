import React, { createContext, useState, useContext } from 'react';
import { translations } from '../utils/translations';

const CVContext = createContext();

export const useCV = () => useContext(CVContext);

export const CVProvider = ({ children }) => {
    const [language, setLanguage] = useState('pt'); // Default to PT as requested implicitly ("pt bt")
    const t = translations[language];

    const [personalInfo, setPersonalInfo] = useState({
        name: 'John Doe',
        title: 'Software Engineer',
        email: 'john@example.com',
        phone: '(123) 456-7890',
        location: 'New York, NY',
        summary: 'Experienced software engineer with a passion for building scalable web applications.',
    });

    const [experience, setExperience] = useState([
        {
            id: 1,
            role: 'Frontend Developer',
            company: 'Tech Corp',
            dates: '2020 - Present',
            description: 'Developed and maintained the main product dashboard using React and Tailwind CSS.',
        },
    ]);

    const [education, setEducation] = useState([
        {
            id: 1,
            degree: 'B.S. Computer Science',
            school: 'University of Technology',
            dates: '2016 - 2020',
        },
    ]);

    const [skills, setSkills] = useState(['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Node.js']);

    const [selectedTemplate, setSelectedTemplate] = useState('classic');

    const value = {
        personalInfo,
        setPersonalInfo,
        experience,
        setExperience,
        education,
        setEducation,
        skills,
        setSkills,
        selectedTemplate,
        setSelectedTemplate,
        language,
        setLanguage,
        t
    };

    return <CVContext.Provider value={value}>{children}</CVContext.Provider>;
};
