import {themes as prismThemes} from 'prism-react-renderer';

module.exports = {
  title: 'TemplateDX',
  tagline: 'A declarative, extensible & composable template engine based on Markdown and JSX.',
  url: 'https://puzzlet-ai.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'puzzlet-ai',
  projectName: 'templatedx',
  scripts: [
    {
      src: 'https://plausible.io/js/plausible.js',
      async: true,
      defer: true,
      'data-domain': 'puzzlet-ai.github.io/',
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/puzzlet-ai/templatedx-docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'TemplateDX',
      logo: {
        alt: 'TemplateDX Logo',
        src: 'https://www.puzzlet.ai/images/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/puzzlet-ai/templatedx',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/getting-started',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/puzzlet-ai/templatedx',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/P2NeMDtXar',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Puzzlet.ai`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['jsx', 'bash'],
    },
  },
};