'use client'

import { NextSeo } from 'next-seo';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
}

export default function SEO({
  title = 'WINUC | 团队官方网站',
  description = 'WINUC团队的官方网站，展示我们的团队、项目和价值观',
  canonical,
  ogType = 'website',
  ogImage = '/images/og-image.jpg',
  twitterCard = 'summary_large_image'
}: SEOProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://winuc.com';
  const fullCanonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const fullOgImageUrl = `${siteUrl}${ogImage}`;

  return (
    <NextSeo
      title={title}
      description={description}
      canonical={fullCanonicalUrl}
      openGraph={{
        url: fullCanonicalUrl,
        title,
        description,
        type: ogType,
        images: [
          {
            url: fullOgImageUrl,
            width: 1200,
            height: 630,
            alt: title,
          }
        ],
        site_name: 'WINUC',
      }}
      twitter={{
        handle: '@winuc',
        site: '@winuc',
        cardType: twitterCard,
      }}
      additionalMetaTags={[
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
        },
        {
          name: 'theme-color',
          content: '#ffffff'
        }
      ]}
    />
  );
} 