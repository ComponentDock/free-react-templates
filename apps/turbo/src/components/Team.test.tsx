import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the team heading', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { name: /our team/i })).toBeInTheDocument()
  })

  it('renders all four team members', () => {
    render(<Team />)
    expect(screen.getByText('Kaiara Spencer')).toBeInTheDocument()
    expect(screen.getByText('Dave Simpson')).toBeInTheDocument()
    expect(screen.getByText('Ben Thompson')).toBeInTheDocument()
    expect(screen.getByText('Kyla Stewart')).toBeInTheDocument()
  })

  it('renders team member roles', () => {
    render(<Team />)
    const roles = screen.getAllByText('Product Manager')
    expect(roles).toHaveLength(4)
  })

  it('renders team member images', () => {
    render(<Team />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(4)
  })
})
