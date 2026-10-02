---
name: zc-skill-jd-decode
description: >-
  拆解职责、硬性要求与隐含信号。
  Use in any Agent Host that can mount stdio MCP. Pair with zc-skill-jd-decode.
---

# JD 解码 · Skill

## When to use

- User asks for: JD 解码
- 拆解职责、硬性要求与隐含信号。

## Tools (`zc-skill-jd-decode`)

| Tool | Args |
|------|------|
| `decode_jd` | query, jdText, profileText, location, notes, limit |

## Example

```json
{
  "query": "Frontend Engineer",
  "location": "remote",
  "jdText": "<paste JD>",
  "profileText": "<paste profile>"
}
```

## Limits

- Do not invent employers, dates, or numbers
- Do not apply or send email unless the user confirms
- Unknown facts must be marked unknown

## Host install

Mount this repo as stdio MCP (see README). Not Zhencheng-only.
