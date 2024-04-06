oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g slg-cli
$ slg COMMAND
running command...
$ slg (--version)
slg-cli/0.4.28 darwin-arm64 node-v18.19.0
$ slg --help [COMMAND]
USAGE
  $ slg COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`slg hello PERSON`](#slg-hello-person)
* [`slg hello world`](#slg-hello-world)
* [`slg help [COMMAND]`](#slg-help-command)
* [`slg plugins`](#slg-plugins)
* [`slg plugins add PLUGIN`](#slg-plugins-add-plugin)
* [`slg plugins:inspect PLUGIN...`](#slg-pluginsinspect-plugin)
* [`slg plugins install PLUGIN`](#slg-plugins-install-plugin)
* [`slg plugins link PATH`](#slg-plugins-link-path)
* [`slg plugins remove [PLUGIN]`](#slg-plugins-remove-plugin)
* [`slg plugins reset`](#slg-plugins-reset)
* [`slg plugins uninstall [PLUGIN]`](#slg-plugins-uninstall-plugin)
* [`slg plugins unlink [PLUGIN]`](#slg-plugins-unlink-plugin)
* [`slg plugins update`](#slg-plugins-update)

## `slg hello PERSON`

Say hello

```
USAGE
  $ slg hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/sluggishhackers/slg-cli/blob/v0.4.28/src/commands/hello/index.ts)_

## `slg hello world`

Say hello world

```
USAGE
  $ slg hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ slg hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/sluggishhackers/slg-cli/blob/v0.4.28/src/commands/hello/world.ts)_

## `slg help [COMMAND]`

Display help for slg.

```
USAGE
  $ slg help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for slg.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.0.20/src/commands/help.ts)_

## `slg plugins`

List installed plugins.

```
USAGE
  $ slg plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ slg plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.6/src/commands/plugins/index.ts)_

## `slg plugins add PLUGIN`

Installs a plugin into slg.

```
USAGE
  $ slg plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into slg.

  Uses bundled npm executable to install plugins into /Users/hoony/.local/share/slg

  Installation of a user-installed plugin will override a core plugin.

  Use the SLG_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the SLG_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ slg plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ slg plugins add myplugin

  Install a plugin from a github url.

    $ slg plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ slg plugins add someuser/someplugin
```

## `slg plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ slg plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ slg plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.6/src/commands/plugins/inspect.ts)_

## `slg plugins install PLUGIN`

Installs a plugin into slg.

```
USAGE
  $ slg plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into slg.

  Uses bundled npm executable to install plugins into /Users/hoony/.local/share/slg

  Installation of a user-installed plugin will override a core plugin.

  Use the SLG_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the SLG_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ slg plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ slg plugins install myplugin

  Install a plugin from a github url.

    $ slg plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ slg plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.6/src/commands/plugins/install.ts)_

## `slg plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ slg plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ slg plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.6/src/commands/plugins/link.ts)_

## `slg plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ slg plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ slg plugins unlink
  $ slg plugins remove

EXAMPLES
  $ slg plugins remove myplugin
```

## `slg plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ slg plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.6/src/commands/plugins/reset.ts)_

## `slg plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ slg plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ slg plugins unlink
  $ slg plugins remove

EXAMPLES
  $ slg plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.6/src/commands/plugins/uninstall.ts)_

## `slg plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ slg plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ slg plugins unlink
  $ slg plugins remove

EXAMPLES
  $ slg plugins unlink myplugin
```

## `slg plugins update`

Update installed plugins.

```
USAGE
  $ slg plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.6/src/commands/plugins/update.ts)_
<!-- commandsstop -->
