#!/usr/bin/env node
import { createFirstpartyMcp } from '../_shared/create-firstparty-mcp.mjs';

const mcp = createFirstpartyMcp({
  "id": "jd-decode",
  "titleZh": "JD 解码",
  "summary": "拆解职责、硬性要求与隐含信号。",
  "tools": [
    "decode_jd"
  ],
  "proxyTools": {
    "decode_jd": "zc_eval_jd"
  },
  "localKind": "eval"
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
