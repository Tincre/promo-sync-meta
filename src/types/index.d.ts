export {};

interface GtmDataProps {
  "start": string;
  "uniqueEventId": string;
}
interface GetGtm {
  get: (gtm: string) => GtmDataProps;
}
interface DataLayer {
  "dataLayer": GetGtm;
}
interface GoogleTagManager {
  'GTM-57QS65R': DataLayer;
}
declare global {
  interface Window {
    google_tag_manager?: GoogleTagManager;
    dataLayer?: object;
  }
}
