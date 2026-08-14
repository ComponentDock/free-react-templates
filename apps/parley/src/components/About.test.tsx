import { act, render, screen, within } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import { About } from './About'
import { about } from '../data'

afterEach(() => {
  vi.useRealTimers()
})

describe('About', () => {
  it('renders the subheading, heading, lead paragraph, tabs and photo', () => {
    render(<About />)
    expect(screen.getByText(about.subheading)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: about.heading })).toBeInTheDocument()
    expect(screen.getByText(about.lead)).toBeInTheDocument()
    expect(screen.getAllByRole('tab')).toHaveLength(3)
    const mission = screen.getByRole('tab', { name: 'Our Mission' })
    expect(mission).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tabpanel')).toHaveTextContent(about.tabs[0]!.text)
    expect(screen.getByRole('img', { name: 'Parley consulting team' })).toHaveAttribute(
      'src',
      expect.stringContaining('parley-about'),
    )
  })

  it('switches the tabpanel content when another tab is activated', async () => {
    const user = userEvent.setup()
    render(<About />)
    await user.click(screen.getByRole('tab', { name: 'Our Vision' }))
    const panel = screen.getByRole('tabpanel')
    expect(panel).toHaveTextContent(about.tabs[1]!.text)
    expect(screen.getByRole('tab', { name: 'Our Vision' })).toHaveAttribute('aria-selected', 'true')
  })

  it('counts the three counters up to their targets', () => {
    vi.useFakeTimers()
    render(<About />)
    const section = screen.getByRole('region', { name: 'About' })
    act(() => {
      vi.advanceTimersByTime(2000)
    })
    for (const counter of about.counters) {
      expect(within(section).getByText(String(counter.value))).toBeInTheDocument()
      expect(within(section).getByText(counter.label)).toBeInTheDocument()
    }
  })
})
