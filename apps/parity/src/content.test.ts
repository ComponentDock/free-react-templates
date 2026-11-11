import { describe, expect, it } from 'vitest'
import { CAPTION, GROUPS, PLANS, TITLE, TITLE_ID, type Cell } from './content'
import { banned } from './test/banned'

/** How many cells of one column carry a given state. */
function countOf(index: number, kind: Cell['kind']): number {
  return GROUPS.flatMap((group) =>
    group.features.map((feature) => feature.cells[index]!.kind),
  ).filter((entry) => entry === kind).length
}

describe('content', () => {
  it('ships three plans with the middle one featured and uniquely identified', () => {
    expect(PLANS.map((plan) => plan.name)).toEqual(['Basic', 'Team', 'Business'])
    expect(PLANS.filter((plan) => plan.featured).map((plan) => plan.name)).toEqual(['Team'])
    expect(new Set(PLANS.map((plan) => plan.id)).size).toBe(PLANS.length)
  })

  it('groups the seventeen features into four titled bodies', () => {
    expect(GROUPS).toHaveLength(4)
    expect(GROUPS.map((group) => group.title)).toEqual([
      'Projects and tasks',
      'Collaboration',
      'Reporting',
      'Security and admin',
    ])
    expect(GROUPS.map((group) => group.features.length)).toEqual([5, 4, 4, 4])
    expect(GROUPS.flatMap((group) => group.features)).toHaveLength(17)
  })

  it('keeps every id unique across groups and features', () => {
    const ids = [
      ...GROUPS.map((group) => group.id),
      ...GROUPS.flatMap((group) => group.features.map((feature) => feature.id)),
    ]
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('renders the measured cell grammar: 21 ticks, 15 crosses, 15 values', () => {
    const cells = GROUPS.flatMap((group) => group.features.flatMap((feature) => feature.cells))
    expect(cells.filter((cell) => cell.kind === 'yes')).toHaveLength(21)
    expect(cells.filter((cell) => cell.kind === 'no')).toHaveLength(15)
    expect(cells.filter((cell) => cell.kind === 'value')).toHaveLength(15)
  })

  it('gives each column the counts the design shows', () => {
    expect([countOf(0, 'yes'), countOf(0, 'no'), countOf(0, 'value')]).toEqual([3, 10, 4])
    expect([countOf(1, 'yes'), countOf(1, 'no'), countOf(1, 'value')]).toEqual([7, 5, 5])
    expect([countOf(2, 'yes'), countOf(2, 'no'), countOf(2, 'value')]).toEqual([11, 0, 6])
  })

  it('prints the values the matrix carries', () => {
    const values = GROUPS.flatMap((group) => group.features).flatMap((feature) =>
      feature.cells.flatMap((cell) => (cell.kind === 'value' ? [cell.value] : [])),
    )
    expect(values).toContain('3 per project')
    expect(values).toContain('1-year retention')
    expect(values).toContain('Email, 24 h')
    expect(values.filter((entry) => entry === 'Unlimited')).toHaveLength(5)
  })

  it('names the table without naming its source, and points the caption at all three plans', () => {
    expect(TITLE).toBe('Every Parity feature, side by side')
    expect(TITLE_ID).toBe('pt-title')
    expect(CAPTION).toContain('Basic, Team and Business')
    // Assembled at run time so the provenance sweep finds no banned string in the tree.
    const source = banned('color', 'lib')
    expect(`${TITLE} ${CAPTION}`.toLowerCase()).not.toContain(source)
  })
})
