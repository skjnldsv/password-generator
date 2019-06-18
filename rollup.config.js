import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript';
import multiEntry from "rollup-plugin-multi-entry";
import pkg from './package.json';

export default [
	{
		input: 'lib/index.ts',
		plugins: [
			resolve(),   // so Rollup can find `ms`
			commonjs(),  // so Rollup can convert `ms` to an ES module
			typescript() // so Rollup can convert TypeScript to JavaScript
		],
		output: [
			{ name: pkg.name, file: pkg.main, format: 'cjs' },
			{ name: pkg.name, file: pkg.module, format: 'es' },
			{ name: pkg.name, file: pkg.browser, format: 'umd' }
		]
	},
	{
		input: 'lib/models/*.js',
		plugins: [
			multiEntry()
		],
		output: [
			{ name: `${pkg.name}-set`, file: `dist/${pkg.name}-set.cjs.js`, format: 'cjs' },
			{ name: `${pkg.name}-set`, file: `dist/${pkg.name}-set.esm.js`, format: 'es' },
			{ name: `${pkg.name}-set`, file: `dist/${pkg.name}-set.umd.js`, format: 'umd' }
		]
	}
];