## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Before planning or implementing project work, review the repository planning documents:

- `docs/PROJECT_STATE.md` for the current scope, settled direction, and implementation progress; Codex should keep this file current
- `docs/DECISIONS.md` for unanswered choices that require user or client input

When a choice in `docs/DECISIONS.md` is answered, remove it from that file and update `docs/PROJECT_STATE.md`. Never store credentials, API keys, recovery codes, or other secrets in these files.

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
