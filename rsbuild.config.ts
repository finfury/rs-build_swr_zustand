import {defineConfig} from '@rsbuild/core'
import {pluginReact} from '@rsbuild/plugin-react'
import {pluginSass, PluginSassOptions} from '@rsbuild/plugin-sass'

const isProd = import.meta.env.MODE === 'production' ?? false
const isDev = import.meta.env.MODE === 'development' ?? false

const mixins = "@import '/src/shared/static/styles/mixins.scss';"
const variables = "@import '/src/shared/static/styles/variables.scss';"
const fonts = "@import '/src/shared/static/fonts/fonts.scss';"

const localIdentName = isProd ? '[path][name]__[local]-[hash:base64:6]' : '[local]-[hash:base64:6]'
const sass: PluginSassOptions = {
	sassLoaderOptions: {
		additionalData: variables + mixins + fonts,
		sourceMap: true,
	},
}

export default defineConfig({
	plugins: [pluginReact(), pluginSass(sass)],
	dev: {
		hmr: true,
	},
	html: {
		title: 'Rs-build',
		template: './src/shared/static/index.html',
		favicon: './src/shared/static/images/favicon.png',
		inject: true,
	},
	tools: {
		rspack(config, {addRules}) {
			addRules([
				{
					test: /\.(woff|woff2|eot|ttf|otf)$/i,
					type: 'asset',
				},
			])
		},
	},
	output: {
		distPath: {
			root: 'dist',
			css: 'static/css',
			font: 'static/fonts',
		},
		cleanDistPath: true,
		cssModules: {
			localIdentName: localIdentName,
		},
	},
})
