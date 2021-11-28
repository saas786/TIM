---
created: 2021-11-27 
aliases:
  - null
tags: node/project
---

# [[Using spaced repetition for your conceptual notes]] `$=customJS.dv_funcs.evergreenHeader(dv, this)`

Spaced repetition is an extremely powerful tool to review [[conceptual notes]]. These are the ways I have found most useful:
1. [[Use spaced repetition as a memory tool for your second brain]]
2. [[Use spaced repetition to weed your digital garden]]

Over the last month I have worked through ~200 [[evergreen notes]] using [[spaced repetition]], and the process has been very fruitful. Overall, I doubled the average amount of links per note from 7 to 14, and created almost 20 notes just based on connections I was making within my existing notes.

I decided early on that I would use spaced repetition as a  [[Use spaced repetition as a memory tool for your second brain|memory tool for my second brain]] and not an [[incremental writing]] tool, although I may explore that more in the future. This doesn't mean I stopped myself from writing while reviewing my notes, but unless I have inspiration on the spot, I am not pushing myself to write. The point is to stengthen the connections of nodes in [[second brain]] because that is how I use it to remember things
^[[[Nodes in the second brain are an abstraction of our first brain]]]
and grow my knowledge.
^[[[Evergreen notes organize knowledge so that it can grow]]]
This means adding links to other notes, todo items, and updating any metadata like note status.

## How I rate notes during daily spaced repetition review

[[Spaced Repetition (plugin)]] offer's three different levels of difficulty when reviewing notes: easy, good, and hard. These will set an interval of time before you review the note again. The interval is based on the note's previous difficulty and interval. Since I am using spaced repitition as a memory tool, I base my rating on how easily I could theoretically remember the note in context. This is mainly an intuitive process, but some hard rules have formed.
```mermaid
flowchart TB;  
 B[Am I surprised by the note title?]-->|Yes|Hard;  
 B-->|No|C[Am I surprised by the note content?];
 C-->|Yes|Hard[Review: Hard];
 C-->|No|E[Can I easily link other notes?];
 E-->|No|Hard;
 E-->|Yes|G[Does the note need work?]
 G-->|Yes|X[Can I tag the work that needs to be done?];
 X-->|No|Hard;
 X-->|Yes|Good;
 G-->|No|Good[Review: Good];
 G-->|No and it's boring|Easy[Review: Easy];

```
This process heavily leverages [[my TO(DO) and EVER(GREEN) structure]], and the interlinked nature of [[evergreen notes]]: ![[Andy Matuschak's Evergreen Notes#^8d0b78]]

While I am doing review, I take the time to add links and tags, as I think making connections will help both my first brain and my second brain remember. I also will take time to cleanup syntax and paragraph structure, because I also [[use spaced repetition to weed your digital garden]]. 

## Challenges

When I started, I had about 200 [[evergreen notes]] that spanned four major content areas. While one of the major benefits was the connections I was able to make across content areas, multiple times I ran into old notes I had forgotten about that I wish I would have reviewed a week or two before. This is mainly a symptom of doing the first pass through with spaced repetition, but I might suggest you first review by content area, before reviewing all at once, if you have more than 200 notes or a lot of older notes. 

While I wasn't pushing myself to write, because I was unconvering lots of old notes, I had lots of new thoughts to add to them, and I was adding a lot of content to notes based off of connections I was making. While this did slow down the review process, overall it was a positive symptom. The only time it was a problem was when I added thoughts that already existed in other notes, but as I reviewed more notes, this happened less and less.

## Conclusion 

My experience with this practice has been very fruitful, and I think that anyone who uses conceptual notes could benefit from this practice. By using spaced repetition for our [[evergreen notes]] we make it so that we can help our evergreens grow even when we are away from our computer: [[Evergreen notes organize knowledge so that it can grow]]
%%^[For me, this is especially helpful because [[Neurodivergent people cannot stop their brain from solving problems]].]
%%