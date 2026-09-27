import '@testing-library/jest-dom/vitest'

// jsdom does not provide requestAnimationFrame / cancelAnimationFrame
if (typeof globalThis.requestAnimationFrame === 'undefined') {
  globalThis.requestAnimationFrame = (cb: FrameRequestCallback) => {
    return setTimeout(() => cb(performance.now()), 16) as unknown as number
  }
  globalThis.cancelAnimationFrame = (handle: number) => clearTimeout(handle)
}
