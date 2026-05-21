# UC-MKT-02 — Market Research & Competitive Intelligence Summarization

**Function:** Marketing | **Tool:** Gemini + NotebookLM | **Difficulty:** ⭐ Beginner | **Time saved:** ~85%

---

## The Problem

Market research reports and analyst studies (Gartner, Forrester, IDC) run 50–200 pages. Nobody reads them in full. Strategic insights stay locked in PDFs, decisions get made without current data.

## The Solution

Gemini supports a 2-million token context window — upload one or multiple PDFs directly and ask questions in plain language. NotebookLM goes further by creating a permanent, team-shareable knowledge base.

---

## Prompt Template

```
[UPLOAD: paste report content OR upload the PDF directly into Gemini]

You are a senior market analyst specializing in [SECTOR, e.g. "enterprise SaaS / fintech"].

From this market research report, answer the following questions in a structured format:

1. EXECUTIVE SUMMARY (max 5 bullet points): the most important trends
2. OPPORTUNITIES for [COMPANY_NAME]: 3 concrete, actionable opportunities
3. THREATS & WEAK SIGNALS: 3 points to watch
4. COMPETITIVE POSITIONING: how are [COMPETITOR_1] and [COMPETITOR_2] positioned?
5. RECOMMENDATIONS: 3 priority actions for our Marketing team in the next 90 days

Output format: clear headings, concise bullet points, one "Key Quote" per section with source page if available.
```

---

## Time Savings

| | Before | With Gemini |
|--|--|--|
| Full report reading | 2–3 hours | — |
| Writing the summary | 1 hour | 10–15 minutes |
| **Total** | **~4 hours** | **~15 minutes** |

---

## Try It Now

👉 [Open in Gemini](https://gemini.google.com) — Upload your PDF and paste the prompt.
👉 [Open in NotebookLM](https://notebooklm.google.com) — For a permanent team-queryable knowledge base.

---

## Going Further

- Load 5–10 sector reports into NotebookLM → generate an auto-updated "market intelligence guide" for the whole team
- Enable NotebookLM's Audio Overview to listen to the summary as a podcast during your commute
- Automate: Google Alert → Sheets → daily Gemini summary of competitive news
