/**
 * Test-only navigator plumbing. jsdom ships neither `clipboard`, `share` nor
 * `matchMedia`, so each test installs exactly the surface it needs and the
 * helpers below restore the original afterwards.
 */

type Globs = Record<string, unknown>

const target = navigator as unknown as Globs

export function setClipboard(writeText: () => Promise<void>): void {
  Object.defineProperty(navigator, 'clipboard', {
    configurable: true,
    value: { writeText },
  })
}

export function clearClipboard(): void {
  delete target.clipboard
}

export function setShare(share: (data: { url: string }) => Promise<void>): void {
  Object.defineProperty(navigator, 'share', { configurable: true, value: share })
}

export function clearShare(): void {
  delete target.share
}

export function setMatchMedia(matches: boolean): void {
  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    value: () => ({ matches, media: '(pointer: coarse)' }),
  })
}

export function clearMatchMedia(): void {
  delete (window as unknown as Globs).matchMedia
}
