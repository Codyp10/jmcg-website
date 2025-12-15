// Google Analytics 4 utility functions

// Extend Window interface to include gtag
declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

/**
 * Track a page view for SPA navigation
 */
export function trackPageView(page: string): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-2W0TYXDXF3', {
      page_path: page,
    });
  }
}

/**
 * Track a custom event
 */
export function trackEvent(eventName: string, parameters?: Record<string, any>): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
}

/**
 * Track form submission
 */
export function trackFormSubmission(formName: string = 'contact'): void {
  trackEvent('form_submission', {
    form_name: formName,
  });
}

/**
 * Track CTA button click
 */
export function trackCTAClick(buttonName: string, location: string): void {
  trackEvent('cta_click', {
    button_name: buttonName,
    location: location,
  });
}

/**
 * Track external link click
 */
export function trackExternalLink(url: string, linkName: string): void {
  trackEvent('external_link_click', {
    link_url: url,
    link_name: linkName,
  });
}

