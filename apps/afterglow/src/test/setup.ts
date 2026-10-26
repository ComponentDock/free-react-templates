import '@testing-library/jest-dom'

// jsdom does not implement matchMedia. The menu hook asks it two questions —
// whether the viewport crossed 861 px and whether motion is reduced — and gets
// `false` for both here. Individual tests override it per case.
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
