/* Copyright Tincre (Musicfox, Inc)
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { generateEventIdClientSide } from './eventId';
import { ALLOWED_PROMO_EVENTS } from './constants';

/*
 * @description Book an event for Tincre's Meta Pixel
 * @param eventName the string event name starting with 'PromoEvent'
 * @param eventData an object with data for Google Tag Manager consumption
 * @returns void
 */
export function metaEvent(eventName: string, eventData: object) {
  if (ALLOWED_PROMO_EVENTS.includes(eventName)) {
    // @ts-ignore
    const eventId = eventData?.transactionId || generateEventIdClientSide();
    if ('fbq' in window) {
      console.debug(`Recording event ${eventId}`);
      // @ts-ignore
      window?.fbq('trackCustom', eventName, {
        eventId: `${eventId}`,
        external_id: `${eventId}`,
        ...eventData,
      });
    }
  }
}
