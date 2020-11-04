const fs = require('fs')

const rawData = fs.readFileSync('food.json');
let food = JSON.parse(rawData);

export default {
    webpack: (config, env, helpers) => {
        const purgecss = require('@fullhuman/postcss-purgecss')({
            // Specify the paths to all of the template files in your project
            content: ['./src/**/*.js'],
        
            // Include any special characters you're using in this regular expression
            // defaultExtractor: content => content.match(params.regex) || [],
        });

        const postCssLoaders = helpers.getLoadersByName(config, 'postcss-loader');
        postCssLoaders.forEach(({ loader }) => {
            const plugins = loader.options.plugins;

            // Add tailwind css at the top.
            plugins.unshift(require('tailwindcss'));

            // Add PurgeCSS only in production.
            if (env.production) {
                plugins.push(purgecss);
            }
        });

        if (
            process.env.NODE_ENV === "production" &&
            process.env.MIRAGE_ENABLED !== "true"
        ) {
        config.module
            .rule("exclude-mirage")
            .test(/node_modules\/miragejs\//)
            .use("null-loader")
            .loader("null-loader")
        }

        // if(!env.production){

        //     // config.devServer.proxy = {
        //     //     '/api/food': {
        //     //         bypass: function(req, res, proxyOptions) {
        //     //             if (req.headers.accept.indexOf('html') !== -1) {
        //     //               console.log('Skipping proxy for browser request.');
        //     //               return '/index.html';
        //     //             }
        //     //           }
        //     //     }
        //     // }
        // }

        return config;
    }
}