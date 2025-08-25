# TSM Plastics Site - Products Grid Patch

This patch adds a responsive **Products** grid and a lightbox modal to your single-page site, wired to your 20 product images.

## Files in this patch
- `index.html` — your page with the Products section, styles, and JS included inline.

## How to use
1. Place your 20 PNG files in the same directory as `index.html`.
2. Open `index.html` in a browser to verify the grid shows and lightbox opens.
3. Commit to Git:

```bash
git checkout -b feature/products-grid
git add index.html
git commit -m "feat: add Products grid + lightbox wired to 20 product images"
git push -u origin feature/products-grid
```

Then open a Pull Request on your repo. Merge when you're done admiring your own products.

## Update product metadata
Inside `index.html` search for `const products = [` and edit titles/captions as needed. Keep `file` names exactly as your actual filenames.
