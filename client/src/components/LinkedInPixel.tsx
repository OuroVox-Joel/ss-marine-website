import { useEffect } from "react";

interface LinkedInPixelProps {
  partnerId: string;
  conversionId?: string;
}

/**
 * LinkedIn Insight Tag (Pixel) component
 * 
 * Usage:
 * 1. Get your Partner ID from LinkedIn Campaign Manager
 * 2. Add this component to pages where you want to track conversions
 * 3. For conversion tracking, pass the conversionId prop
 * 
 * Example:
 * <LinkedInPixel partnerId="YOUR_PARTNER_ID" />
 * <LinkedInPixel partnerId="YOUR_PARTNER_ID" conversionId="CONVERSION_ID" />
 */
export default function LinkedInPixel({ partnerId, conversionId }: LinkedInPixelProps) {
  useEffect(() => {
    // LinkedIn Insight Tag script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = `
      _linkedin_partner_id = "${partnerId}";
      window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
      window._linkedin_data_partner_ids.push(_linkedin_partner_id);
    `;
    document.head.appendChild(script);

    // LinkedIn tracking script
    const trackingScript = document.createElement("script");
    trackingScript.type = "text/javascript";
    trackingScript.async = true;
    trackingScript.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
    document.head.appendChild(trackingScript);

    // Noscript fallback
    const noscript = document.createElement("noscript");
    const img = document.createElement("img");
    img.height = 1;
    img.width = 1;
    img.style.display = "none";
    img.alt = "";
    img.src = `https://px.ads.linkedin.com/collect/?pid=${partnerId}&fmt=gif`;
    noscript.appendChild(img);
    document.body.appendChild(noscript);

    // Track conversion if conversionId is provided
    if (conversionId && (window as any).lintrk) {
      (window as any).lintrk('track', { conversion_id: conversionId });
    }

    return () => {
      // Cleanup on unmount
      document.head.removeChild(script);
      document.head.removeChild(trackingScript);
      document.body.removeChild(noscript);
    };
  }, [partnerId, conversionId]);

  return null;
}

/**
 * Helper function to track LinkedIn conversion events
 * Call this when a conversion happens (e.g., form submission)
 */
export function trackLinkedInConversion(conversionId: string) {
  if (typeof window !== 'undefined' && (window as any).lintrk) {
    (window as any).lintrk('track', { conversion_id: conversionId });
  }
}
