export default function Section({ title, children, ...props }) {
  // the ... before props tells react to group together all the props that might be passed through and merge them into the props object
  return (
    // ensures all extra props that may be set on our custom component are forwarded to this <section> tag
    // eg id="example" thats set in Examples.jsx
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
