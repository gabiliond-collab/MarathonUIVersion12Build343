# RUNNER//UI — Sci-Fi Interface for D&D 5e

A Foundry VTT module (works on Forge) that replaces the fantasy parchment-and-gold look of Foundry VTT v12 and the dnd5e system 4.x with a graphic-realism sci-fi interface inspired by the art direction of Bungie's *Marathon*.

Unofficial fan project. It uses no Bungie logos, fonts, or art assets, only a similar color approach and graphic vocabulary.

## What it changes

- **Palette:** near-black surfaces, bone-white text, and flat, fully saturated signal colors (acid green, hot magenta, electric cyan, hazard amber, signal red). No gradients on color, no glows.
- **Patterns:** diagonal hazard stripes on window headers and low-HP / condition states, halftone dots or scanlines (selectable), dither on chat cards, barcode rules, a faint blueprint grid, corner registration ticks.
- **Shape:** zero border radius, clipped corners on buttons, chat cards, portraits and ability scores, hard offset shadows.
- **Type:** condensed heavy grotesque (Archivo) for names and numbers, JetBrains Mono for labels and metadata, tracked uppercase labels.
- **Coverage:** windows, sidebar, scene controls and navigation, hotbar, players list, chat and dice, dialogs, tooltips, context menus, notifications, login screen, and dnd5e 4.x character / NPC / item sheets, chat cards, HP bars, ability scores, pills, spell slots and rarity colors.

## Per-user settings (Configure Settings > Module Settings)

| Setting | Options |
| --- | --- |
| Signal Color | Acid Green (default), Hot Magenta, Electric Cyan, Hazard Amber |
| Surface Texture | Halftone, Scanlines, None |
| Hazard Stripes | on / off |
| Uppercase Labels | on / off |

All settings are client-side, so each player picks their own.

## Installing

**Forge VTT**
1. Host this folder as a GitHub repo (or any static host) and put a release zip and `module.json` URL in the `manifest` and `download` fields of `module.json`.
2. In your Forge game, open **Manage Game > Modules / Add-ons > Install Module (Custom)** and paste the manifest URL. (Forge installs custom modules from a manifest URL; it cannot take a zip dropped into the Assets Library.)
3. Enable **RUNNER//UI** in your world's module list.

**Self-hosted Foundry:** unzip so the folder `marathon-ui-5e` sits in `Data/modules/`, then enable it in the world.

## Requirements

- Foundry VTT v12 (verified on Build 343)
- dnd5e system 4.x (verified on 4.4.4; the sheet selectors target the `.dnd5e2` sheet classes)

This version targets Foundry's older window framework (`.window-app`) and the jQuery chat hook. It is not meant for Foundry v13 or dnd5e 5.x.

## Customizing

Every color is a CSS variable at the top of `styles/marathon.css` (`--mui-acid`, `--mui-magenta`, `--mui-cyan`, `--mui-amber`, `--mui-red`, plus the surface tones). Edit them and reload. To adjust the dnd5e sheets, use your browser dev tools to inspect an element and add a rule in `styles/marathon-dnd5e.css`. The dnd5e system changes class names between releases, so a few selectors may need tuning.

## Notes

- Fonts load from Google Fonts. If you are offline, the stack falls back to Arial Narrow and system monospace.
- Module CSS is unlayered, so it takes priority over Foundry's and dnd5e's CSS layers.
- Character and item art is left untouched apart from a grayscale-and-contrast treatment on sheet portraits, which clears on hover.
