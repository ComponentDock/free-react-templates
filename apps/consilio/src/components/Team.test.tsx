import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('shows the eyebrow and heading', () => {
    render(<Team />)

    expect(screen.getByText('Our Professional Members')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Our Team Members' })).toBeInTheDocument()
  })

  it('renders three team cards with photo, name, and role', () => {
    render(<Team />)

    expect(screen.getByRole('heading', { level: 3, name: 'Ethan Welch' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Olivia Hart' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Marcus Reid' })).toBeInTheDocument()

    expect(screen.getByText('UX Designer')).toBeInTheDocument()
    expect(screen.getByText('Strategy Lead')).toBeInTheDocument()
    expect(screen.getByText('Financial Analyst')).toBeInTheDocument()

    expect(screen.getByRole('img', { name: 'Ethan Welch' })).toHaveAttribute(
      'src',
      expect.stringContaining('consilio-12'),
    )
  })
})
