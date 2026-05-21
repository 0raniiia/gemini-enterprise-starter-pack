# Marketing Prompt Library
## Gemini Enterprise Starter Pack

> Copy any prompt below, replace the `[VARIABLES]` with your data, and paste directly into [Gemini](https://gemini.google.com).

---

## 🗂️ Index

1. [Multi-channel content generation](#1-multi-channel-content-generation)
2. [Market research summarization](#2-market-research-summarization)
3. [A/B testing variants](#3-ab-testing-variants)
4. [Creative brief structuring](#4-creative-brief-structuring)
5. [Persona creation](#5-persona-creation)
6. [Bonus prompts](#6-bonus-prompts)

---

## 1. Multi-Channel Content Generation

**Use when:** You have a campaign brief and need to produce all formats quickly.

```
You are a B2B content marketing expert. Here is our campaign brief:

Company: [COMPANY_NAME]
Product / Service: [PRODUCT_NAME]
Target audience: [PERSONA, e.g. "IT Directors at mid-market manufacturing companies"]
Key benefit: [MAIN_BENEFIT]
Brand tone: [TONE, e.g. "expert but approachable, no unnecessary jargon"]
Call to action: [CTA, e.g. "Book a free demo"]

Generate the following 4 formats:

1. LINKEDIN POST (max 250 words): strong 2-line hook, 3 paragraphs, relevant hashtags
2. NURTURING EMAIL (subject line + body): 150 words, personalizable with [FIRST_NAME]
3. GOOGLE ADS COPY: 3 headline variants (max 30 chars) + 2 descriptions (max 90 chars)
4. BLOG INTRODUCTION (200 words): editorial angle, rhetorical question, article promise

For each format, specify the best time to publish.
```

**Iteration prompts:**
- *"Make the LinkedIn post more direct and cut it by 30%"*
- *"Rewrite the email subject line to focus on urgency instead of benefit"*
- *"Generate 3 more Google Ads headline variants targeting a different pain point"*

---

## 2. Market Research Summarization

**Use when:** You have a long PDF report to extract insights from quickly.

```
[UPLOAD the PDF directly into Gemini OR paste the text below]

You are a senior market analyst specializing in [SECTOR].

From this market research report, provide:

1. EXECUTIVE SUMMARY (max 5 bullet points): key trends only
2. OPPORTUNITIES for [COMPANY_NAME]: 3 concrete, actionable opportunities
3. THREATS & WEAK SIGNALS: 3 points to watch
4. COMPETITIVE POSITIONING: how are [COMPETITOR_1] and [COMPETITOR_2] positioned?
5. RECOMMENDATIONS: 3 priority actions for our Marketing team in the next 90 days

Format: clear headings, concise bullets, one "Key Quote" per section with source page.
```

**NotebookLM version** (for team-wide access):
> Upload your reports to NotebookLM, then ask: *"What are the top 3 growth opportunities in [sector] according to these reports? Cite your sources."*

---

## 3. A/B Testing Variants

**Use when:** You need multiple creative angles for an email campaign or ad set.

```
You are an expert B2B copywriter specializing in conversion.

Campaign context:
- Company: [COMPANY_NAME]
- Offer: [OFFER_DESCRIPTION]
- Target persona: [PERSONA]
- Goal: [CONVERSION_GOAL]
- Constraint: [CONSTRAINT, e.g. "email subject max 50 chars"]

Generate:

A) 5 EMAIL SUBJECT LINES — one per angle:
   Angle 1: Direct quantified benefit | Angle 2: Curiosity/provocative question
   Angle 3: Urgency & scarcity | Angle 4: Social proof | Angle 5: Pain recognition

B) 4 LANDING PAGE HEADLINES (H1, max 10 words each) — same angle variety

C) 3 CTA BUTTON TEXTS (3–5 words):
   One rational | One emotional | One immediate-benefit focused

For each, add a one-line note on the psychology behind it.
```

---

## 4. Creative Brief Structuring

**Use when:** You need to write a brief from rough notes and send it to an agency or creative team.

```
You are a senior marketing director. I need a structured creative brief for [PROJECT_TYPE].

Here is my raw input (notes, emails, product data — paste everything):
[RAW NOTES]

Structure a complete creative brief with:
1. CONTEXT & OBJECTIVES (market context + SMART goal + KPIs)
2. TARGET AUDIENCE (persona + key insight)
3. KEY MESSAGES (core promise + proof points + tone)
4. DELIVERABLES (formats + technical specs + legal constraints)
5. TIMELINE (approval phases + milestones)
6. REFERENCES (inspiring examples + what to avoid)

Output: professional document ready to send to an external agency.
```

**Self-review prompt** (use after generating):
```
Now play the role of a demanding creative director reviewing this brief.
What are the 3 weakest points? What is missing? What would make you reject it?
```

---

## 5. Persona Creation

**Use when:** You want to build actionable personas from real customer data.

```
You are a B2B marketing strategist and buyer psychology expert.

Below is raw customer data (CRM export, interview notes, NPS comments — anonymized).
Analyze it and generate [NUMBER] detailed, actionable personas.

[PASTE YOUR DATA HERE]

For each persona, produce:

PERSONA [N] — [FICTIONAL NAME]
- Demographic profile (title, industry, company size, tenure)
- Psychographic profile (top 3 priorities, top 3 frustrations, success definition)
- Relationship to our product (purchase trigger, objections, decision criteria)
- Communication strategy (preferred channel, resonating content, action trigger)
- Typical quote: "[verbatim they'd say on a discovery call]"
```

---

## 6. Bonus Prompts

### Content Performance Analysis
```
Here are the performance metrics for my last 10 LinkedIn posts: [PASTE DATA]
You are a content strategist. Analyze what patterns correlate with high engagement.
Give me 5 actionable rules for my next 30 days of content.
```

### Competitor Content Audit
```
Here are the last 10 LinkedIn posts from [COMPETITOR]: [PASTE CONTENT]
Analyze their content strategy: topics, tone, formats, posting frequency, engagement patterns.
What are the 3 gaps I can exploit with my own content?
```

### Campaign Retrospective
```
Here is the data from our [CAMPAIGN_NAME] campaign: [PASTE METRICS + NOTES]
You are a senior marketing analyst. Write a structured retrospective:
1. What worked (with data)
2. What didn't work (with hypotheses)
3. 3 concrete recommendations for the next campaign
```

### Email Sequence (5 emails)
```
You are a B2B email marketing specialist.
Build a 5-email nurturing sequence for a prospect who downloaded our [CONTENT_TYPE].
Target: [PERSONA] | Offer: [PRODUCT] | Goal: book a discovery call

For each email: subject line, send timing (Day X), body (150 words max), CTA.
Vary the angle across emails: educational → social proof → objection handling → urgency → final push.
```

---

*Gemini Enterprise Starter Pack · Google Cloud Customer Engineering*
