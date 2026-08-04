import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the heading and both team members', () => {
    render(<Team />)

    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe('Our Team')
    expect(screen.getByText('Rala Emaia')).toBeInTheDocument()
    expect(screen.getByText('Senior Director')).toBeInTheDocument()
    expect(screen.getByText('jhon Smith')).toBeInTheDocument()
  })
})
