
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords }) => {
    const defaultTitle = "CVGen - Professional Resume Builder";
    const defaultDescription = "Create professional resumes in minutes with CVGen. Choose from multiple modern templates, download in PDF, and get hired faster. Free and easy to use.";
    const defaultKeywords = "resume builder, cv maker, free resume builder, create cv online, pdf resume, professional cv templates";

    const siteTitle = title ? `${title} | CVGen` : defaultTitle;
    const metaDescription = description || defaultDescription;
    const metaKeywords = keywords || defaultKeywords;

    return (
        <Helmet>
            <title>{siteTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={metaKeywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={metaDescription} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:title" content={siteTitle} />
            <meta property="twitter:description" content={metaDescription} />
        </Helmet>
    );
};

export default SEO;
