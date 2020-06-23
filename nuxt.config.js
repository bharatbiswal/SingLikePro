
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
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
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
