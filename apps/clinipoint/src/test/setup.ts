import '@testing-library/jest-dom/vitest'

// jsdom doesn't implement scrollIntoView — stub it on HTMLElement.prototype
// so onClick handlers that call document.getElementById(...).scrollIntoView work.
HTMLElement.prototype.scrollIntoView = vi.fn()
