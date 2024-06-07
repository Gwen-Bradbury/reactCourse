export default function TabButton({ children, onSelect, isSelected }) {
  // remove onSelect from ({}) and add ...props to use forwarded props instead
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {/* the onClick would change to onClick={...props} */}
        {/* now instead of setting the on select in Examples.jsx you'd set the onClick */}
        {children}
      </button>
    </li>
  );
}
