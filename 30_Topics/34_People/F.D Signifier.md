---
created: 2021-12-29 
aliases:
  - null
tags: node/topic/person
---
`$=customJS.dv_funcs.mentionedIn(dv)`


```dataview
TABLE 
	length(file.inlinks) as In, 
	length(file.outlinks) as Out
from [[F.D Signifier]]
```