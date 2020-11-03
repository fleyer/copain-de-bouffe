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

        if(!env.production){

            config.devServer.proxy = {
                '/api/food': {
                    target: 'localhost:8080/api/food',
                    bypass: (request,response) => {
                        response.json(food)
                    }
                }
            }
        }

        return config;
    }
}