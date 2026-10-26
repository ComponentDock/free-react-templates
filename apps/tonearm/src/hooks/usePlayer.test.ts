import { act, renderHook } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { ALBUM, PODCAST } from '../data'
import { initialState, reduce, usePlayer } from './usePlayer'

const albumOptions = {
  duration: ALBUM.tracks[0]!.duration,
  elapsed: 0,
  tracks: ALBUM.tracks,
}

const podcast = initialState({ duration: PODCAST.duration, elapsed: PODCAST.elapsed })

describe('usePlayer — initial state', () => {
  it('opens the episode mid-way, paused, at 1×', () => {
    const { result } = renderHook(() =>
      usePlayer({ duration: PODCAST.duration, elapsed: PODCAST.elapsed }),
    )

    expect(result.current.playing).toBe(false)
    expect(result.current.elapsed).toBe(1122)
    expect(result.current.duration).toBe(2538)
    expect(result.current.now).toBe(1122)
    expect(result.current.percent).toBeCloseTo(44.208, 3)
    expect(result.current.rateLabel).toBe('1×')
    expect(result.current.valueText).toBe('18:42 of 42:18')
    expect(result.current.elapsedLabel).toBe('18:42')
    expect(result.current.remainingLabel).toBe('-23:36')
  })

  it('opens the album at zero on track one', () => {
    const { result } = renderHook(() => usePlayer(albumOptions))

    expect(result.current.currentIndex).toBe(0)
    expect(result.current.elapsed).toBe(0)
    expect(result.current.duration).toBe(214)
    expect(result.current.percent).toBe(0)
    expect(result.current.valueText).toBe('0:00 of 3:34')
    expect(result.current.remainingLabel).toBe('-3:34')
  })
})

describe('usePlayer — the clock', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('advances a quarter second per tick while playing and holds when paused', () => {
    const { result } = renderHook(() =>
      usePlayer({ duration: PODCAST.duration, elapsed: PODCAST.elapsed }),
    )

    act(() => result.current.toggle())
    expect(result.current.playing).toBe(true)
    expect(vi.getTimerCount()).toBe(1)

    act(() => {
      vi.advanceTimersByTime(1000)
    })
    expect(result.current.elapsed).toBeCloseTo(1123, 5)
    expect(result.current.now).toBe(1123)
    expect(result.current.valueText).toBe('18:43 of 42:18')

    act(() => result.current.toggle())
    expect(vi.getTimerCount()).toBe(0)
    act(() => {
      vi.advanceTimersByTime(2000)
    })
    expect(result.current.elapsed).toBeCloseTo(1123, 5)
  })

  it('doubles the simulated clock at 2× without shortening the interval', () => {
    const { result } = renderHook(() => usePlayer(albumOptions))

    act(() => result.current.cycleRate())
    act(() => result.current.cycleRate())
    expect(result.current.rateLabel).toBe('2×')

    act(() => result.current.toggle())
    act(() => {
      vi.advanceTimersByTime(1000)
    })
    expect(result.current.elapsed).toBeCloseTo(2, 5)
    expect(result.current.now).toBe(2)
  })

  it('clears its interval on unmount', () => {
    const { result, unmount } = renderHook(() => usePlayer(albumOptions))

    act(() => result.current.toggle())
    expect(vi.getTimerCount()).toBe(1)

    unmount()
    expect(vi.getTimerCount()).toBe(0)
  })
})

describe('usePlayer — controls', () => {
  it('cycles speed 1× → 1.5× → 2× → 1× with the multiplication sign', () => {
    const { result } = renderHook(() => usePlayer(podcastOptions()))

    act(() => result.current.cycleRate())
    expect(result.current.rateLabel).toBe('1.5×')
    act(() => result.current.cycleRate())
    expect(result.current.rateLabel).toBe('2×')
    act(() => result.current.cycleRate())
    expect(result.current.rateLabel).toBe('1×')
  })

  it('skips forward and back without pausing, clamped to the episode', () => {
    const { result } = renderHook(() => usePlayer(podcastOptions()))

    act(() => result.current.skip(30))
    expect(result.current.now).toBe(1152)
    expect(result.current.valueText).toBe('19:12 of 42:18')
    expect(result.current.playing).toBe(false)

    act(() => result.current.skip(-2000))
    expect(result.current.now).toBe(0)

    act(() => result.current.skip(4000))
    expect(result.current.now).toBe(2538)
    expect(result.current.remainingLabel).toBe('-0:00')
  })

  it('restarts a finished card on play', () => {
    const { result } = renderHook(() => usePlayer(podcastOptions()))

    act(() => result.current.skip(4000))
    expect(result.current.now).toBe(2538)

    act(() => result.current.toggle())
    expect(result.current.playing).toBe(true)
    expect(result.current.now).toBe(0)
  })

  it('selects a track, adopting its length and starting at zero', () => {
    const { result } = renderHook(() => usePlayer(albumOptions))

    act(() => result.current.selectTrack(2))
    expect(result.current.currentIndex).toBe(2)
    expect(result.current.duration).toBe(198)
    expect(result.current.elapsed).toBe(0)
    expect(result.current.playing).toBe(true)
    expect(result.current.valueText).toBe('0:00 of 3:18')
  })

  it('pauses when the playing track is selected again, keeping its clock', () => {
    const { result } = renderHook(() => usePlayer(albumOptions))

    act(() => result.current.selectTrack(0))
    expect(result.current.playing).toBe(true)

    act(() => result.current.selectTrack(0))
    expect(result.current.playing).toBe(false)
    expect(result.current.currentIndex).toBe(0)
  })

  it('resumes a paused, unfinished track from where it stopped', () => {
    const { result } = renderHook(() => usePlayer(albumOptions))

    act(() => result.current.selectTrack(0))
    act(() => result.current.selectTrack(0))
    act(() => result.current.skip(10))
    expect(result.current.now).toBe(10)

    act(() => result.current.selectTrack(0))
    expect(result.current.playing).toBe(true)
    expect(result.current.now).toBe(10)
  })
})

describe('reduce — the state machine', () => {
  it('pauses without moving the clock', () => {
    const playing = { ...podcast, playing: true }
    expect(reduce(playing, { type: 'toggle' })).toEqual({ ...playing, playing: false })
  })

  it('plays from the mid-episode offset', () => {
    expect(reduce(podcast, { type: 'toggle' })).toEqual({
      ...podcast,
      playing: true,
      elapsed: 1122,
    })
  })

  it('restarts from zero when the clock is already at the end', () => {
    const finished = { ...podcast, elapsed: 2538 }
    expect(reduce(finished, { type: 'toggle' })).toEqual({
      ...finished,
      playing: true,
      elapsed: 0,
    })
  })

  it('advances to the next track when a tick passes the current one', () => {
    const nearEnd = { ...podcast, playing: true, currentIndex: 3, duration: 276, elapsed: 275.9 }
    const next = reduce(nearEnd, { type: 'tick' }, ALBUM.tracks)

    expect(next.currentIndex).toBe(4)
    expect(next.duration).toBe(203)
    expect(next.elapsed).toBe(0)
    expect(next.playing).toBe(true)
  })

  it('clamps and pauses at the end of the last track', () => {
    const lastTrack = { ...podcast, playing: true, currentIndex: 4, duration: 203, elapsed: 202.9 }
    const next = reduce(lastTrack, { type: 'tick' }, ALBUM.tracks)

    expect(next.elapsed).toBe(203)
    expect(next.playing).toBe(false)
    expect(next.currentIndex).toBe(4)
  })

  it('clamps and pauses a track-less player at the end', () => {
    const nearEnd = { ...podcast, playing: true, elapsed: 2537.9 }
    expect(reduce(nearEnd, { type: 'tick' })).toEqual({
      ...nearEnd,
      elapsed: 2538,
      playing: false,
    })
  })

  it('keeps ticking below the duration', () => {
    const playing = { ...podcast, playing: true, elapsed: 10 }
    expect(reduce(playing, { type: 'tick' })).toEqual({ ...playing, elapsed: 10.25 })
  })

  it('is a pure function of its arguments', () => {
    const snapshot = { ...podcast }
    reduce(podcast, { type: 'skip', by: 30 })
    reduce(podcast, { type: 'cycleRate' })
    expect(podcast).toEqual(snapshot)
  })
})

function podcastOptions() {
  return { duration: PODCAST.duration, elapsed: PODCAST.elapsed }
}
