import { vi } from 'vitest'

export interface FrameDriver {
  /** Every id handed to `cancelAnimationFrame`, in call order. */
  readonly cancelled: number[]
  /** Runs all live callbacks with one frame timestamp, as the browser would. */
  frame(time: number): void
  /** How many callbacks are waiting for the next frame. */
  pending(): number
}

/**
 * A deterministic `requestAnimationFrame`. jsdom's own loop fires on real
 * timers, which makes "is the figure 13 at 150 ms?" unassertable; this driver
 * hands the timestamps to the test instead, and honours cancellation so a
 * cancelled count-up really stops.
 */
export function driveFrames(): FrameDriver {
  const live = new Map<number, FrameRequestCallback>()
  const cancelled: number[] = []
  let nextId = 1

  vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => {
    const id = nextId
    nextId += 1
    live.set(id, callback)
    return id
  })
  vi.stubGlobal('cancelAnimationFrame', (id: number) => {
    cancelled.push(id)
    live.delete(id)
  })

  return {
    cancelled,
    frame(time: number) {
      const batch = [...live.values()]
      live.clear()
      for (const callback of batch) callback(time)
    },
    pending() {
      return live.size
    },
  }
}
