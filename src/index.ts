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

export const gtmPageView = (remainingData) => {
  gtmEvent("PromoEventPageView", remainingData);
};

export const pageView = (remainingData) => {
  gtmEvent("PageView", remainingData);
};

export const promoEventPromoButtonClick = (remainingData) => {
  gtmEvent("PromoEventPromoButtonClick", remainingData);
};

export const promoEventButtonClick = (remainingData) => {
  gtmEvent("PromoEventLoginButtonClick", remainingData);
};

export const promoEventSignupButtonClick = (remainingData) => {
  gtmEvent("PromoEventSignupButtonClick", remainingData);
};

export const promoEventAddPaymentInfo = (remainingData) => {
  gtmEvent("PromoEventAddPaymentInfo", remainingData);
};

export const promoEventDonate = (remainingData) => {
  gtmEvent("PromoEventDonate", remainingData);
};

export const promoEventAddToCart = (remainingData) => {
  gtmEvent("PromoEventAddToCart", remainingData);
};

export const promoEventCompleteRegistration = (remainingData) => {
  gtmEvent("PromoEventCompleteRegistration", remainingData);
};

export const promoEventInitiateCheckout = (remainingData) => {
  gtmEvent("PromoEventInitiateCheckout", remainingData);
};

export const promoEventLead = (remainingData) => {
  gtmEvent("PromoEventLead", remainingData);
};

export const promoEventPurchase = (remainingData) => {
  gtmEvent("PromoEventPurchase", remainingData);
};

export const promoEventSearch = (remainingData) => {
  gtmEvent("PromoEventSearch", remainingData);
};

export const promoEventStartTrial = (remainingData) => {
  gtmEvent("PromoEventStartTrial", remainingData);
};

export const promoEventSubmitApplication = (remainingData) => {
  gtmEvent("PromoEventSubmitApplication", remainingData);
};

export const promoEventSubscribe = (remainingData) => {
  gtmEvent("PromoEventSubscribe", remainingData);
};

export const promoEventViewContent = (remainingData) => {
  gtmEvent("PromoEventViewContent", remainingData);
};

const gtmEvent = (eventName, eventData) => {
  const eventId = generateEventId();
  window.dataLayer?.push({
    event: eventName,
    "x-fb-event_id": eventId,
    transactionId: eventId,
    ...eventData,
  });
};

export function 
