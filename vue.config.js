module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/quote-request/' : '/',
  pages: {
    index: {
      // entry for the page
      entry: 'src/index/index.ts',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'index.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
    about: {
      // entry for the page
      entry: 'src/about/about.ts',
      // the source template
      template: 'public/about.html',
      // output as dist/index.html
      filename: 'about.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'About Page',
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ['chunk-vendors', 'chunk-common', 'about'],
    },
  },
}
