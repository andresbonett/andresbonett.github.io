export const GTM_ID = "GTM-THH4MFC";

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export const pageview = (url: string) => {
  window.dataLayer.push({
    event: "pageview",
    page: url,
  });
};
