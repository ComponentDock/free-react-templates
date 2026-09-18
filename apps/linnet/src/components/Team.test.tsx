import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders all 4 team members', () => {
    render(<Team />)
    expect(screen.getByText('Roberto Peo')).toBeInTheDocument()
    expect(screen.getByText('Jane Doe')).toBeInTheDocument()
    expect(screen.getByText('Jakia Khan')).toBeInTheDocument()
    expect(screen.getByText('Jack Kalis')).toBeInTheDocument()
  })
})
