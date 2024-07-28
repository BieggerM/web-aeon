
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const susetheme: CustomThemeConfig = {
    name: 'susetheme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `systen-ui`,
		"--theme-font-family-heading": `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "255 255 255",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #009b77 
		"--color-primary-50": "217 240 235", // #d9f0eb
		"--color-primary-100": "204 235 228", // #ccebe4
		"--color-primary-200": "191 230 221", // #bfe6dd
		"--color-primary-300": "153 215 201", // #99d7c9
		"--color-primary-400": "77 185 160", // #4db9a0
		"--color-primary-500": "0 155 119", // #009b77
		"--color-primary-600": "0 140 107", // #008c6b
		"--color-primary-700": "0 116 89", // #007459
		"--color-primary-800": "0 93 71", // #005d47
		"--color-primary-900": "0 76 58", // #004c3a
		// secondary | #00ce9e 
		"--color-secondary-50": "217 248 240", // #d9f8f0
		"--color-secondary-100": "204 245 236", // #ccf5ec
		"--color-secondary-200": "191 243 231", // #bff3e7
		"--color-secondary-300": "153 235 216", // #99ebd8
		"--color-secondary-400": "77 221 187", // #4dddbb
		"--color-secondary-500": "0 206 158", // #00ce9e
		"--color-secondary-600": "0 185 142", // #00b98e
		"--color-secondary-700": "0 155 119", // #009b77
		"--color-secondary-800": "0 124 95", // #007c5f
		"--color-secondary-900": "0 101 77", // #00654d
		// tertiary | #29009b 
		"--color-tertiary-50": "223 217 240", // #dfd9f0
		"--color-tertiary-100": "212 204 235", // #d4cceb
		"--color-tertiary-200": "202 191 230", // #cabfe6
		"--color-tertiary-300": "169 153 215", // #a999d7
		"--color-tertiary-400": "105 77 185", // #694db9
		"--color-tertiary-500": "41 0 155", // #29009b
		"--color-tertiary-600": "37 0 140", // #25008c
		"--color-tertiary-700": "31 0 116", // #1f0074
		"--color-tertiary-800": "25 0 93", // #19005d
		"--color-tertiary-900": "20 0 76", // #14004c
		// success | #7fcdbb 
		"--color-success-50": "236 248 245", // #ecf8f5
		"--color-success-100": "229 245 241", // #e5f5f1
		"--color-success-200": "223 243 238", // #dff3ee
		"--color-success-300": "204 235 228", // #ccebe4
		"--color-success-400": "165 220 207", // #a5dccf
		"--color-success-500": "127 205 187", // #7fcdbb
		"--color-success-600": "114 185 168", // #72b9a8
		"--color-success-700": "95 154 140", // #5f9a8c
		"--color-success-800": "76 123 112", // #4c7b70
		"--color-success-900": "62 100 92", // #3e645c
		// warning | #eab308 
		"--color-warning-50": "252 244 218", // #fcf4da
		"--color-warning-100": "251 240 206", // #fbf0ce
		"--color-warning-200": "250 236 193", // #faecc1
		"--color-warning-300": "247 225 156", // #f7e19c
		"--color-warning-400": "240 202 82", // #f0ca52
		"--color-warning-500": "234 179 8", // #eab308
		"--color-warning-600": "211 161 7", // #d3a107
		"--color-warning-700": "176 134 6", // #b08606
		"--color-warning-800": "140 107 5", // #8c6b05
		"--color-warning-900": "115 88 4", // #735804
		// error | #9b0024 
		"--color-error-50": "240 217 222", // #f0d9de
		"--color-error-100": "235 204 211", // #ebccd3
		"--color-error-200": "230 191 200", // #e6bfc8
		"--color-error-300": "215 153 167", // #d799a7
		"--color-error-400": "185 77 102", // #b94d66
		"--color-error-500": "155 0 36", // #9b0024
		"--color-error-600": "140 0 32", // #8c0020
		"--color-error-700": "116 0 27", // #74001b
		"--color-error-800": "93 0 22", // #5d0016
		"--color-error-900": "76 0 18", // #4c0012
		// surface | #383838 
		"--color-surface-50": "225 225 225", // #e1e1e1
		"--color-surface-100": "215 215 215", // #d7d7d7
		"--color-surface-200": "205 205 205", // #cdcdcd
		"--color-surface-300": "175 175 175", // #afafaf
		"--color-surface-400": "116 116 116", // #747474
		"--color-surface-500": "56 56 56", // #383838
		"--color-surface-600": "50 50 50", // #323232
		"--color-surface-700": "42 42 42", // #2a2a2a
		"--color-surface-800": "34 34 34", // #222222
		"--color-surface-900": "27 27 27", // #1b1b1b
	}
}