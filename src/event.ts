import { generateEventIdClientSide } from './eventId';
import { ALLOWED_PROMO_EVENTS } from './constants.ts';

/*
 * @description Book an event for Tincre's Google Tag Manager
 * @param eventName the string event name starting with 'PromoEvent'
 * @param eventData an object with data for Google Tag Manager consumption
 * @returns void
 */
export function gtmEvent(eventName: string, eventData: object) {
  const eventId = generateEventIdClientSide();
  window.dataLayer?.push({
    event: eventName,
    'x-fb-event_id': eventId,
    transactionId: eventId,
    ...eventData,
  });
}
