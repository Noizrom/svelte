
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```sh
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const NODE_ENV: string;
	export const PROCESSOR_REVISION: string;
	export const OPENSSL_DIR: string;
	export const COMMONPROGRAMW6432: string;
	export const OLDPWD: string;
	export const TEMP: string;
	export const OPENAI_API_KEY: string;
	export const ZES_ENABLE_SYSMAN: string;
	export const TRANSIENT_PROMPT_MULTILINE_INDICATOR: string;
	export const PROMPT_INDICATOR: string;
	export const HOMEDRIVE: string;
	export const USERPROFILE: string;
	export const FILE_PWD: string;
	export const PWD: string;
	export const PROCESSOR_ARCHITECTURE: string;
	export const POWERSHELL_TELEMETRY_OPTOUT: string;
	export const TRANSIENT_PROMPT_COMMAND_RIGHT: string;
	export const COMMONPROGRAMFILES: string;
	export const PROGRAMDATA: string;
	export const NU_VERSION: string;
	export const PROCESSOR_LEVEL: string;
	export const OPENSSL_CONF: string;
	export const BUN_INSTALL: string;
	export const CHOCOLATEYTOOLSLOCATION: string;
	export const COMPUTERNAME: string;
	export const OS: string;
	export const STARSHIP_SHELL: string;
	export const TMP: string;
	export const SHLVL: string;
	export const LOCALAPPDATA: string;
	export const WT_PROFILE_ID: string;
	export const NPM_CONFIG_USER_AGENT: string;
	export const USERDOMAIN_ROAMINGPROFILE: string;
	export const WSLENV: string;
	export const HOMEPATH: string;
	export const PATH: string;
	export const NUMBER_OF_PROCESSORS: string;
	export const SESSIONNAME: string;
	export const __ZOXIDE_HOOKED: string;
	export const PROGRAMW6432: string;
	export const __PSLOCKDOWNPOLICY: string;
	export const POSH_INSTALLER: string;
	export const CURRENT_FILE: string;
	export const STARSHIP_SESSION_KEY: string;
	export const PSMODULEPATH: string;
	export const SYSTEMDRIVE: string;
	export const UV_PUBLISH_TOKEN: string;
	export const DRIVERDATA: string;
	export const PATHEXT: string;
	export const COMSPEC: string;
	export const PROMPT_MULTILINE_INDICATOR: string;
	export const LAST_EXIT_CODE: string;
	export const ONEDRIVE: string;
	export const PUBLIC: string;
	export const POSH_THEMES_PATH: string;
	export const RUST_BACKTRACE: string;
	export const POWERSHELL_DISTRIBUTION_CHANNEL: string;
	export const APPDATA: string;
	export const PROCESSOR_IDENTIFIER: string;
	export const SYSTEMROOT: string;
	export const NDK_HOME: string;
	export const WT_SESSION: string;
	export const TAURI_SIGNING_PRIVATE_KEY_PASSWORD: string;
	export const ANDROID_HOME: string;
	export const GOPATH: string;
	export const PYENV: string;
	export const ALLUSERSPROFILE: string;
	export const CHOCOLATEYLASTPATHUPDATE: string;
	export const INIT_CWD: string;
	export const LOGONSERVER: string;
	export const TAURI_SIGNING_PRIVATE_KEY: string;
	export const CHOCOLATEYINSTALL: string;
	export const USERDOMAIN: string;
	export const WINDIR: string;
	export const USERNAME: string;
	export const PROGRAMFILES: string;
	export const CMD_DURATION_MS: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		NODE_ENV: string;
		PROCESSOR_REVISION: string;
		OPENSSL_DIR: string;
		COMMONPROGRAMW6432: string;
		OLDPWD: string;
		TEMP: string;
		OPENAI_API_KEY: string;
		ZES_ENABLE_SYSMAN: string;
		TRANSIENT_PROMPT_MULTILINE_INDICATOR: string;
		PROMPT_INDICATOR: string;
		HOMEDRIVE: string;
		USERPROFILE: string;
		FILE_PWD: string;
		PWD: string;
		PROCESSOR_ARCHITECTURE: string;
		POWERSHELL_TELEMETRY_OPTOUT: string;
		TRANSIENT_PROMPT_COMMAND_RIGHT: string;
		COMMONPROGRAMFILES: string;
		PROGRAMDATA: string;
		NU_VERSION: string;
		PROCESSOR_LEVEL: string;
		OPENSSL_CONF: string;
		BUN_INSTALL: string;
		CHOCOLATEYTOOLSLOCATION: string;
		COMPUTERNAME: string;
		OS: string;
		STARSHIP_SHELL: string;
		TMP: string;
		SHLVL: string;
		LOCALAPPDATA: string;
		WT_PROFILE_ID: string;
		NPM_CONFIG_USER_AGENT: string;
		USERDOMAIN_ROAMINGPROFILE: string;
		WSLENV: string;
		HOMEPATH: string;
		PATH: string;
		NUMBER_OF_PROCESSORS: string;
		SESSIONNAME: string;
		__ZOXIDE_HOOKED: string;
		PROGRAMW6432: string;
		__PSLOCKDOWNPOLICY: string;
		POSH_INSTALLER: string;
		CURRENT_FILE: string;
		STARSHIP_SESSION_KEY: string;
		PSMODULEPATH: string;
		SYSTEMDRIVE: string;
		UV_PUBLISH_TOKEN: string;
		DRIVERDATA: string;
		PATHEXT: string;
		COMSPEC: string;
		PROMPT_MULTILINE_INDICATOR: string;
		LAST_EXIT_CODE: string;
		ONEDRIVE: string;
		PUBLIC: string;
		POSH_THEMES_PATH: string;
		RUST_BACKTRACE: string;
		POWERSHELL_DISTRIBUTION_CHANNEL: string;
		APPDATA: string;
		PROCESSOR_IDENTIFIER: string;
		SYSTEMROOT: string;
		NDK_HOME: string;
		WT_SESSION: string;
		TAURI_SIGNING_PRIVATE_KEY_PASSWORD: string;
		ANDROID_HOME: string;
		GOPATH: string;
		PYENV: string;
		ALLUSERSPROFILE: string;
		CHOCOLATEYLASTPATHUPDATE: string;
		INIT_CWD: string;
		LOGONSERVER: string;
		TAURI_SIGNING_PRIVATE_KEY: string;
		CHOCOLATEYINSTALL: string;
		USERDOMAIN: string;
		WINDIR: string;
		USERNAME: string;
		PROGRAMFILES: string;
		CMD_DURATION_MS: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
