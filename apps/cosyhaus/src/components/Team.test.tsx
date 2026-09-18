import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders three team members', () => {
    render(<Team />)
    expect(screen.getByText('Jhon Sansa')).toBeInTheDocument()
    expect(screen.getByText('Anna Williams')).toBeInTheDocument()
    expect(screen.getByText('Mark Rivera')).toBeInTheDocument()
  })

  it('shows Creative Director role for each member', () => {
    render(<Team />)
    const roles = screen.getAllByText('Creative Director', { selector: 'span.text-sm.text-mist' })
    expect(roles.length).toBe(3)
  })
})
