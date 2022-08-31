export {};

interface GtmDataProps {
  "start": string;
  "uniqueEventId": string;
}
interface GetGtm {
  get: (gtm: string) => GtmDataProps;
}
interface GtmDataLayer {
  "dataLayer": GetGtm;
}
interface GoogleTagManager {
  'GTM-57QS65R': GtmDataLayer;
}

declare global {
  interface Window {
    google_tag_manager?: GoogleTagManager;
    dataLayer?: Array<object>;
  }
}
