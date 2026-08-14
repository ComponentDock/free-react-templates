import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Programs } from './Programs'
import { PROGRAMS } from '../data'

describe('Programs', () => {
  it('renders the heading and a coral vertical tab strip with eight tabs', () => {
    render(<Programs />)

    expect(screen.getByRole('heading', { level: 2, name: 'Fitness Program' })).toBeInTheDocument()

    const tablist = screen.getByRole('tablist', { name: 'Fitness programs' })
    expect(tablist).toHaveClass('bg-brand')
    const tabs = within(tablist).getAllByRole('tab')
    expect(tabs).toHaveLength(PROGRAMS.length)
    tabs.forEach((tab, i) => {
      expect(tab).toHaveTextContent(PROGRAMS[i]!.label)
      expect(tab).toHaveAttribute('aria-controls', `program-panel-${i}`)
    })
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true')

    const panel = screen.getByRole('tabpanel', { name: PROGRAMS[0]!.label })
    expect(panel).toHaveTextContent(PROGRAMS[0]!.paragraphs[0])
    expect(panel).toHaveTextContent(PROGRAMS[0]!.paragraphs[1])
    expect(within(panel).getByRole('link', { name: 'Learn More' })).toBeInTheDocument()
  })

  it('switches the visible pane when another tab is clicked', async () => {
    const user = userEvent.setup()
    render(<Programs />)

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
      PROGRAMS[2]!.paragraphs[0],
    )
    expect(screen.queryByRole('tabpanel', { name: 'Fitness Program' })).not.toBeInTheDocument()
  })

  it('renders an icon inside every tab', () => {
    render(<Programs />)
    const tablist = screen.getByRole('tablist', { name: 'Fitness programs' })
    within(tablist)
      .getAllByRole('tab')
      .forEach((tab) => {
        expect(tab.querySelector('svg')).not.toBeNull()
      })
  })
})
