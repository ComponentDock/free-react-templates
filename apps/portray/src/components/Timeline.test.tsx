import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Timeline } from './Timeline'
import { education, experience } from '../data'

describe('Timeline', () => {
  it('renders every row with role, period, organisation link and description', () => {
    render(<Timeline heading="Experience" entries={experience} compact />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Experience')
    const rows = screen.getAllByRole('listitem')
    expect(rows).toHaveLength(4)
    expect(screen.getAllByText('March 2020 — Present')).toHaveLength(4)
    expect(screen.getAllByRole('link', { name: /Northlight Studio/ })[0]).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('draws the hairline on the first row only', () => {
    render(<Timeline heading="Education" entries={education} />)
    const rows = screen.getAllByRole('listitem')
    expect(rows).toHaveLength(2)
    expect(rows[0]!.className).toContain('border-t')
    expect(rows[1]!.className).not.toContain('border-t')
  })

  it('uses section padding for the default block and bottom padding only when compact', () => {
    const { container: spacious } = render(<Timeline heading="Education" entries={education} />)
    expect(spacious.querySelector('section')?.className).toContain('py-[70px]')
    const { container: compact } = render(
      <Timeline id="experience" heading="Experience" entries={experience} compact />,
    )
    const compactSection = compact.querySelector('section')!
    expect(compactSection.id).toBe('experience')
    expect(compactSection.className).toContain('pb-[70px]')
    expect(compactSection.className).not.toContain('py-[70px]')
  })
})
