<h1 align="center">📗 Add GitHub Pages to Svelte</h1>

This is an adder for `svelte-add`; you should [read its `README`](https://github.com/svelte-add/svelte-add#readme) before continuing here.

## ➕ Adding Github Pages

This adder's codename is `github-pages`, and can be used like so:

```sh
npx svelte-add@latest github-pages
```

### 🏞 Supported environments

This adder supports **only** SvelteKit Svelte apps.

### ⚙️ Options

- `dirToPublish` (default `build`): defines the folder name that should be published to github pages
- `customDomain`: can be set to publish to a custom domain. Must be a FQDN (Fully qualified domain name), without the protocol.

## 🛠 Using GitHub Pages

After the adder runs,

- Go to your GitHub repository
- Open Settings > Pages
- Choose the branch `gh-pages` as source and click save
- Wait a few seconds and your page should be up and running under the link GitHub provides you.
