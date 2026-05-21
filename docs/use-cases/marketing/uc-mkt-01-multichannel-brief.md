# UC-MKT-01 — Multi-Channel Content from a Single Brief

**Function:** Marketing | **Tool:** Gemini | **Difficulty:** ⭐ Beginner | **Time saved:** ~80%

---

## The Problem

Your team writes a campaign brief. Then someone spends half a day re-writing the same message as a LinkedIn post, a nurturing email, an ad headline, and a blog intro — with inconsistent tone across formats. Time-to-market stretches. Brand voice drifts.

## The Solution

Gemini takes your raw brief and generates all formats simultaneously in one request — respecting your brand tone and each channel's constraints.

---

## Prompt Template

```
You are a B2B content marketing expert. Here is our campaign brief:

Company: [COMPANY_NAME]
Product / Service: [PRODUCT_NAME]
Target audience: [PERSONA, e.g. "IT Directors at mid-market manufacturing companies"]
Key benefit: [MAIN_BENEFIT]
Brand tone: [TONE, e.g. "expert but approachable, no unnecessary jargon"]
Call to action: [CTA, e.g. "Book a free demo"]

From this brief, generate the following 4 formats:

1. LINKEDIN POST (max 250 words): strong 2-line hook, 3 paragraphs, relevant hashtags
2. NURTURING EMAIL (subject line + body): 150 words, personalizable with [FIRST_NAME]
3. GOOGLE ADS COPY: 3 headline variants (max 30 chars) + 2 descriptions (max 90 chars)
4. BLOG INTRODUCTION (200 words): editorial angle, rhetorical question, article promise

For each format, specify the target channel and best time to publish.
```

---

## Example Output (truncated)

**LinkedIn Post:**
> "Your marketing team is spending 4 hours on what should take 20 minutes.
> Here's what changes when you put Gemini in their workflow..."

**Email Subject Lines:**
> - "How [Company] reduced campaign creation time by 80%"
> - "Your brief → 4 formats in 15 minutes"

---

## Time Savings

| | Before Gemini | With Gemini |
|--|--|--|
| Content creation | 3–4 hours | 15 minutes |
| Review & alignment | 1 hour | 20 minutes |
| **Total** | **~5 hours** | **~35 minutes** |

**Estimated saving per campaign: 4.5 hours**

---

## Try It Now

👉 [Open in Gemini](https://gemini.google.com) — Paste the prompt, replace variables, generate.

---

## Going Further

- Upload your brand guidelines to NotebookLM → reference them in your prompt: *"Respect the guidelines in the uploaded document"*
- Automate via Vertex AI: trigger content generation as soon as a brief is submitted via Google Forms
- Ask Gemini to critique its own output: *"Now review this content as a harsh brand manager. What needs to change?"*
