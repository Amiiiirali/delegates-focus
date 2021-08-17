import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'delegates-focus-test',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
      includeGlobalScripts: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      copy: [{ src: '../public', dest: 'build/public', warn: true }],
      serviceWorker: null, // disable service workers
    },
  ],
};
