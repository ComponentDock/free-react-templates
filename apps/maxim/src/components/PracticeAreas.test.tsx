import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PracticeAreas } from './PracticeAreas'

describe('PracticeAreas', () => {
  it('renders the section heading', () => {
    render(<PracticeAreas />)
    expect(screen.getAllByText('Practice Areas').length).toBeGreaterThanOrEqual(1)
  })

  it('renders all 10 tab buttons', () => {
    render(<PracticeAreas />)
    expect(screen.getByRole('tab', { name: /Family Law/ })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /Business Law/ })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /Insurance Law/ })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /Criminal Law/ })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /Employment Law/ })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /Fire Accident/ })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /Financial Law/ })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /Drug Offenses/ })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /Sexual Offenses/ })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /Property Law/ })).toBeInTheDocument()
  })

  it('defaults to Family Law tab', () => {
    render(<PracticeAreas />)
    const familyTab = screen.getByRole('tab', { name: /Family Law/ })
    expect(familyTab).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByText('Family Law', { selector: 'h3' })).toBeInTheDocument()
  })

  it('switches tabs on click', async () => {
    const user = userEvent.setup()
    render(<PracticeAreas />)
    await user.click(screen.getByRole('tab', { name: /Criminal Law/ }))
    expect(screen.getByRole('tab', { name: /Criminal Law/ })).toHaveAttribute(
      'aria-selected',
      'true',
    )
    expect(screen.getByText('Criminal Law', { selector: 'h3' })).toBeInTheDocument()
  })

  it('renders Learn More button in the active panel', () => {
    render(<PracticeAreas />)
    expect(screen.getByRole('link', { name: 'Learn More' })).toBeInTheDocument()
  })
})
