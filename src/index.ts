export function generateEventIdClientSide() {
  if (typeof window !== "undefined") {
    const gtmContainerId = "GTM-57QS65R";
    if (typeof window?.google_tag_manager !== "undefined") {
      var gtmData =
        window.google_tag_manager[gtmContainerId].dataLayer.get("gtm");
      return gtmData.start + "." + gtmData.uniqueEventId;
    } else {
      return window.crypto.randomUUID().replaceAll("-", "");
    }
  }
}
export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('dev only output');
  }
  return a + b;
};
export const ALLOWED_PROMO_EVENTS = [
  "PageView",
  "PromoEventAddPaymentInfo",
  "PromoEventAddToCart",
  "PromoEventCompleteRegistration",
  "PromoEventDonate",
  "PromoEventInitiateCheckout",
  "PromoEventLead",
  "PromoEventPurchase",
  "PromoEventSearch",
  "PromoEventStartTrial",
  "PromoEventSubmitApplication",
  "PromoEventSubscribe",
  "PromoEventViewContent",
];

export const gtmPageView = (remainingData: object) => {
  gtmEvent("PromoEventPageView", remainingData);
};

export const pageView = (remainingData: object) => {
  gtmEvent("PageView", remainingData);
};

export const promoEventPromoButtonClick = (remainingData: object) => {
  gtmEvent("PromoEventPromoButtonClick", remainingData);
};

export const promoEventButtonClick = (remainingData: object) => {
  gtmEvent("PromoEventLoginButtonClick", remainingData);
};

export const promoEventSignupButtonClick = (remainingData: object) => {
  gtmEvent("PromoEventSignupButtonClick", remainingData);
};

export const promoEventAddPaymentInfo = (remainingData: object) => {
  gtmEvent("PromoEventAddPaymentInfo", remainingData);
};

export const promoEventDonate = (remainingData: object) => {
  gtmEvent("PromoEventDonate", remainingData);
};

export const promoEventAddToCart = (remainingData: object) => {
  gtmEvent("PromoEventAddToCart", remainingData);
};

export const promoEventCompleteRegistration = (remainingData: object) => {
  gtmEvent("PromoEventCompleteRegistration", remainingData);
};

export const promoEventInitiateCheckout = (remainingData: object) => {
  gtmEvent("PromoEventInitiateCheckout", remainingData);
};

export const promoEventLead = (remainingData: object) => {
  gtmEvent("PromoEventLead", remainingData);
};

export const promoEventPurchase = (remainingData: object) => {
  gtmEvent("PromoEventPurchase", remainingData);
};

export const promoEventSearch = (remainingData: object) => {
  gtmEvent("PromoEventSearch", remainingData);
};

export const promoEventStartTrial = (remainingData: object) => {
  gtmEvent("PromoEventStartTrial", remainingData);
};

export const promoEventSubmitApplication = (remainingData: object) => {
  gtmEvent("PromoEventSubmitApplication", remainingData);
};

export const promoEventSubscribe = (remainingData: object) => {
  gtmEvent("PromoEventSubscribe", remainingData);
};

export const promoEventViewContent = (remainingData: object) => {
  gtmEvent("PromoEventViewContent", remainingData);
};

const gtmEvent = (eventName: string, eventData: object) => {
  const eventId = generateEventIdClientSide();
  window.dataLayer?.push({
    event: eventName,
    "x-fb-event_id": eventId,
    transactionId: eventId,
    ...eventData,
  });
};
