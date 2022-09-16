# promo-sync-meta, by [Tincre`.dev`](https://tincre.dev/)

Event tracking for Meta through Promo ads. Use in conjunction with the [`promo-button`](https://github.com/Tincre/promo-button), your Meta pixel and ours.

🤯 for your ads on the web, with Meta. 

## Installation

Use your favorite package manager to rock installation of `promo-sync-meta`.

### Yarn
```
yarn add @tincre/promo-sync-meta # -D if you want this as a dev dep
```

### Npm

```
npm install @tincre/promo-sync-meta # --save-dev if you want it as a dev dep
```

### Setup
As high as possible in the `<head>` tag on each page of your site add the following:

```js
import { promoGtag } from '@tincre/promo-sync-gtag';

<script type="module" src="https://unpkg.com/browse/@tincre/promo-sync-meta@0.0.4/dist/promo-sync-meta.esm.js">
  import { loadPromoGtag } from '@tincre/promo-sync-gtag';
  loadPromoGtag();
</script>
```

As usual you can grab our minified build and link to that as a universal script, loaded prior to the code snippet directly above (and without the `import` statement).

#### Next.js setup 
As we at [Tincre](https://tincre.com) are proud [Next.js](https://nextjs.org) users, below is a snippet you can use for performant Next.js sites.

In your `pages/_app.{js,jsx,ts,tsx}` file:
```jsx 
import Script from 'next/script';
import { promoPixel } from '@tincre/promo-sync-meta';

export default function MyApp({component, pageProps,}) {

  return (
    <>
      <Script id="promo-meta-pixel" strategy={"afterInteractive"}>{promoPixel}</Script>
      <Component {...pageProps} />
    </>
  )
}
```

> 🌶️ You'll need to use an event to fire anything here, unlike importing our `promoGtag` from [`promo-sync-gtag` library](https://github.com/Tincre/promo-sync-gtag).

### Usage 

To use a meta event simply import it into your framework of choice and fire the function. 

> 🌶️ Typically this is in a `useEffect` hook within the function body if you're a React user.

```jsx 
import { promoEventPageView } from '@tincre/promo-sync-meta';

export default function PageOrComponent() {
  promoEventPageView()  
  return <></>;
}
```

#### `useEffect` example
```jsx
import { useEffect } from 'react';
import { promoEventPageView } from '@tincre/promo-sync-meta';

export default function PageOrComponent() {
  useEffect(() => {
    promoEventPageView()  
  }, [])
  return <></>;
}
```
## Support 

- Documentation: [tincre.dev/docs](https://tincre.dev/docs)
- Guides and how-tos: [tincre.dev/docs/guides](https://tincre.dev/docs/guides) 
- Reference docs: [tincre.dev/docs/reference](https://tincre.dev/docs/reference)
- Community: [community.tincre.dev](https://community.tincre.dev)

## License 

This code is free to use for your commercial or personal projects. It is open-source 
licensed under the [Mozilla Public License 2.0](https://www.mozilla.org/en-US/MPL/2.0/).

You will see various headers throughout the codebase and can reference the license 
directly via [LICENSE](/LICENSE) herein.

## Development 

### Releases 

We use [`npm`](https://npmjs.com) for releases. In particular, we use
`npm --publish` to get the job done.

Currently, only @thinkjrs has the ability to release. The following section 
is written for memory.

#### Release prep

Prior to using `npm --publish` a release tag needs to be created for
the library using our standard tagging practices. 

> Ensure that tests :white_check_mark: pass during this process prior to
releasing via npm.

##### Test release 

To do a proper release, ensure you're in the base repo directory and run 
`npm publish . --access public --dry-run`.

#### Release `latest` tag

To complete a full release to the `latest` npm `dist-tag`, ensure you're in
the base repo directory and run `npm publish . --access public`. 

:tada: That's it! :tada:
