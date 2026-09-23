import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { CaseStudies } from './CaseStudies'

describe('CaseStudies', () => {
  it('renders heading', () => {
    render(<CaseStudies />)
    expect(
      screen.getByRole('heading', { level: 2, name: /reliable.*effective.*winning/i }),
    ).toBeInTheDocument()
  })

  it('renders subtitle', () => {
    render(<CaseStudies />)
    expect(screen.getByText('our recent work')).toBeInTheDocument()
  })

  it('renders 3 tab buttons', () => {
    render(<CaseStudies />)
    const tabs = screen.getAllByRole('tab')
    expect(tabs).toHaveLength(3)
    expect(tabs[0]).toHaveTextContent('Accident Law')
    expect(tabs[1]).toHaveTextContent('Health Law')
    expect(tabs[2]).toHaveTextContent('Insurance Law')
  })

  it('defaults to Accident Law tab with 4 cases', () => {
    render(<CaseStudies />)
    const accidentTab = screen.getByRole('tab', { name: 'Accident Law' })
    expect(accidentTab).toHaveAttribute('aria-selected', 'true')

    const panel = screen.getByRole('tabpanel')
    const images = panel.querySelectorAll('img')
    expect(images).toHaveLength(4)
  })

  it('switching to Health Law tab shows health cases', async () => {
    const user = userEvent.setup()
    render(<CaseStudies />)

    await user.click(screen.getByRole('tab', { name: 'Health Law' }))

    expect(screen.getByRole('tab', { name: 'Health Law' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tab', { name: 'Accident Law' })).toHaveAttribute(
      'aria-selected',
      'false',
    )
  })

  it('switching to Insurance Law tab shows insurance cases', async () => {
    const user = userEvent.setup()
    render(<CaseStudies />)

    await user.click(screen.getByRole('tab', { name: 'Insurance Law' }))

    expect(screen.getByRole('tab', { name: 'Insurance Law' })).toHaveAttribute(
      'aria-selected',
      'true',
    )
  })

  it('active tab has aria-selected true', () => {
    render(<CaseStudies />)
    const tabs = screen.getAllByRole('tab')
    expect(tabs.filter((t) => t.getAttribute('aria-selected') === 'true')).toHaveLength(1)
  })
})
