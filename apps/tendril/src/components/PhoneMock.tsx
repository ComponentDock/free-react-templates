import type { CSSProperties } from 'react'
import {
  AVATAR,
  DAYS,
  GREETING,
  HABITS,
  RING,
  RING_NOTE,
  STREAK,
  TOAST,
  VISUAL_LABEL,
  WEEK,
  WEEK_DAYS,
} from '../data/site'

/** Today's screen: greeting, the weekday strip, the ring well and five habits. */
function HabitScreen() {
  return (
    <div className="td-screen">
      <div className="td-app-top">
        <span className="td-hello">{GREETING}</span>
        <span className="td-avatar" aria-hidden="true">
          {AVATAR}
        </span>
      </div>

      <div className="td-days">
        {DAYS.map((day) => (
          <span key={day.label} className={day.today ? 'is-today' : undefined}>
            {day.label}
            <b>{day.date}</b>
          </span>
        ))}
      </div>

      <div className="td-ring-wrap">
        <span className="td-ring" style={{ '--p': RING.progress } as CSSProperties}>
          <span>
            <b>{RING.done}</b>
            {RING.total}
          </span>
        </span>
        <span className="td-ring-text">
          <b>{RING_NOTE.strong}</b>
          {RING_NOTE.rest}
        </span>
      </div>

      <ul className="td-habits">
        {HABITS.map((habit) => (
          <li key={habit.label} className={habit.done ? 'is-done' : undefined}>
            <span className="td-box" aria-hidden="true" />
            {habit.label}
          </li>
        ))}
      </ul>
    </div>
  )
}

/** The back phone: a dark summary screen with the streak and a seven-bar week. */
function StatsScreen() {
  return (
    <div className="td-screen td-screen--stats">
      <span className="td-s-label">{STREAK.label}</span>
      <span className="td-streak">{STREAK.value}</span>
      <span className="td-s-sub">{STREAK.sub}</span>
      <div className="td-week" aria-hidden="true">
        {WEEK.map((value, index) => (
          <span key={`bar-${index}`} style={{ '--v': value } as CSSProperties} />
        ))}
      </div>
      <div className="td-week-days" aria-hidden="true">
        {WEEK_DAYS.map((initial, index) => (
          <span key={`${initial}-${index}`}>{initial}</span>
        ))}
      </div>
    </div>
  )
}

/**
 * The whole product shot is CSS: a 440px lime disc anchored to the visual's
 * centre with `translate(-40%, -50%)`, an upright front phone, a back phone
 * rotated 8 degrees behind it and the streak toast over their left edge.
 *
 * Both phones are one `role="img"` with a sentence for a name — the contents
 * are decorative and the same claim is repeated in the copy column.
 */
export function PhoneMock() {
  return (
    <div className="td-visual" role="img" aria-label={VISUAL_LABEL}>
      <div className="td-phone td-phone--back">
        <StatsScreen />
      </div>

      <div className="td-phone td-phone--front">
        <span className="td-notch" aria-hidden="true" />
        <HabitScreen />
      </div>

      <span className="td-toast" aria-hidden="true">
        {TOAST}
      </span>
    </div>
  )
}
