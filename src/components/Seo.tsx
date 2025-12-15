import { useEffect } from 'react';

interface SeoProps {
  title: string;
  description: string;
}

export function Seo({ title, description }: SeoProps) {
  useEffect(() => {
    const fullTitle = title.includes('Johnson Marketing and Consulting Group')
      ? title
      : `${title} | Johnson Marketing and Consulting Group`;

    document.title = fullTitle;

    let metaDescription = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description;

    // Basic Open Graph tags for social sharing
    const ensureOgTag = (property: string, content: string) => {
      if (!content) return;
      let tag = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    const url = typeof window !== 'undefined' ? window.location.href : '';
    const defaultImage = '/apple-touch-icon.png';

    ensureOgTag('og:title', fullTitle);
    ensureOgTag('og:description', description);
    ensureOgTag('og:type', 'website');
    ensureOgTag('og:url', url);
    ensureOgTag('og:image', defaultImage);
  }, [title, description]);

  return null;
}


