## Auskin Immanuel

**I deploy voice AI where it's hardest: healthcare phone lines.**
Associate Product Manager, Voice AI (Forward Deployed) at VoxyHealth.

**[auskinimmanuel.github.io](https://auskinimmanuel.github.io)** is the full story. Click the orb and talk to **Lia**, the voice agent I built to answer for me.

I design and ship conversational voice agents on **ElevenLabs Agents**
for enterprise healthcare: claims, prior-authorization, eligibility,
scheduling, front-desk operations, post-discharge outreach. 30+
production agents across 6 enterprise healthcare clients, ~3,500 calls
a day across the fleet.

The job is forward-deployed product work: customer onboarding and
implementation, end to end. I sit in the customer's call data, write the
spec, build the agent, run the pilot calls myself, and hand engineering
exact contracts. Success criteria come first: the eval rubric is agreed
before the build, and pass-rate gates the release.

### How I build

Discovery-driven, not template-driven:

> analyze the customer's real call data, catalogue the use cases,
> confirm scope with the customer, build prompts, tools, and evals,
> then iterate on live test calls and live production traffic

I start every agent from the customer's actual calls, categorize what
really happens, then design scenarios from that ground truth instead of
imagined user stories. On one claims agent, that approach lifted
fully-AI-handled containment from the 10-20% range to 60-70% on best cuts.

### Lately

- Took a roughly 40-scenario scheduling agent, wired into the customer's
  EHR, from spec to live pilot for a multi-location orthopedic group.
  Four live test calls turned into five fix commits and a validation
  spec for the dev team.
- Moved about nine production agents to a small, fast model in four
  weeks. On the biggest one that meant cutting per-turn context from
  about 20K tokens to 6.4K.
- Built care-gap outreach agents for a radiology group, and for another
  customer an architecture that runs multiple care gaps under one master
  agent.

### Tools I work with

`ElevenLabs Agents` · `GPT` · `Claude` · `Gemini` ·
`multi-LLM routing` · `small-model optimization` · `MCP` ·
`voice-agent eval frameworks` · `HIPAA-aware design`

### Building in public

- **[voice-agent-prompting](https://github.com/AuskinImmanuel/voice-agent-prompting)**. How I write production voice agents: prompting architecture, small fast models on telephony, the live test-call loop, and six worked sample agents you can build on ElevenLabs.
- **[elevenlabs-python-experiments](https://github.com/AuskinImmanuel/elevenlabs-python-experiments)**. Small Python scripts against the ElevenLabs agents API. Create an agent from a prompt file, patch it, score its transcripts. Sandbox quality on purpose.
- **[elevenlabs-mcp-experiments](https://github.com/AuskinImmanuel/elevenlabs-mcp-experiments)**. A small read-only MCP server for ElevenLabs workspace data. I write tool definitions every week at work; this is the same idea from the server side.

### Reach me

[Portfolio](https://auskinimmanuel.github.io) · [LinkedIn](https://www.linkedin.com/in/auskin-immanuel/)
