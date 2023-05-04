// svelte.config.js
import adapter from 'svelte-adapter-github';

export default {
  kit: {
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: 'Jorgen10.github.io',
      assets: 'Jorgen10.github.io',
      fallback: null,
      precompress: false,
      domain: 'private.jorgen-10.no',
      jekyll: false
    })
  }
};