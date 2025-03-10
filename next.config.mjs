import mdx from '@next/mdx';

const nextConfig = {
  experimental: {
    mdxRs: true, // Enable MDX support in the App Router
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'], // Allow MDX pages
};

export default mdx()(nextConfig);
