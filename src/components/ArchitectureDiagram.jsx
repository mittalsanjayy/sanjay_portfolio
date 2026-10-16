/**
 * A learning blueprint, not a live system. It shows the kind of
 * architecture I'm studying: a React front end talking to a Django
 * API on AWS, with monitoring through CloudWatch.
 */
export default function ArchitectureDiagram() {
  return (
    <figure className="diagram">
      <svg
        viewBox="0 0 520 392"
        role="img"
        aria-labelledby="diagram-title diagram-desc"
        className="diagram__svg"
      >
        <title id="diagram-title">Learning blueprint: full-stack application on AWS</title>
        <desc id="diagram-desc">
          A browser running a React front end connects to a Django REST API on EC2. The API reads a SQL
          database and serves static files from S3. IAM controls access and CloudWatch collects metrics.
        </desc>
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 z" className="dg-arrow" />
          </marker>
        </defs>

        {/* AWS boundary */}
        <rect x="170" y="20" width="330" height="352" rx="14" className="dg-boundary" />
        <text x="188" y="46" className="dg-boundary-label">AWS, the platform I'm learning</text>

        {/* Browser */}
        <rect x="16" y="150" width="124" height="68" rx="10" className="dg-box" />
        <text x="78" y="180" textAnchor="middle" className="dg-title">Browser</text>
        <text x="78" y="199" textAnchor="middle" className="dg-sub">React front end</text>

        {/* EC2 */}
        <rect x="200" y="70" width="140" height="68" rx="10" className="dg-box dg-box--accent" />
        <text x="270" y="100" textAnchor="middle" className="dg-title">EC2</text>
        <text x="270" y="119" textAnchor="middle" className="dg-sub">Django REST API</text>

        {/* S3 */}
        <rect x="364" y="70" width="116" height="68" rx="10" className="dg-box" />
        <text x="422" y="100" textAnchor="middle" className="dg-title">S3</text>
        <text x="422" y="119" textAnchor="middle" className="dg-sub">Static files</text>

        {/* Database */}
        <rect x="200" y="170" width="140" height="68" rx="10" className="dg-box" />
        <text x="270" y="200" textAnchor="middle" className="dg-title">SQL database</text>
        <text x="270" y="219" textAnchor="middle" className="dg-sub">MySQL / PostgreSQL</text>

        {/* IAM */}
        <rect x="364" y="170" width="116" height="68" rx="10" className="dg-box" />
        <text x="422" y="200" textAnchor="middle" className="dg-title">IAM</text>
        <text x="422" y="219" textAnchor="middle" className="dg-sub">Access control</text>

        {/* CloudWatch */}
        <rect x="200" y="280" width="280" height="68" rx="10" className="dg-box" />
        <text x="340" y="310" textAnchor="middle" className="dg-title">CloudWatch</text>
        <text x="340" y="329" textAnchor="middle" className="dg-sub">Metrics, logs and alarms</text>

        {/* Connections */}
        <path d="M140 184 H168 V104 H198" className="dg-line" markerEnd="url(#arrow)" />
        <path d="M270 138 V168" className="dg-line" markerEnd="url(#arrow)" />
        <path d="M340 104 H362" className="dg-line" markerEnd="url(#arrow)" />
        <path d="M352 278 V104" className="dg-line dg-line--dashed" />
        <text x="358" y="262" className="dg-sub">observes</text>
      </svg>
      <figcaption className="diagram__caption">
        A blueprint of what I'm studying and building toward. It is not a running system.
      </figcaption>
    </figure>
  );
}
