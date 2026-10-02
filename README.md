# JD 解码

Standard **MCP + Skill** for any Agent Host (Cursor / Claude Code / Codex / Zhencheng).

拆解职责、硬性要求与隐含信号。

> One capability = one GitHub project. This folder is the sellable unit.

## Quick start

```bash
cd zc-skill-jd-decode
npm i
node stdio_mcp_server.mjs
```

## Cursor (`~/.cursor/mcp.json`)

```json
{
  "mcpServers": {
    "zc-skill-jd-decode": {
      "command": "node",
      "args": ["/ABS/PATH/zc-skill-jd-decode/stdio_mcp_server.mjs"]
    }
  }
}
```

Optional (use Zhencheng live tools):

```json
"env": {
  "ZC_AGENT_API_URL": "https://your-zhencheng-host",
  "ZC_MCP_TOKEN": "your-token"
}
```

## Tools

| Tool | Args |
|------|------|
| `decode_jd` | `query?` `jdText?` `profileText?` `location?` `notes?` `limit?` (number) |

## Skill

See `skills/zc-skill-jd-decode/SKILL.md`.

## License

MIT — see `LICENSE`.
