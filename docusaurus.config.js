// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GitOps Security Champion',
  titleDelimiter: '·',
  tagline: 'GitOps Security Champion',
  favicon: 'https://e5s6t7j5.rocketcdn.me/wp-content/uploads/2020/12/fav2.svg',

  // Set the production url of your site here
  url: 'https://gitopsecurity.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cycodelabs', // Usually your GitHub org/user name.
  projectName: 'GitOpsSecurityChampion', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: '/',
          editUrl: "https://github.com/CycodeLabs/GitOpsSecurityChampion/blob/main/",
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
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
        title: 'GitOps Security Champion',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'resources',
            position: 'left',
            label: 'Resources',
          },
          {
            href: 'https://github.com/CycodeLabs/GitOpsSecurityChampion',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'AppSec',
            items: [
              {
                label: 'Docs',
                to: '/',
              },
            ],
          },
          {
            title: 'Cycode',
            items: [
              {
                label: 'ASPM - Application Security Posture Management',
                href: 'https://cycode.com/aspm-application-security-posture-management/',
              },
              {
                label: 'Hardcoded Secrets Detection',
                href: 'https://cycode.com/hard-coded-secrets-detection/',
              },
              {
                label: 'Source Code Leakage Detection',
                href: 'https://cycode.com/source-code-leakage-detection/',
              },
              {
                label: 'SCA - Software Composition Analysis',
                href: 'https://cycode.com/sca-software-composition-analysis/',
              },
              {
                label: 'Source Control & CI/CD Security',
                href: 'https://cycode.com/source-control-ci-cd-security/',
              },
              {
                label: 'SAST- Application Security Testing',
                href: 'https://cycode.com/sast-static-application-security-testing/',
              },
              {
                label: 'Code Tampering Prevention',
                href: 'https://cycode.com/code-tampering-prevention/',
              },
              {
                label: 'Infrastrucure as Code Security',
                href: 'https://cycode.com/infrastructure-as-code-security/',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Blogs',
                href: 'https://cycode.com/blog/',
              },
              {
                label: 'Resources',
                href: 'https://cycode.com/resources/',
              },
              {
                label: 'AppSec Best Practices',
                href: 'https://cycode.com/cybersecurity-frameworks/',
              },
            ],
          },
        ],
        logo: {
          alt: 'AppSec Security Powered by Cycode',
          src: 'https://e5s6t7j5.rocketcdn.me/wp-content/uploads/2020/12/fav2.svg',
          href: 'https://cycode.com',
        },
        copyright: `Copyright © ${new Date().getFullYear()} Cycode Ltd. All Rights Reserved. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: [
          'java',
          'ruby',
          'php',
          'csharp',
          'rust',
          'scala',
          'kotlin',
          'bash',
          'json',
        ],
      },
    }),

    plugins: [
      [
        '@docusaurus/plugin-google-gtag',
        {
          trackingID: 'G-LC0HLNTX9K',
          anonymizeIP: true,
        },
      ],
    ]
};

module.exports = config;
