
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useCV } from '../context/CVContext';

const CookieConsent = () => {
    const { t } = useCV();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const isDismissed = localStorage.getItem('cookieConsentDismissed');
        if (!isDismissed) {
            setIsVisible(true);
        }
    }, []);

    const handleDismiss = () => {
        localStorage.setItem('cookieConsentDismissed', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-lg z-[100] transform transition-transform duration-300 ease-in-out">
            <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex-1 text-center sm:text-left">
                    <p className="text-sm sm:text-base font-medium">
                        {t.cookieMessage}
                    </p>
                </div>
                <button
                    onClick={handleDismiss}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap shadow-sm"
                >
                    {t.iUnderstand}
                </button>
            </div>
        </div>
    );
};

export default CookieConsent;
