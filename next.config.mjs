import nextMDX from '@next/mdx'

import { recmaPlugins } from './src/mdx/recma.mjs'
import { rehypePlugins } from './src/mdx/rehype.mjs'
import { remarkPlugins } from './src/mdx/remark.mjs'
import withSearch from './src/mdx/search.mjs'

const withMDX = nextMDX({
  options: {
    remarkPlugins,
    rehypePlugins,
    recmaPlugins,
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove or comment out the 'export' option for Redoc to work properly
  // output: 'export',
  // basePath: '/gologin-api-docs',
  distDir: 'dist',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  // Add webpack configuration to support JSON imports for OpenAPI specs
  webpack: (config) => {
    // Disable webpack cache
    config.cache = false;

    config.module.rules.push({
      test: /\.json$/,
      type: 'json',
    });
    return config;
  },
}

export default withSearch(withMDX(nextConfig))
