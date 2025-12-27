import { scams, ScamType } from "@/data/scam";

export default function GuidanceSteps({ type }: { type: ScamType }) {
  const data = scams[type];

  return (
    <div>
      <h2>{data.title}</h2>

      <h3>Immediate Steps</h3>
      <ul>
        {data.immediateSteps.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>

      <h3>What to Avoid</h3>
      <ul>
        {data.avoid.map((a, i) => (
          <li key={i}>{a}</li>
        ))}
      </ul>

      {data.links.length > 0 && (
        <>
          <h3>Official Links</h3>
          {data.links.map((l, i) => (
            <a key={i} href={l.url} target="_blank">
              {l.label}
            </a>
          ))}
        </>
      )}
    </div>
  );
}
