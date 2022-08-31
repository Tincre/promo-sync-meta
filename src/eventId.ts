export function generateEventIdClientSide(): string | undefined {
  if (typeof window !== 'undefined') {
    const gtmContainerId = 'GTM-57QS65R';
    if (typeof window?.google_tag_manager !== 'undefined') {
      var gtmData =
        window.google_tag_manager[gtmContainerId].dataLayer.get('gtm');
      return gtmData.start + '.' + gtmData.uniqueEventId;
    } else {
      return window.crypto.randomUUID().replaceAll('-', '');
    }
  }
}
