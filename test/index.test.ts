import { generateEventIdClientSide, sum } from '../src/index';
beforeAll(() => {
  /* @ts-ignore */
  global.window = jest.fn();

  window['google_tag_manager'] = {
    'GTM-57QS65R': {
      dataLayer: {
        get: (gtm: string) => {
          return {
            start: 'testStart',
            uniqueEventId: 'testUniqueEventId',
          };
        },
      },
    },
  };
});

describe('generateEventIdClientSide', () => {
  it('returns a string', () => {
    expect(generateEventIdClientSide()).toBe('testStart.testUniqueEventId');
  });
});
describe('generateEventIdClientSide', () => {
  it('returns undefined when google_tag_manager is not present on window', () => {
    /* @ts-ignore */
    global.window = undefined;

    expect(generateEventIdClientSide()).toBe(undefined);
  });
});
describe('sum', () => {
  it('adds two numbers together', () => {
    expect(sum(1, 1)).toEqual(2);
  });
});
