// Vanilla CSS files are not scoped to certain components
// They are injected into the top of the HTML file by react and are therefore global - so if you had a header component
// and a header css file together in components/header files, and imported the header css file into the header component the syles in the css file would affect every component across the project
// not just the header component, even if it wasn't imported into any other files.
// It doesn't matter where the css files are stored the same rule applies. They will affect every component.
