const globals = require("globals");
const pluginJs = require("@eslint/js");
const pluginReact = require("eslint-plugin-react");

module.exports = [
	{ files: ["**/*.{js,mjs,cjs,jsx}"] },
	pluginJs.configs.recommended,
	pluginReact.configs.flat.recommended,
	{
		settings: {
			react: {
				version: "detect",
			},
		},
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: "module",
			globals: {
				...globals.browser,
				...globals.node,
			},
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		rules: {
			"react/react-in-jsx-scope": "off",
			"react/jsx-uses-react": "off",
		},
	},
];
