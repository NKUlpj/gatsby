require('dotenv').config()
const fontFile = require('../packages/flow-ui/flow-ui-theme/src/theme/typography-fonts.json')
module.exports = {
  flags: {
    DEV_SSR: true
  },
  plugins: [
    {
      resolve: '@elegantstack/gatsby-theme-flexiblog-beauty',
      options: {
        // Add theme options here. Check documentation for available options.
        siteUrl: process.env.URL || process.env.VERCEL_URL,
        services: {
          graphComment: true
        },
        fonts: fontFile.fonts
      }
    }
  ],
  // Customize your site metadata:
  siteMetadata: {
    //General Site Metadata
    title: 'FlexiBlog',
    name: 'FlexiBlog',
    description: 'My site description...',
    address: 'Tianjin, China',
    email: 'klstftz@gmail.com',
    phone: '+86 18526442843',

    //Site Social Media Links
    social: [
      {
        name: 'Github',
        url: 'https://github.com/nkulpj'
      },
      {
        name: 'Bilibili',
        url: 'https://space.bilibili.com/412756013'
      },
      {
        name: 'Instagram',
        url: 'https://github.com/nkulpj'
      }
    ],

    //Header Menu Items
    headerMenu: [
      {
        name: 'Home',
        slug: '/'
      },
      {
        name: 'Our Team',
        slug: '/authors'
      },
      {
        name: 'Contact',
        slug: '/contact'
      }
    ],

    //Footer Menu Items (2 Sets)
    footerMenu: [
      {
        title: 'Quick Links',
        items: [
          {
            name: 'Advertise with us',
            slug: '/contact'
          },
          {
            name: 'About Us',
            slug: '/contact'
          },
          {
            name: 'Contact Us',
            slug: '/contact'
          }
        ]
      },
      {
        title: 'Legal Stuff',
        items: [
          {
            name: 'Privacy Notice',
            slug: '/'
          },
          {
            name: 'Cookie Policy',
            slug: '/'
          },
          {
            name: 'Terms Of Use',
            slug: '/'
          }
        ]
      }
    ]
  }
}
