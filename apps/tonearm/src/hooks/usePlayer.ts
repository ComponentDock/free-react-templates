import { useCallback, useEffect, useReducer } from 'react'
import type { Track } from '../data'
import { clampSeconds, formatTime } from '../format'

/** The three playback speeds the speed control cycles through. */
export const RATES: readonly number[] = [1, 1.5, 2]

/** One simulated playback tick. A tick adds a quarter second × rate. */
export const TICK_MS = 250

export interface PlayerOptions {
  /** Seconds; the album takes this from its first track. */
  readonly duration: number
  readonly elapsed: number
  /** Present only for a player with a track list. */
  readonly tracks?: readonly Track[]
}

interface PlayerState {
  playing: boolean
  elapsed: number
  duration: number
  rate: number
  currentIndex: number
}

type PlayerAction =
  | { type: 'toggle' }
  | { type: 'skip'; by: number }
  | { type: 'cycleRate' }
  | { type: 'tick' }
  | { type: 'selectTrack'; index: number }

export function initialState({ duration, elapsed }: PlayerOptions): PlayerState {
  return { playing: false, elapsed, duration, rate: 1, currentIndex: 0 }
}

/**
 * The whole behaviour of the pair, as one pure function. Two things are load
 * bearing: a *finished* clock restarts on play rather than sticking at the end,
 * and the tick is the only place that advances — so a rate change multiplies
 * the simulated clock, not the interval.
 */
export function reduce(
  state: PlayerState,
  action: PlayerAction,
  tracks: readonly Track[] = [],
): PlayerState {
  switch (action.type) {
    case 'toggle':
      return {
        ...state,
        playing: !state.playing,
        elapsed:
          !state.playing && state.elapsed >= state.duration ? 0 : state.elapsed,
      }
    case 'skip':
      return {
        ...state,
        elapsed: clampSeconds(state.elapsed + action.by, 0, state.duration),
      }
    case 'cycleRate':
      return {
        ...state,
        rate: RATES[(RATES.indexOf(state.rate) + 1) % RATES.length]!,
      }
    case 'selectTrack': {
      const track = tracks[action.index]!
      if (action.index === state.currentIndex && state.playing) {
        return { ...state, playing: false }
      }
      const restart =
        action.index !== state.currentIndex || state.elapsed >= state.duration
      return {
        ...state,
        playing: true,
        currentIndex: action.index,
        duration: track.duration,
        elapsed: restart ? 0 : state.elapsed,
      }
    }
    case 'tick': {
      const elapsed = state.elapsed + 0.25 * state.rate
      if (elapsed < state.duration) return { ...state, elapsed }
      const next = tracks[state.currentIndex + 1]
      if (next) {
        return {
          ...state,
          currentIndex: state.currentIndex + 1,
          duration: next.duration,
          elapsed: 0,
        }
      }
      return { ...state, elapsed: state.duration, playing: false }
    }
  }
}

/**
 * A simulated player: no media element, no request. The interval only exists
 * while playing, so a paused card holds a frozen clock and an unmount clears it.
 */
export function usePlayer(options: PlayerOptions) {
  const { tracks } = options
  const [state, dispatch] = useReducer(
    (current: PlayerState, action: PlayerAction) => reduce(current, action, tracks),
    options,
    initialState,
  )

  useEffect(() => {
    if (!state.playing) return
    const timer = setInterval(() => dispatch({ type: 'tick' }), TICK_MS)
    return () => clearInterval(timer)
  }, [state.playing])

  const toggle = useCallback(() => dispatch({ type: 'toggle' }), [])
  const skip = useCallback((by: number) => dispatch({ type: 'skip', by }), [])
  const cycleRate = useCallback(() => dispatch({ type: 'cycleRate' }), [])
  const selectTrack = useCallback(
    (index: number) => dispatch({ type: 'selectTrack', index }),
    [],
  )

  return {
    ...state,
    /** `1×`, `1.5×`, `2×` — U+00D7, as the reference prints it. */
    rateLabel: `${state.rate}×`,
    percent: (state.elapsed / state.duration) * 100,
    now: Math.round(state.elapsed),
    valueText: `${formatTime(state.elapsed)} of ${formatTime(state.duration)}`,
    elapsedLabel: formatTime(state.elapsed),
    remainingLabel: `-${formatTime(state.duration - state.elapsed)}`,
    toggle,
    skip,
    cycleRate,
    selectTrack,
  }
}

export type Player = ReturnType<typeof usePlayer>
