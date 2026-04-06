// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  // User/Org Pages (https://<user>.github.io):
  //   site: 'https://<user>.github.io',
  //   base: '/'
//Project Pages (https://<user>.github.io/<repo>/):
    site: 'https://<user>.github.io/<repo>/',
    base: '/<repo>/'
  // site: 'https://your-user.github.io',
 //  base: '/',
});
