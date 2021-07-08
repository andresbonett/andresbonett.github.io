export const GTM_ID = "GTM-THH4MFC"

declare global {
  interface Window {
    dataLayer: any;
  }
}

export const pageview = (url) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  })
}