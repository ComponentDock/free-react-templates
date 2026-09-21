import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the section heading', () => {
    render(<Team />)
    expect(screen.getByText('Top Designers')).toBeInTheDocument()
  })

  it('renders 3 team member cards', () => {
    render(<Team />)
    const names = screen.getAllByText('Jacob Gomez')
    expect(names.length).toBe(3)
  })

  it('renders social icons for each member', () => {
    render(<Team />)
    const socialLinks = screen.getAllByRole('link', {
      name: /facebook|twitter|instagram|pinterest/i,
    })
    expect(socialLinks.length).toBeGreaterThanOrEqual(12)
  })
})
