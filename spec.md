# Specification

## Summary
**Goal:** Replace all references to the old domain `jay-sports-puc.caffeine.xyz` with `www.jaysports.in` across all frontend files.

**Planned changes:**
- Update all Open Graph (`og:url`, `og:image`), Twitter Card, and canonical URL tags in `frontend/index.html` to use `https://www.jaysports.in`
- Replace any hardcoded domain strings in TSX/TS component files with `www.jaysports.in`
- Update any SEO tags, Google Analytics config, or other tracking references that use the old domain

**User-visible outcome:** The website's metadata, SEO tags, and all internal URL references now point to `https://www.jaysports.in` instead of the old domain.
