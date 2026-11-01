# CoastalCraft website and Season 9 archive

Main website: https://coastalcraft.github.io/
Season 9 Overworld: https://coastalcraft.github.io/season-9/
Season 9 Nether: https://coastalcraft.github.io/nether/
Season 9 End: https://coastalcraft.github.io/end/
Season 10: https://coastalcraft.github.io/season-10/

## Editing

The homepage is index.html, styled by home.css. Its images and favicon are in assets/.
GitHub Pages publishes master from the repository root; .nojekyll bypasses Jekyll.

The Season 9 Overworld viewer is season-9/index.html. Its base URL points to the
root to reuse the original tiles, libraries, and map data without relocating them.
Existing Nether, End, and marker URLs are retained. Old root marker hashes redirect
to the Season 9 viewer. Do not export a map directly over the homepage.

Season 10 is maintained in the separate CoastalCraft/season-10 repository.
The old Google Site was not changed; its private content has not been imported.
