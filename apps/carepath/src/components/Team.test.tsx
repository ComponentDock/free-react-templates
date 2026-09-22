import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the team heading', () => {
    render(<Team />)

    expect(
      screen.getByRole('heading', { level: 2, name: /carepath experience doctors/i }),
    ).toBeInTheDocument()
  })

  it('renders three doctor cards', () => {
    render(<Team />)

    expect(screen.getByRole('heading', { level: 3, name: /dr adam brain/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: /dr sarah chen/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: /dr michael reed/i })).toBeInTheDocument()
  })

  it('renders phone numbers for each doctor', () => {
    render(<Team />)

    const phoneLinks = screen.getAllByRole('link', { name: /\+7 235 365 2365/i })
    expect(phoneLinks).toHaveLength(3)
  })

  it('renders social icons for each doctor', () => {
    render(<Team />)

    const facebookLinks = screen.getAllByRole('link', { name: /facebook/i })
    expect(facebookLinks.length).toBeGreaterThanOrEqual(3)
  })
})
