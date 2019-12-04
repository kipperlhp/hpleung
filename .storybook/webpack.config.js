module.exports = ({ config }) => {
  // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
  config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]

  // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
  config.module.rules[0].use[0].loader = require.resolve("babel-loader")

  // use @babel/preset-react for JSX and env (instead of staged presets)
  config.module.rules[0].use[0].options.presets = [
    require.resolve("@babel/preset-react"),
    require.resolve("@babel/preset-env"),
  ]

  config.module.rules[0].use[0].options.plugins = [
    // use @babel/plugin-proposal-class-properties for class arrow functions
    require.resolve("@babel/plugin-proposal-class-properties"),
    // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
    require.resolve("babel-plugin-remove-graphql-queries"),
  ]

  // TO-DO: load svg in storybook

  // config.module.rules = config.module.rules.map(rule => {
  //   if (rule.test.toString().includes('svg')) {
  //     const test = rule.test.toString().replace('svg|', '').replace(/\//g, '')
  //     return {
  //       ...rule,
  //       test: new RegExp(test),
  //     }
  //   }
  //   return rule
  // // })

  // const svgRules = {
  //   test: /\.svg$/,
  //   use: [
  //     {
  //       loader: require.resolve("babel-loader"),
  //       options: {
  //         presets: [
  //           require.resolve("@babel/preset-react"),
  //           require.resolve("@babel/preset-env"),
  //         ],
  //         plugins: [
  //           require.resolve("@babel/plugin-proposal-class-properties"),
  //         ],
  //       }
  //     },
  //     {
  //       loader: require.resolve("react-svg-loader"),
  //       options: {
  //         jsx: true, // true outputs JSX tags
  //       }
  //     },
  //   ],
  // }
  // config.module.rules.push(svgRules)

  // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
  config.resolve.mainFields = ["browser", "module", "main"]

  return config
}