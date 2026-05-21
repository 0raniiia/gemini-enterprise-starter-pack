# UC-MKT-05 — Persona Creation & Audience Analysis

**Function:** Marketing | **Tool:** Gemini + NotebookLM | **Difficulty:** ⭐⭐ Intermediate | **Time saved:** ~85%

---

## The Problem

Marketing personas are often theoretical, generic, and written once during an offsite before being forgotten in Confluence. Building genuinely actionable personas anchored in real customer data takes a full day — and usually requires a consultant.

## The Solution

Gemini analyzes your existing data (CRM export, customer interview transcripts, NPS verbatims, sales team notes) and generates detailed, actionable personas with tailored communication angles.

---

## Prompt Template

```
You are an expert in B2B marketing strategy and buyer psychology.

I will provide you with raw data about our customers. Analyze it and generate [NUMBER, e.g. "3"] detailed, actionable personas.

AVAILABLE DATA:
[PASTE HERE: anonymized CRM export / interview transcripts / NPS comments / sales notes / any relevant data]

For each persona, generate a structured card:

**PERSONA [NUMBER] — [FICTIONAL FIRST + LAST NAME]**

📊 DEMOGRAPHIC PROFILE
- Job title:
- Industry:
- Company size:
- Tenure in role:

🧠 PSYCHOGRAPHIC PROFILE
- Top 3 professional priorities
- Top 3 daily frustrations
- Personal definition of success
- Preferred information sources

🎯 RELATIONSHIP TO [PRODUCT/SERVICE]
- Purchase trigger: what drives them to seek a solution?
- Typical objections
- Decision criteria (rational vs emotional)
- Decision process (solo or committee?)

📣 COMMUNICATION STRATEGY
- Preferred channel
- Content type that resonates
- Message that drives action
- What they absolutely don't want to hear

💬 TYPICAL QUOTE (fictional but realistic verbatim)
"[What this persona would say on a discovery call]"
```

---

## Time Savings

| | Before | With Gemini |
|--|--|--|
| Data analysis + writing | 1–2 days | 1–2 hours |
| **Total** | **~2 days** | **~2 hours** |

---

## Try It Now

👉 [Open in Gemini](https://gemini.google.com) — Paste your customer data and generate personas.
👉 [Open in NotebookLM](https://notebooklm.google.com) — For a team-queryable persona knowledge base.

---

## Going Further

- Ask Gemini to generate a qualification grid: *"Here are my 3 personas. Generate 10 qualification questions for the sales team to identify which persona each prospect belongs to."*
- Load personas into NotebookLM: the team can ask *"Which persona is most likely to churn?"* in plain language
- Connect to Vertex AI for automated lead scoring based on persona match
