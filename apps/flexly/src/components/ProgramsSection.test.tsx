import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ProgramsSection } from './ProgramsSection'
import { PROGRAMS } from '../data'

describe('ProgramsSection', () => {
  it('renders eight program tabs with the first panel active', () => {
    render(<ProgramsSection />)

    const tablist = screen.getByRole('tablist', { name: 'Programs list' })
    const tabs = within(tablist).getAllByRole('tab')
    expect(tabs).toHaveLength(PROGRAMS.length)
    tabs.forEach((tab, i) => {
      expect(tab).toHaveTextContent(PROGRAMS[i]!.label)
      expect(tab).toHaveAttribute('aria-controls', `program-panel-${i}`)
    })
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true')
    expect(tabs[0]).toHaveClass('bg-brand')

    const panel = screen.getByRole('tabpanel', { name: 'Fitness Program' })
    expect(panel).toHaveTextContent(PROGRAMS[0]!.text)
  })

  it('switches the panel when another tab is clicked', async () => {
    const user = userEvent.setup()
    render(<ProgramsSection />)

    await user.click(screen.getByRole('tab', { name: 'Muscle Building' }))

    expect(screen.getByRole('tab', { name: 'Muscle Building' })).toHaveAttribute(
      'aria-selected',
      'true',
    )
    expect(screen.getByRole('tab', { name: 'Fitness Program' })).toHaveAttribute(
      'aria-selected',
      'false',
    )
    expect(screen.getByRole('tabpanel', { name: 'Muscle Building' })).toHaveTextContent(
      PROGRAMS[2]!.text,
    )
    expect(screen.queryByRole('tabpanel', { name: 'Fitness Program' })).not.toBeInTheDocument()
  })
})
