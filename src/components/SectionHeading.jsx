export default function SectionHeading({ id, title, intro }) {
  return (
    <div className="section-heading">
      <h2 id={id}>{title}</h2>
      {intro ? <p>{intro}</p> : null}
    </div>
  );
}
