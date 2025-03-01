---
created: 2021-10-23
aliases:
  - make obsidian plugins
  - developing obsidian plugins
  - Plugin Ideas
tags: created/evergreen/2021/10/23, node/evergreen, node/topic/technique
sr-due: 2022-01-07
sr-interval: 16
sr-ease: 250
---
`$=customJS.dv_funcs.mentionedIn(dv)`


**See**:: [[programming]], [[Software Development]]
*`$=customJS.dv_funcs.outlinedIn(dv, this)`*

##### [[Develop Obsidian plugins]] `$=customJS.dv_funcs.topicOutlineHeader(dv, this)`
- [Obsidian API](https://github.com/obsidianmd/obsidian-api/blob/master/obsidian.d.ts) 
- [for Plugin Developers - Obsidian Hub](https://publish.obsidian.md/hub/04+-+Guides%2C+Workflows%2C+%26+Courses/for+Plugin+Developers)
- [[Templater]]
	- docs: [Obsidian Templater Plugin | Templater](https://silentvoid13.github.io/Templater/)
	- code:[GitHub - SilentVoid13/Templater: A template plugin for obsidian](https://github.com/SilentVoid13/Templater)
	- Templates that go on preview[Dynamic Commands | Templater](https://silentvoid13.github.io/Templater/docs/commands/dynamic-command/)
- [GitHub - elias-sundqvist/obsidian-react-components: Write and use React (Jsx) components in your Obsidian notes.](https://github.com/elias-sundqvist/obsidian-react-components)
- [Inter-plugin Communication (Expose API to Other Plugins) - Developers & API - Obsidian Forum](https://forum.obsidian.md/t/inter-plugin-communication-expose-api-to-other-plugins/23618)
- [hot reload for plugin development](https://forum.obsidian.md/t/plugin-release-for-developers-hot-reload-the-plugin-s-youre-developing/12185)
- plugin ideas
	- YAQS (yet another quick search) which allow you to save searches and invoke them in the quick switcher with a leading character
		- incremental writing plugin accesses search plugin and adds button
	- Youtube chapter exporter 
	- Roam like side bar for notes, headings, and bullets
	- Plugin which shows notes with the most unlinked mentions, and links to uncreated notes
	- remind me (like reddit)
	- most recent command 
		- how to make a command [obsidian-macros/main.ts at a56fb9a7259564a9345e0d1ed0af4331f4dba104 · phibr0/obsidian-macros · GitHub](https://github.com/phibr0/obsidian-macros/blob/a56fb9a7259564a9345e0d1ed0af4331f4dba104/src/main.ts#L28)
		- command related [obsidian-key-promoter/main.ts at master · joethei/obsidian-key-promoter · GitHub](https://github.com/joethei/obsidian-key-promoter/blob/master/main.ts) 
	- Twitter sidebar (timeline, favorites, bookmarks, lists, etc)
		- possible example code [GitHub - samwarnick/obsidian-simple-embeds: A plugin for Obsidian that automatically turns links into embeds.](https://github.com/samwarnick/obsidian-simple-embeds)
		- embed timelines or tweets [Twitter for Websites | Docs | Twitter Developer Platform](https://developer.twitter.com/en/docs/twitter-for-websites)
	- Vault logger to append note changes and links to daily notes
- How to tell if a pane is not in view: [Discord](https://discord.com/channels/686053708261228577/716028884885307432/920571021906546698)