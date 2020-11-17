export default {
    webpack: (config, env, helpers) => {
        const purgecss = require('@fullhuman/postcss-purgecss')({
            content: ['./src/**/*.js'],
        })
        const Dotenv = require('dotenv-webpack')
        const postCssLoaders = helpers.getLoadersByName(config, 'postcss-loader')

        //activate purgecss only in production
        postCssLoaders.forEach(({ loader }) => {
            const plugins = loader.options.plugins

            plugins.unshift(require('tailwindcss'))

            if (env.production) {
                plugins.push(purgecss)
            }
        });

        //unload miragejs in production
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

        //load env variables 
        config.plugins.push(new Dotenv({
            path: `.env.${process.env.ENVIRONMENT}`,
            defaults: '.env'
        }))

        return config;
    }
}