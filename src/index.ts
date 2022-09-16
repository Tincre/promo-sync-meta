/* Copyright Tincre (Musicfox, Inc)
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { metaEvent } from './event';

export const PROMO_GTM_TAG = 'GTM-57QS65R';
export const PROMO_META_ID = '1512583189155903';

export const promoPixel = `!function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '${PROMO_META_ID}');`;

export function generateEventId(gtmTagId?: string | undefined) {
  let gtmContainerId = gtmTagId || PROMO_GTM_TAG;
  if (typeof window !== 'undefined') {
    if (typeof window?.google_tag_manager !== 'undefined') {
      /* @ts-ignore */
      var gtmData =
        /* @ts-ignore */
        window.google_tag_manager[gtmContainerId].dataLayer.get('gtm');
      return gtmData.start + '.' + gtmData.uniqueEventId;
    } else {
      return window.crypto.randomUUID().replaceAll('-', '');
    }
  }
}
export function promoEventPageView(remainingData: object) {
  metaEvent('PromoEventPageView', remainingData);
}
export function metaPageView(remainingData: object) {
  metaEvent('PageView', remainingData);
}

export function promoEventPromoButtonClick(remainingData: object) {
  metaEvent('PromoEventPromoButtonClick', remainingData);
}

export function promoEventButtonClick(remainingData: object) {
  metaEvent('PromoEventLoginButtonClick', remainingData);
}

export function promoEventSignupButtonClick(remainingData: object) {
  metaEvent('PromoEventSignupButtonClick', remainingData);
}

export function promoEventAddPaymentInfo(remainingData: object) {
  metaEvent('PromoEventAddPaymentInfo', remainingData);
}

export function promoEventDonate(remainingData: object) {
  metaEvent('PromoEventDonate', remainingData);
}

export function promoEventAddToCart(remainingData: object) {
  metaEvent('PromoEventAddToCart', remainingData);
}

export function promoEventCompleteRegistration(remainingData: object) {
  metaEvent('PromoEventCompleteRegistration', remainingData);
}

export function promoEventInitiateCheckout(remainingData: object) {
  metaEvent('PromoEventInitiateCheckout', remainingData);
}

export function promoEventLead(remainingData: object) {
  metaEvent('PromoEventLead', remainingData);
}

export function promoEventPurchase(remainingData: object) {
  metaEvent('PromoEventPurchase', remainingData);
}

export function promoEventSearch(remainingData: object) {
  metaEvent('PromoEventSearch', remainingData);
}

export function promoEventStartTrial(remainingData: object) {
  metaEvent('PromoEventStartTrial', remainingData);
}

export function promoEventSubmitApplication(remainingData: object) {
  metaEvent('PromoEventSubmitApplication', remainingData);
}

export function promoEventSubscribe(remainingData: object) {
  metaEvent('PromoEventSubscribe', remainingData);
}

export function promoEventViewContent(remainingData: object) {
  metaEvent('PromoEventViewContent', remainingData);
}
