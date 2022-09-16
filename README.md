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
