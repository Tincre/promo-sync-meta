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
export const ALLOWED_PROMO_EVENTS = [
  'PromoEventPageView',
  'PromoEventAddPaymentInfo',
  'PromoEventAddToCart',
  'PromoEventCompleteRegistration',
  'PromoEventDonate',
  'PromoEventInitiateCheckout',
  'PromoEventLead',
  'PromoEventPurchase',
  'PromoEventSearch',
  'PromoEventStartTrial',
  'PromoEventSubmitApplication',
  'PromoEventSubscribe',
  'PromoEventViewContent',
];

export function gtmPageView(remainingData: object) {
  gtmEvent('PromoEventPageView', remainingData);
}

export function promoEventPromoButtonClick(remainingData: object) {
  gtmEvent('PromoEventPromoButtonClick', remainingData);
}

export function promoEventButtonClick(remainingData: object) {
  gtmEvent('PromoEventLoginButtonClick', remainingData);
}

export function promoEventSignupButtonClick(remainingData: object) {
  gtmEvent('PromoEventSignupButtonClick', remainingData);
}

export function promoEventAddPaymentInfo(remainingData: object) {
  gtmEvent('PromoEventAddPaymentInfo', remainingData);
}

export function promoEventDonate(remainingData: object) {
  gtmEvent('PromoEventDonate', remainingData);
}

export function promoEventAddToCart(remainingData: object) {
  gtmEvent('PromoEventAddToCart', remainingData);
}

export function promoEventCompleteRegistration(remainingData: object) {
  gtmEvent('PromoEventCompleteRegistration', remainingData);
}

export function promoEventInitiateCheckout(remainingData: object) {
  gtmEvent('PromoEventInitiateCheckout', remainingData);
}

export function promoEventLead(remainingData: object) {
  gtmEvent('PromoEventLead', remainingData);
}

export function promoEventPurchase(remainingData: object) {
  gtmEvent('PromoEventPurchase', remainingData);
}

export function promoEventSearch(remainingData: object) {
  gtmEvent('PromoEventSearch', remainingData);
}

export function promoEventStartTrial(remainingData: object) {
  gtmEvent('PromoEventStartTrial', remainingData);
}

export function promoEventSubmitApplication(remainingData: object) {
  gtmEvent('PromoEventSubmitApplication', remainingData);
}

export function promoEventSubscribe(remainingData: object) {
  gtmEvent('PromoEventSubscribe', remainingData);
}

export function promoEventViewContent(remainingData: object) {
  gtmEvent('PromoEventViewContent', remainingData);
}

/*
 * @description Book an event for Tincre's Google Tag Manager
 * @param eventName the string event name starting with 'PromoEvent'
 * @param eventData an object with data for Google Tag Manager consumption
 * @returns void
 */
function gtmEvent(eventName: string, eventData: object) {
  const eventId = generateEventIdClientSide();
  window.dataLayer?.push({
    event: eventName,
    'x-fb-event_id': eventId,
    transactionId: eventId,
    ...eventData,
  });
}
