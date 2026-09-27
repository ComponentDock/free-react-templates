import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { animateCount } from './animateCount'

describe('animateCount', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    let now = 0
    vi.spyOn(performance, 'now').mockImplementation(() => now)
    vi.spyOn(globalThis, 'requestAnimationFrame').mockImplementation((cb: FrameRequestCallback) => {
      now += 50
      cb(now)
      return 1
    })
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  it('calls onFrame multiple times until target is reached', () => {
    const frames: number[] = []
    animateCount(100, 1000, (v) => frames.push(v))
    expect(frames.length).toBeGreaterThan(1)
    expect(frames[frames.length - 1]!).toBe(100)
  })

  it('counts monotonically to the target', () => {
    const frames: number[] = []
    animateCount(230, 500, (v) => frames.push(v))
    expect(frames[frames.length - 1]!).toBe(230)
    for (let i = 1; i < frames.length; i++) {
      expect(frames[i]!).toBeGreaterThanOrEqual(frames[i - 1]!)
    }
  })

  it('completes when progress reaches 1', () => {
    const frames: number[] = []
    animateCount(50, 0, (v) => frames.push(v))
    // With duration 0, progress = min(elapsed/0, 1) = 1 immediately
    expect(frames[frames.length - 1]!).toBe(50)
  })
})
