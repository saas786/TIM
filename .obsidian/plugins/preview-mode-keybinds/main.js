/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// main.ts
__export(exports, {
  default: () => PreviewKeybinds
});
var import_obsidian = __toModule(require("obsidian"));
var DEFAULT_SETTINGS = {
  linesToScroll: 3,
  up: "k",
  down: "j",
  enterEditMode: "i",
  searchDoc: "/",
  scrollBottom: "g",
  scrollTop: "0"
};
var PreviewKeybinds = class extends import_obsidian.Plugin {
  constructor() {
    super(...arguments);
    this.onLayoutChange = () => {
      const previews = Array.from(document.querySelectorAll(".markdown-preview-view"));
      previews.forEach((preview) => {
        this.registerDomEvent(preview.parentElement, "keydown", this.onKeyDown);
      });
    };
    this.onKeyDown = (e) => {
      const view = this.app.workspace.getActiveViewOfType(import_obsidian.MarkdownView);
      if (!view)
        return;
      const preview = view.previewMode;
      if (preview.containerEl.classList.contains("is-searching") || !preview) {
        console.debug("skipping keyboard event ", e.key);
        return;
      }
      switch (e.key) {
        case this.settings.up:
          preview.applyScroll(preview.getScroll() - this.settings.linesToScroll);
          break;
        case this.settings.down:
          preview.applyScroll(preview.getScroll() + this.settings.linesToScroll);
          break;
        case this.settings.enterEditMode:
          this.app.commands.executeCommandById("markdown:toggle-preview");
          break;
        case this.settings.searchDoc:
          view.showSearch(false);
          break;
        case this.settings.scrollTop:
          preview.applyScroll(0);
          break;
        case this.settings.scrollBottom:
          preview.applyScroll(view.editor.lastLine());
          break;
        default:
          return;
      }
      e.preventDefault();
    };
  }
  onload() {
    return __async(this, null, function* () {
      yield this.loadSettings();
      this.addSettingTab(new PreviewKeybindsSettingTab(this.app, this));
      this.registerEvent(this.app.workspace.on("layout-change", this.onLayoutChange));
    });
  }
  onunload() {
    return __async(this, null, function* () {
      this.app.workspace.iterateCodeMirrors((cm) => {
        cm.off("optionChange", this.onLayoutChange);
      });
    });
  }
  loadSettings() {
    return __async(this, null, function* () {
      this.settings = Object.assign({}, DEFAULT_SETTINGS, yield this.loadData());
    });
  }
  saveSettings() {
    return __async(this, null, function* () {
      yield this.saveData(this.settings);
    });
  }
};
var PreviewKeybindsSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.verifyNewKeyBinding = (newKey) => {
      if (newKey.length >= 0)
        newKey = newKey.trim().charAt(0);
      return newKey.toLowerCase();
    };
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    new import_obsidian.Setting(containerEl).setName("Number of Lines to Scroll").setDesc("Affects 'Scroll up' and 'Scroll down' keybinds").addText((text) => text.setValue(this.plugin.settings.linesToScroll.toString()).onChange((value) => __async(this, null, function* () {
      let newVal = Number(value);
      if (newVal === null)
        return;
      if (newVal <= 0)
        newVal = 1;
      this.plugin.settings.linesToScroll = Math.round(newVal);
      yield this.plugin.saveSettings();
    })));
    containerEl.createEl("h3", { text: "Custom Keybindings" });
    containerEl.createEl("p", { text: "Only non-space character keys (letters, symbols and digits) can be used for keybindings. Arrow keys, enter, space, tab etc. are not supproted. Modifier keys (shift, alt etc.) are not supported." });
    new import_obsidian.Setting(containerEl).setName("Scroll Up").addText((text) => text.setValue(this.plugin.settings.up).onChange((value) => __async(this, null, function* () {
      let newKey = this.verifyNewKeyBinding(value);
      if (newKey === "")
        return;
      this.plugin.settings.up = newKey;
      yield this.plugin.saveSettings();
    })));
    new import_obsidian.Setting(containerEl).setName("Scroll Down").addText((text) => text.setValue(this.plugin.settings.down).onChange((value) => __async(this, null, function* () {
      let newKey = this.verifyNewKeyBinding(value);
      if (newKey === "")
        return;
      this.plugin.settings.down = newKey;
      yield this.plugin.saveSettings();
    })));
    new import_obsidian.Setting(containerEl).setName("Enter Edit Mode").addText((text) => text.setValue(this.plugin.settings.enterEditMode).onChange((value) => __async(this, null, function* () {
      let newKey = this.verifyNewKeyBinding(value);
      if (newKey === "")
        return;
      this.plugin.settings.enterEditMode = newKey;
      yield this.plugin.saveSettings();
    })));
    new import_obsidian.Setting(containerEl).setName("Search").addText((text) => text.setValue(this.plugin.settings.searchDoc).onChange((value) => __async(this, null, function* () {
      let newKey = this.verifyNewKeyBinding(value);
      if (newKey === "")
        return;
      this.plugin.settings.searchDoc = newKey;
      yield this.plugin.saveSettings();
    })));
    new import_obsidian.Setting(containerEl).setName("Scroll to Bottom").addText((text) => text.setValue(this.plugin.settings.scrollBottom).onChange((value) => __async(this, null, function* () {
      let newKey = this.verifyNewKeyBinding(value);
      if (newKey === "")
        return;
      this.plugin.settings.scrollBottom = newKey;
      yield this.plugin.saveSettings();
    })));
    new import_obsidian.Setting(containerEl).setName("Scroll to Top").addText((text) => text.setValue(this.plugin.settings.scrollTop).onChange((value) => __async(this, null, function* () {
      let newKey = this.verifyNewKeyBinding(value);
      if (newKey === "")
        return;
      this.plugin.settings.scrollTop = newKey;
      yield this.plugin.saveSettings();
    })));
  }
};