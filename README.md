## Auskin Immanuel

**I care most about what happens after go-live.**
Healthcare voice AI at VoxyHealth, Aug 2025 - Oct 2026. From November 2026, Associate - Forward Deployed Strategist in Chennai.

**[auskinimmanuel.github.io](https://auskinimmanuel.github.io)** is the full story. Click the orb and talk to **Lia**, the voice agent I built to answer for me.

At VoxyHealth I designed and shipped conversational voice agents on
**ElevenLabs Agents** for enterprise healthcare: claims,
prior-authorization, eligibility, scheduling, front-desk operations,
post-discharge outreach. 30+ built, 20 live in production for 6
enterprise healthcare clients, about 3,500 calls a day across the fleet
(Jul 2026).

At VoxyHealth the job was forward-deployed product work: customer
onboarding and implementation, end to end. I sat in the customer's call
data, wrote the spec, built the agent, ran the pilot calls myself, and
handed engineering exact contracts. Success criteria came first: I
agreed what success meant with the customer before the build, and on
the payer's lines, pass-rate gated the release.

### How I build

Discovery-driven, not template-driven:

> analyze the customer's real call data, catalogue the use cases,
> confirm scope with the customer, build prompts, tools, and evals,
> then iterate on live test calls and live production traffic

At VoxyHealth I started every agent from the customer's actual calls,
categorized what really happened, then designed scenarios from that
ground truth instead of imagined user stories. On one claims agent, that
approach lifted fully-AI-handled containment from the 10-20% range to
60-70% on best cuts, between March and July 2026.

### At VoxyHealth

- Took a roughly 40-scenario scheduling agent, wired into the customer's
  EHR, from spec to go-live in August 2026 for a multi-location
  orthopedic group. Four live test calls turned into prompt fixes and a
  ranked backend-fix write-up for the dev team.
- By late July 2026, 8 of the 20 live agents ran on a small, fast model.
  We moved them over line by line, and a teammate did much of one
  client's migration. On the orthopedic front desk, per-turn context
  went from about 20K tokens to 6.4K (Jul 2026).
- Built care-gap outreach agents for a radiology group. For another
  customer, teammates built the first gap agents, and in July 2026 I
  consolidated them into one master agent covering five care gaps per
  patient.

### Tools I work with

`ElevenLabs Agents` · `GPT` · `Claude` · `Gemini` ·
`multi-LLM routing` · `small-model optimization` · `MCP` ·
`voice-agent eval frameworks` · `HIPAA-aware design`

### Building in public

- **[voice-agent-prompting](https://github.com/AuskinImmanuel/voice-agent-prompting)**. How I write production voice agents: prompting architecture, small fast models on telephony, the live test-call loop, and six worked sample agents you can build on ElevenLabs.
- **[elevenlabs-python-experiments](https://github.com/AuskinImmanuel/elevenlabs-python-experiments)**. Small Python scripts against the ElevenLabs agents API. Create an agent from a prompt file, patch it, score its transcripts. Sandbox quality on purpose.
- **[elevenlabs-mcp-experiments](https://github.com/AuskinImmanuel/elevenlabs-mcp-experiments)**. A small read-only MCP server for ElevenLabs workspace data. I wrote tool definitions every week at VoxyHealth; this is the same idea from the server side.

### Reach me

[Portfolio](https://auskinimmanuel.github.io) · [LinkedIn](https://www.linkedin.com/in/auskin-immanuel/)
