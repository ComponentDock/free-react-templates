import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('shows core team and advisory board', () => {
    render(<Team />)
    expect(screen.getByText('Core Team')).toBeInTheDocument()
    expect(screen.getByText('Our Team')).toBeInTheDocument()
    expect(screen.getByText('William Delisle')).toBeInTheDocument()
    expect(screen.getByText('Julius Book')).toBeInTheDocument()
    expect(screen.getByText('Jessica Blair')).toBeInTheDocument()
    expect(screen.getByText('Nancy Burns')).toBeInTheDocument()
    expect(screen.getByText('Advisory Team')).toBeInTheDocument()
    expect(screen.getByText('Advisory Board')).toBeInTheDocument()
    expect(screen.getByText('Tricia Morgan')).toBeInTheDocument()
    expect(screen.getByText('Kent Ransom')).toBeInTheDocument()
    expect(screen.getByText('Edward Schultz')).toBeInTheDocument()
    expect(screen.getByText('Betty Cyr')).toBeInTheDocument()
  })

  it('renders social links for team members', () => {
    render(<Team />)
    const linkedinLinks = screen.getAllByLabelText('LinkedIn')
    expect(linkedinLinks.length).toBeGreaterThanOrEqual(1)
    const twitterLinks = screen.getAllByLabelText('Twitter')
    expect(twitterLinks.length).toBeGreaterThanOrEqual(1)
  })
})
