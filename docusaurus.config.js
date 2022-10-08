// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '欢迎来到生田绘梨花FC群wiki',
  tagline: 'Dinosaurs are cool',
  url: 'https://github.com/ikuchanfans/wiki',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ikuchanfans', // Usually your GitHub org/user name.
  projectName: 'wiki', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/ikuchanfans/wiki/issues',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/ikuchanfans/wiki/issues',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'IKUCHAN FANS 🇨🇳',
        logo: {
          alt: 'Fans wiki Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'new',
            position: 'left',
            label: 'wiki',
          },
          {
            href: 'https://raw.githubusercontent.com/ikuchanfans/ikuchanfans/main/生田绘梨花FC入会图文流程.jpg',
            label: 'FC入会教程',
            position: 'right',
          },
          {
            href: 'https://github.com/ikuchanfans/',
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
                label: '📝 wiki',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: '🐧 群',
                href: 'https://raw.githubusercontent.com/ikuchanfans/ikuchanfans/main/生田绘梨花FC入会图文流程.jpg',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: '🥹 关于wiki须知',
                to: '/blog',
              },
              {
                label: '💌 用爱发电没有赞助商',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 🇨🇳 IKUCHAN FANS, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
