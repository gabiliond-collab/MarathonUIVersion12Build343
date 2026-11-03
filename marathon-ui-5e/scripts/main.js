/**
 * RUNNER//UI — Marathon-inspired sci-fi interface for Foundry VTT (v13+) + dnd5e.
 * All visuals live in CSS; this script only exposes client settings and
 * toggles data-attributes on <body> that the stylesheets key off.
 */
const MODULE_ID = "marathon-ui-5e";

function applySettings() {
  const body = document.body;
  body.classList.add("mui");
  body.dataset.muiAccent = game.settings.get(MODULE_ID, "accent");
  body.dataset.muiTexture = game.settings.get(MODULE_ID, "texture");
  body.classList.toggle("mui-hazard", game.settings.get(MODULE_ID, "hazard"));
  body.classList.toggle("mui-caps", game.settings.get(MODULE_ID, "caps"));
}

Hooks.once("init", () => {
  const onChange = () => applySettings();

  game.settings.register(MODULE_ID, "accent", {
    name: "MUI.Settings.Accent.Name",
    hint: "MUI.Settings.Accent.Hint",
    scope: "client",
    config: true,
    type: String,
    default: "acid",
    choices: {
      acid: "MUI.Settings.Accent.acid",
      magenta: "MUI.Settings.Accent.magenta",
      cyan: "MUI.Settings.Accent.cyan",
      amber: "MUI.Settings.Accent.amber"
    },
    onChange
  });

  game.settings.register(MODULE_ID, "texture", {
    name: "MUI.Settings.Texture.Name",
    hint: "MUI.Settings.Texture.Hint",
    scope: "client",
    config: true,
    type: String,
    default: "halftone",
    choices: {
      halftone: "MUI.Settings.Texture.halftone",
      scanlines: "MUI.Settings.Texture.scanlines",
      none: "MUI.Settings.Texture.none"
    },
    onChange
  });

  game.settings.register(MODULE_ID, "hazard", {
    name: "MUI.Settings.Hazard.Name",
    hint: "MUI.Settings.Hazard.Hint",
    scope: "client",
    config: true,
    type: Boolean,
    default: true,
    onChange
  });

  game.settings.register(MODULE_ID, "caps", {
    name: "MUI.Settings.Caps.Name",
    hint: "MUI.Settings.Caps.Hint",
    scope: "client",
    config: true,
    type: Boolean,
    default: true,
    onChange
  });

  // Apply as early as possible so there is no flash of the default theme.
  applySettings();
});

// Stamp each chat message with a short, barcode-style ID shown by CSS.
// Foundry v12 passes a jQuery object to renderChatMessage; unwrap defensively.
Hooks.on("renderChatMessage", (message, html) => {
  const root = html?.[0] ?? html;
  const header = root?.querySelector?.(".message-header");
  if (header && message?.id) header.dataset.muiId = message.id.slice(0, 6).toUpperCase();
});
