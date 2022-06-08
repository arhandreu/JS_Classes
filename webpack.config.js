module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/, /coverage/, /__test__/],
        loader: 'babel-loader',
      },
    ],
  },
};
