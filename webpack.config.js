
const path = require( 'path' );

const HTMLWebpackPlugin = require( 'html-webpack-plugin' );
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );

module.exports = {

  context: path.resolve( __dirname, 'src' ),
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',

  entry: './js/index.js',
  output: {

    path: path.resolve( __dirname, 'dist' ),
    filename: 'bundle.js',

  },

  module: {

    rules: [

      {

        test: /\.html$/,
        use: 'html-loader',

      },

      {

        test: /\.scss$/,
        use: [

          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },

        ],

      }

    ]

  },

  resolve: {

    alias: {

      'vue$': 'vue/dist/vue.esm.js',

    },

  },

  plugins: [

    new HTMLWebpackPlugin( { template: './index.html' } ),
    new CopyWebpackPlugin( [ { from: './sounds', to: './sounds' } ] )

  ],

};
