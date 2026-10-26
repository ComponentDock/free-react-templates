import '@testing-library/jest-dom'

// jsdom does not implement matchMedia; the panel asks it one question — whether
// motion is reduced — and falls back to `false` here. Individual tests override
// it to drive the reduced-motion path.
if (!window.matchMedia) {
  window.matchMedia = ((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  })) as unknown as typeof window.matchMedia
}
