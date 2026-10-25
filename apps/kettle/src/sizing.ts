import { CLIMATES, FIXTURES } from './data'

/**
 * The sizing arithmetic, kept pure so the reference's numbers can be asserted
 * without rendering the band. A tankless unit is sold on flow (gallons per
 * minute at a temperature rise); a tank is sold on volume in the busiest hour.
 * The two questions look similar and are not the same question, which is the
 * whole argument the page makes.
 */

/** Every fixture is sized against a 120 °F delivery target. */
export const TARGET_TEMP = 120

export interface SizingSelection {
  /** `FIXTURES[].value` entries the visitor has checked. */
  fixtures: string[]
  /** `CLIMATES[].value` of the chosen incoming temperature, or `null`. */
  climate: string | null
  /** `PEOPLE[].value` of the chosen household size, or `null` for the default. */
  people: string | null
}

export interface SizingResult {
  /** Tankless answer, e.g. `4.0 gpm`. */
  gpm: string
  /** The rise sentence under the tankless number. */
  rise: string
  /** Tank answer, e.g. `40 gallon`. */
  tank: string
  /** The busiest-hour sentence under the tank number. */
  note: string
  /** The verdict: which of the two answers is actually honest here. */
  verdict: string
}

const NOTHING_CHECKED: SizingResult = {
  gpm: '—',
  rise: 'Pick at least one fixture.',
  tank: '—',
  note: '',
  verdict: 'Choose what might run at once and we will size both options.',
}

/** `≤70 → 40`, `≤85 → 50`, `≤105 → 65`, else `80` gallons. */
export function tankFor(peakHour: number): number {
  if (peakHour <= 70) return 40
  if (peakHour <= 85) return 50
  if (peakHour <= 105) return 65
  return 80
}

/** Three branches, in the reference's order: struggle, either, reasonable fit. */
export function verdictFor(rise: number, gpm: number): string {
  if (rise >= 70 && gpm >= 5) {
    return 'At this flow and this cold an incoming supply, a single tankless unit will struggle. Either a tank, or two tankless units in parallel. Anybody quoting one unit here has not asked about your groundwater.'
  }

  if (gpm <= 3.5) {
    return 'Either works. Tankless suits you if you want endless hot water and have the gas line or electrical capacity for it; a tank is cheaper to fit and simpler to replace.'
  }

  return 'Tankless is a reasonable fit at this flow, provided the gas supply and venting are right. We check both before quoting rather than after.'
}

export function computeSizing(selection: SizingSelection): SizingResult {
  const checked = FIXTURES.filter((fixture) => selection.fixtures.includes(fixture.value))

  if (checked.length === 0) {
    return NOTHING_CHECKED
  }

  const gpm = checked.reduce((total, fixture) => total + fixture.gpm, 0)
  const gallons = checked.reduce((total, fixture) => total + fixture.gallons, 0)
  const climate = CLIMATES.find((option) => option.value === selection.climate)
  const incoming = climate === undefined ? 55 : Number(climate.value)
  const rise = TARGET_TEMP - incoming
  const people = selection.people === null ? 4 : Number(selection.people)
  const peakHour = Math.round(gallons + people * 3)
  const tank = tankFor(peakHour)

  return {
    gpm: `${gpm.toFixed(1)} gpm`,
    rise: `At a ${rise} degree rise, which is what a unit has to deliver in your coldest month.`,
    tank: `${tank} gallon`,
    note: `Covers about ${peakHour} gallons in your busiest hour. Sized on that, not on the tank you have now.`,
    verdict: verdictFor(rise, gpm),
  }
}
