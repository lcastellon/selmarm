<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

Scientific names (Latin binomials) must always render in italics: pass page copy through the shared renderer in `src/components/scientific-text.tsx` and register new taxa in its name list, so a name never appears as plain text in a new string.

Use the router-derived sitemap helper and explicit staticData.sitemap decisions on every route so public pages stay discoverable and non-content endpoints stay excluded without maintaining a duplicate URL list.
