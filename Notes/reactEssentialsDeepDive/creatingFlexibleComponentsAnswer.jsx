// In the solution, as a first step, a mode prop is extracted from the incoming props object in the Button component. This mode prop is then used to dynamically construct a string that contains all to-be-assigned CSS classes.

// Since the task required a default "button mode" of "filled", the mode prop is assigned a default value of 'filled'. Therefore, Button can be used without the mode prop and still get that "filled look".

// In addition, the special, built-in children prop is extracted to output the content passed between the <Button> tags:

// export default function Button({ children, mode = 'filled'}) {
//   let cssClasses = `button ${mode}-button`;

//   return <button className={cssClasses}>{children}</button>;
// }
// As a next step, to support setting all the default <button> props, all remaining props are collected in a props object via JavaScript's "rest property" syntax.

// These props are then spread onto the built-in <button> element:

// export default function Button({ children, mode = 'filled', ...props}) {
//   let cssClasses = `button ${mode}-button`;

//   return <button className={cssClasses} {...props}>{children}</button>;
// }
// Since those props could also include the className prop, that prop's value is merged into the cssClasses string:

// export default function Button({ children, className, mode = 'filled', ...props}) {
//   let cssClasses = `button ${mode}-button`;

//   if (className) {
//     cssClasses += ' ' + className;
//   }

//   return <button className={cssClasses} {...props}>{children}</button>;
// }
// Of course, the custom Button should also support icons. Therefore, an Icon prop is extracted from the incoming props. It's called Icon (with an uppercase "I") and not icon (lowercase "i") because this prop should hold a component identifier (i.e., a pointer at a component function) as a value.

// Keep in mind, that the custom Button is, for example, used like this:

// <Button Icon={PlusIcon}>Add</Button>
// The goal therefore is to use this Icon prop value as a component inside the Button component. In addition, if the Icon prop is set, the CSS classes are again extended to add the icon-button class:

export default function Button({
  children,
  className,
  mode = "filled",
  Icon,
  ...props
}) {
  let cssClasses = `button ${mode}-button`;

  if (Icon) {
    cssClasses += " icon-button";
  }

  if (className) {
    cssClasses += " " + className;
  }

  return (
    <button className={cssClasses} {...props}>
      {Icon && (
        <span className="button-icon">
          <Icon />
        </span>
      )}
      <span>{children}</span>
    </button>
  );
}
// In this, final, code snippet, the Icon is output as a separate component (<Icon />), wrapped in a <span>, if the Icon prop holds a value.
