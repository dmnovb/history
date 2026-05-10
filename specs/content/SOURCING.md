# Content Sourcing Guide

## Event Narratives (3-5 paragraphs each)

### Process Overview

1. **Identify event** → Research → Extract → AI rewrite → Manual review → Add to data

### Step 1: Identify 75-100 Events

**Organize by century with era context:**

- **15th Century (Late Medieval/Renaissance):** 1400-1499
  - Fall of Constantinople, Gutenberg Printing Press, Exploration begins
- **16th Century (Early Modern):** 1500-1599
  - Protestant Reformation (1517), Age of Exploration, Religious Wars
- **17th Century (Early Modern):** 1600-1699
  - Scientific Revolution, Thirty Years War, English Civil War, Absolute Monarchy
- **18th Century (Enlightenment):** 1700-1799
  - Age of Enlightenment, American Revolution (1776), French Revolution (1789)
- **19th Century (Industrial & Nationalism):** 1800-1899
  - Industrial Revolution, Napoleonic Wars, American Civil War, Imperialism, Nationalism
- **20th Century (Modern):** 1900-1999
  - WWI, WWII, Cold War, Space Race, Civil Rights, Decolonization
- **21st Century (Contemporary):** 2000-present
  - 9/11, Internet era, Climate change, Globalization

**Target:** ~75-100 events total, distributed evenly across centuries. Aim for breadth across regions and countries.

### Step 2: Research

For each event:
1. Open Wikipedia article
2. Read the introduction (usually 2-3 paragraphs)
3. Note the date range, key figures, significance

### Step 3: Extract Key Content

Copy 2-3 substantive paragraphs from Wikipedia intro or opening sections.

**Example: French Revolution**

Original Wikipedia:
> "The French Revolution was a period of profound social and political upheaval that fundamentally transformed French and, by extension, European society. It lasted nearly a decade, from 1789 to 1799, though it experienced its most intense and violent phase during the Reign of Terror (1793–1794). The Revolution abolished feudalism, secularized society, and established the principle of individual rights through the Declaration of the Rights of Man and of the Citizen (1789). It swept away the ancien régime and produced, among its many results, the Declaration of the Rights of Man and Citizen..."

### Step 4: AI Rewrite (Claude)

Prompt:
```
I have these Wikipedia paragraphs about the French Revolution:
[paste extracted content]

Please rewrite this into 3-5 cohesive, engaging paragraphs that:
- Explain what happened and why it matters
- Keep technical/specialized terms minimal
- Flow naturally without repeated phrases
- Maintain accuracy
- Are suitable for a historical knowledge app

Output just the narrative, no introduction.
```

Claude will typically produce:
```
The French Revolution (1789-1799) was a pivotal period that transformed France and rippled 
across Europe. It began as a response to fiscal crisis, social inequality, and Enlightenment 
ideas about individual rights. What started with calls for reform erupted into a radical 
restructuring of society itself.

The Revolution's most profound impact came through dismantling the feudal system and 
establishing the principles of individual liberty and equality before the law. The Declaration 
of the Rights of Man and Citizen (1789) became a foundational document for modern democracy. 
However, this period also saw unprecedented violence: the Reign of Terror (1793-1794) claimed 
thousands of lives in the name of revolutionary ideals.

[Continue with 2-3 more paragraphs covering consequences, Napoleon, legacy]
```

### Step 5: Manual Review

Check the AI output:
- [ ] Is it accurate? (Cross-check against Wikipedia)
- [ ] Does it flow naturally?
- [ ] Is it 3-5 paragraphs?
- [ ] Any awkward phrasing?
- [ ] Appropriate length for reading in a panel?
- [ ] Names/dates correct?

Revise as needed. Usually 1-2 quick edits.

### Step 6: Add to events.ts

```typescript
{
  id: "french-revolution",
  title: "The French Revolution",
  date: { start: 1789, end: 1799 },
  era: "Enlightenment",
  country: "france",
  summary: "A period of social upheaval that overthrew the French monarchy and established principles of individual rights.",
  narrative: "[AI-generated 3-5 paragraphs]",
  headerImage: "/images/events/french-revolution.jpg",
  figures: ["robespierre", "marie-antoinette", "louis-xvi"],
  sources: ["https://en.wikipedia.org/wiki/French_Revolution"]
}
```

---

## Historical Figures

### Process

1. **Identify figures involved in curated events**
2. **Gather basic info** (birth, death, role)
3. **Link to events** (bidirectional)
4. **Add descriptions** (optional for MVP)

### Figure Data Fields

```typescript
{
  id: "napoleon",
  name: "Napoleon Bonaparte",
  birth: 1769,
  death: 1821,
  era: "Modern",
  role: "French Military Commander & Emperor",
  description: "Optional; can be filled in Phase 2",
  events: ["french-revolution", "napoleonic-wars", "congress-of-vienna"],
  countries: ["france"]
}
```

### Figure Role Examples

- "Roman General"
- "American President"
- "British Monarch"
- "French Philosopher"
- "Military Commander"
- "Revolutionary Leader"
- "Scientist & Inventor"
- "Economic Theorist"

### Linking Figures to Events

After writing event narrative:
1. Identify 2-5 key figures mentioned
2. Find or create figure objects in `figures.ts`
3. Add event ID to figure's `events` array
4. Add figure ID to event's `figures` array

**Check consistency:**
```
Event "French Revolution" includes figure IDs: [robespierre, marie-antoinette]
Figure "Robespierre" includes event ID: ["french-revolution"]
```

---

## Header Images

### Image Requirements

- **Dimensions:** 400-600px wide (for responsive panel)
- **Format:** JPG or PNG (compressed)
- **File size:** <200KB (optimized)
- **Style:** Civ 6-inspired (rich, detailed, historical aesthetic)
- **Content:** Visual representation of the event

### Finding Images

#### Option 1: Wikimedia Commons (Free)
- **URL:** commons.wikimedia.org
- **Search:** Event name (e.g., "French Revolution")
- **Filter:** Public domain or CC-licensed
- **Advantage:** Free, legally clear, often historical art
- **Disadvantage:** Quality varies, fewer results

#### Option 2: Creative Commons
- **Search:** Flickr, Pixabay, Unsplash
- **Filter:** CC license with attribution allowed
- **Advantage:** Often higher quality than Wikimedia
- **Disadvantage:** May require attribution in footer

#### Option 3: AI-Generated
- **Tools:** DALL-E, Midjourney, Stable Diffusion
- **Prompt:** "Civ 6 style art of [event], detailed historical painting"
- **Advantage:** Consistent aesthetic, high quality
- **Disadvantage:** May require subscription, some debate on ethics

#### Option 4: Placeholder
- **Use:** Gradient or simple background color
- **Advantage:** Fast to implement
- **Note:** Phase 1 acceptable; upgrade in Phase 2

### Image Optimization

```bash
# Using ImageMagick
convert original.jpg -resize 600x400 -quality 85 optimized.jpg

# Or use online tools: tinypng.com, compressor.io
```

**Target:** <200KB per image

### Attribution

If using CC-licensed images, add to event sources:
```typescript
sources: [
  "https://en.wikipedia.org/wiki/French_Revolution",
  "Image: [Photographer/Creator Name] via Wikimedia Commons"
]
```

---

## Content Checklist

### Before Adding Event

- [ ] Wikipedia article exists and is substantial
- [ ] Event is 1 AD - present, Europe/US focused
- [ ] Narrative is 3-5 paragraphs (not too short, not too long)
- [ ] Accuracy checked against multiple sources
- [ ] At least 2-3 figures identified
- [ ] Date/era correct
- [ ] Header image found or placeholder assigned

### Before Publishing

- [ ] All figure IDs in event exist in figures.ts
- [ ] All event IDs in figures are correct
- [ ] Images are optimized
- [ ] No broken links or references
- [ ] Spell-check passed
- [ ] Reads naturally (not AI-generated awkwardness)

---

## Workflow Optimization

**Batch strategies to make content curation easier:**

- **Batch research:** Find 10 event articles at once, keep tabs open
- **Templated prompts:** Save your Claude prompt, reuse it with minor tweaks
- **Image search in bulk:** Open Wikimedia Commons search, find multiple images at once
- **Parallel work:** Research, writing, and image sourcing can happen independently
- **Enlist help:** Ask friends to research specific eras or events
- **Iterative:** Start with 25-30 events, validate the experience, then expand

---

## Quality Assurance

### Accuracy Verification

- [ ] All dates are correct (cross-check Wikipedia + 1-2 other sources)
- [ ] Figure names are spelled correctly
- [ ] Roles/descriptions are accurate
- [ ] No misleading statements

### Narrative Quality

- [ ] Reads naturally (not stilted AI voice)
- [ ] Engaging opening (hooks the reader)
- [ ] Clear cause/effect (why did this happen?)
- [ ] Significance explained (why does it matter?)
- [ ] Smooth transitions between paragraphs

### Linking Consistency

- [ ] Figure appears in narrative → Figure object exists
- [ ] Figure object → Event references exist
- [ ] No orphaned figures or events
- [ ] Bidirectional linking consistent

---

## Content Maintenance

As content grows (Phase 2+):
- Keep `events.ts` and `figures.ts` alphabetically sorted
- Use consistent naming conventions (lowercase-with-hyphens for IDs)
- Document any breaking changes in a changelog
- Version control: commit content changes separately from code
