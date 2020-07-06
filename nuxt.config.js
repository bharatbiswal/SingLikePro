
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name:"theme-color", content:"#ffffff" },
      { name:"msapplication-TileColor", content:"#ffffff"},
      { name:"msapplication-TileImage", content:"/ms-icon-144x144.png"}
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' },
      {rel:"stylesheet", type:"text/css", href:"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap"},
      {rel:"stylesheet", type:"text/css", href:"https://fonts.googleapis.com/css2?family=Satisfy&display=swap"},
      {rel:"stylesheet", type:"text/css", href:"https://fonts.googleapis.com/css2?family=Monoton&display=swap"},
      {rel:"stylesheet", type:"text/css", href:"https://fonts.googleapis.com/css2?family=Herr+Von+Muellerhoff&display=swap"},
      {rel:"stylesheet", type: "text/css", href:"https://fonts.googleapis.com/icon?family=Material+Icons"},
      {rel:"stylesheet", href:" https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"},
      { rel:"apple-touch-icon", sizes:"57x57", href:"/apple-icon-57x57.png"},
      { rel:"apple-touch-icon", sizes:"60x60", href:"/apple-icon-60x60.png"},
      { rel:"apple-touch-icon", sizes:"72x72", href:"/apple-icon-72x72.png"},
      { rel:"apple-touch-icon", sizes:"76x76", href:"/apple-icon-76x76.png"},
      { rel:"apple-touch-icon", sizes:"114x114", href:"/apple-icon-114x114.png"},
      { rel:"apple-touch-icon", sizes:"120x120", href:"/apple-icon-120x120.png"},
      { rel:"apple-touch-icon", sizes:"144x144", href:"/apple-icon-144x144.png"},
      { rel:"apple-touch-icon", sizes:"152x152", href:"/apple-icon-152x152.png"},
      { rel:"apple-touch-icon", sizes:"180x180", href:"/apple-icon-180x180.png"},
      { rel:"icon", type:"image/png", sizes:"192x192",  href:"/android-icon-192x192.png"},
      { rel:"icon", type:"image/png", sizes:"32x32", href:"/favicon-32x32.png"},
      { rel:"icon", type:"image/png", sizes:"96x96", href:"/favicon-96x96.png"},
      { rel:"icon", type:"image/png", sizes:"16x16", href:"/favicon-16x16.png"},
      { rel:"manifest", href:"/manifest.json"},
    ],
    script: [
      { src : "https://code.jquery.com/jquery-3.1.1.min.js" },
      { src : "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js" },
      { src : "https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js" },
      { src : "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" },
    ]
    
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    `~/assets/css/animate.css`,
    // `~assets/css/style.css`
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/flip-countdown.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['vue-sweetalert2/nuxt', {}],
    ['nuxt-lazy-load',{}],
    ['@nuxtjs/pwa',{}],
    ['@nuxtjs/sitemap',{
      hostname: 'https://giftem.net',
      path: '/sitemap.xml',
      cacheTime: 1000 * 60 * 60 * 24, // one day
      trailingSlash: true,
      gzip: true,
      exclude: [
        '/verifyEmail',
        '/forgotPassword',
        '/privacy',
        '/signIn',
        '/signUp',
        '/terms',
        '/admin/**'
      ]
    }],
    ['vue-browser-detect-plugin/nuxt']
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extractCSS: true,
    extend (config, ctx) {
    }
  }
}
