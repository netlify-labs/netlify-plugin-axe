# netlify-plugin-a11y

Run your critical pages through [pa11y](https://github.com/pa11y/pa11y) and fail build if accessibility failures are found.

## Demo

The demo site is a Gatsby blog that has been modified to have some inaccessible elements: https://netlify-plugin-a11y.netlify.com/

- the [Hello World](https://netlify-plugin-a11y.netlify.com/hello-world/) page has an image with no `alt` text
- the [Second Post](https://netlify-plugin-a11y.netlify.com/my-second-post/) page has a form with no submit button, and an input with no label.

You can see the impact of the plugin in the deploy logs of this demo site: https://app.netlify.com/sites/netlify-plugin-a11y/deploys. By default, the plugin is set to error on failure:


![image](https://user-images.githubusercontent.com/6764957/77147207-226b8600-6a63-11ea-91b2-2de449ef6682.png)


But if that is too drastic, you can switch to `resultMode = "warn"` so that builds don't fail:

![image](https://user-images.githubusercontent.com/6764957/77147811-8b073280-6a64-11ea-834d-6b872e543e23.png)


## Usage

To install the plugin in the Netlify UI, use this [direct in-app installation link](https://app.netlify.com/plugins/netlify-plugin-a11y/install) or go to the [Plugins directory](https://app.netlify.com/plugins).

For file-based installation, add the following lines to your `netlify.toml` file:

```toml
[[plugins]]
package = "netlify-plugin-a11y"

  # all inputs are optional, we just show you the defaults below
  [plugins.inputs]
  
  # required config
  checkPaths = ['/'] # you can give an array of directories or paths to html files, that you want to run a11y checks on

  ## Another checkPaths Example 
  checkPaths = [
    '/blog',
    '/about.html',
    '/super/specific/route/index.html',
  ]
  
  # # optional config
  # ignoreDirectories = ['/admin']  # explicitly ignore these directories

  # resultMode = "warn" # is "error" by default

  # timeout = 60000 # in milliseconds; is 30000 by default

  # # Developer only
  # debugMode = true # extra logging for plugin developers
```

To complete file-based installation, from your project's base directory, use npm, yarn, or any other Node.js package manager to add the plugin to `devDependencies` in `package.json`.

```bash
npm install -D netlify-plugin-a11y
```

### Execution in Netlify

Once installed and configured, the plugin will automatically run in the Netlify CI during its specified Netlify Build lifecycle event.

### Executing locally

To test the execution of the Netlify Build lifecycle locally, first ensure that netlify-build is installed:

```bash
# Ensure that you have the netlify build command available
# (in future this will be provided via the CLI)
npm install @netlify/build -g

# In the project working directory, run the build as netlify would with the build bot
netlify-build
```

## Future plans

- configure specific a11y rules to run
