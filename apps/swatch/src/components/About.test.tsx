import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent, within } from '@testing-library/react'
import { About } from './About'
import { skills, experience } from '../data'

describe('About', () => {
  it('renders the portrait and the default About Me tab panel', () => {
    render(<About />)

    expect(screen.getByAltText('Portrait of Kendall Marsh')).toBeInTheDocument()

    const tabs = screen.getAllByRole('tab')
    expect(tabs.map((tab) => tab.textContent)).toEqual(['About Me', 'Skills', 'Experience'])
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true')

    const panel = screen.getByRole('tabpanel')
    expect(within(panel).getByRole('heading', { name: 'My Story' })).toBeInTheDocument()
    expect(
      within(panel).getByText(/I Do Web Design & Development since I was 18 Years Old/i),
    ).toBeInTheDocument()
  })

  it('switches to the Skills tab with four blue progress bars', () => {
    render(<About />)

    fireEvent.click(screen.getByRole('tab', { name: 'Skills' }))

    const panel = screen.getByRole('tabpanel')
    expect(within(panel).getByRole('heading', { name: 'Skills' })).toBeInTheDocument()

    for (const skill of skills) {
      const bar = within(panel).getByRole('progressbar', { name: skill.name })
      expect(bar).toHaveAttribute('aria-valuenow', String(skill.percent))
      expect(within(panel).getByText(`${skill.percent}%`)).toBeInTheDocument()
    }
  })

  it('switches to the Experience tab with three timeline entries', () => {
    render(<About />)

    fireEvent.click(screen.getByRole('tab', { name: 'Experience' }))

    const panel = screen.getByRole('tabpanel')
    expect(within(panel).getByRole('heading', { name: 'Experience' })).toBeInTheDocument()

    for (const entry of experience) {
      expect(within(panel).getByRole('heading', { name: entry.role })).toBeInTheDocument()
      expect(within(panel).getByText(new RegExp(entry.years))).toBeInTheDocument()
      expect(within(panel).getByText(new RegExp(entry.company))).toBeInTheDocument()
    }
  })
})
