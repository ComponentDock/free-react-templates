import '@testing-library/jest-dom/vitest'

// jsdom has no layout engine — make scroll calls safe no-ops.
Element.prototype.scrollIntoView = () => {}
