/**
 * @jest-environment jsdom
 */
import crypto from 'crypto';
import {
  promoPixel,
  generateEventId,
  metaPageView,
  promoEventButtonClick,
  promoEventPromoButtonClick,
  promoEventSignupButtonClick,
  promoEventPageView,
  promoEventAddPaymentInfo,
  promoEventAddToCart,
  promoEventCompleteRegistration,
  promoEventDonate,
  promoEventInitiateCheckout,
  promoEventLead,
  promoEventPurchase,
  promoEventSearch,
  promoEventStartTrial,
  promoEventSubmitApplication,
  promoEventSubscribe,
  promoEventViewContent,
} from '../src/index';

beforeAll(() => {
  /* @ts-ignore */
  global.window = jest.fn();
  window['dataLayer'] = [];
  const testUuid: string = 'randomUUIDvalue';
  window['crypto'] = {
    randomUUID: () => testUuid,
    getRandomValues: (arr: any) => crypto.getRandomValues(arr.length),
    subtle: crypto.subtle,
  };
  // @ts-ignore
  window['fbq'] = (a: any, b: any, c: any) => {};
});

describe('promoPixel', () => {
  it('should be a string', () => {
    expect(typeof promoPixel).toBe('string');
  });
});

describe('generateEventId', () => {
  it('generates an id', () => {
    expect(typeof generateEventId()).toBe('string');
  });
});

describe('metaEventPageView', () => {
  it('executes with a data prop object', () => {
    expect(metaPageView({})).toBe(undefined);
  });
});

describe('PromoEventPageView', () => {
  it('executes', () => {
    expect(promoEventPageView({})).toBe(undefined);
  });
});
describe('PromoEventAddPaymentInfo', () => {
  it('executes', () => {
    expect(promoEventAddPaymentInfo({})).toBe(undefined);
  });
});
describe('PromoEventAddToCart', () => {
  it('executes', () => {
    expect(promoEventAddToCart({})).toBe(undefined);
  });
});
describe('PromoEventCompleteRegistration', () => {
  it('executes', () => {
    expect(promoEventCompleteRegistration({})).toBe(undefined);
  });
});
describe('PromoEventDonate', () => {
  it('executes', () => {
    expect(promoEventDonate({})).toBe(undefined);
  });
});
describe('PromoEventInitiateCheckout', () => {
  it('executes', () => {
    expect(promoEventInitiateCheckout({})).toBe(undefined);
  });
});
describe('PromoEventLead', () => {
  it('executes', () => {
    expect(promoEventLead({})).toBe(undefined);
  });
});
describe('PromoEventPurchase', () => {
  it('executes', () => {
    expect(promoEventPurchase({})).toBe(undefined);
  });
});
describe('PromoEventSearch', () => {
  it('executes', () => {
    expect(promoEventSearch({})).toBe(undefined);
  });
});
describe('PromoEventStartTrial', () => {
  it('executes', () => {
    expect(promoEventStartTrial({})).toBe(undefined);
  });
});
describe('PromoEventSubmitApplication', () => {
  it('executes', () => {
    expect(promoEventSubmitApplication({})).toBe(undefined);
  });
});
describe('PromoEventSubscribe', () => {
  it('executes', () => {
    expect(promoEventSubscribe({})).toBe(undefined);
  });
});
describe('PromoEventViewContent', () => {
  it('executes', () => {
    expect(promoEventViewContent({})).toBe(undefined);
  });
});
describe('PromoEventButtonClick', () => {
  it('executes', () => {
    expect(promoEventButtonClick({})).toBe(undefined);
  });
});

describe('PromoEventPromoButtonClick', () => {
  it('executes', () => {
    expect(promoEventPromoButtonClick({})).toBe(undefined);
  });
});

describe('PromoEventSignupButtonClick', () => {
  it('executes', () => {
    expect(promoEventSignupButtonClick({})).toBe(undefined);
  });
});
