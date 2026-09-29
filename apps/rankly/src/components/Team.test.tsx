import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders section heading', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { name: /About Our Creative Team/i })).toBeInTheDocument()
  })

  it('renders all four team members', () => {
    render(<Team />)
    expect(screen.getByText('Ethel Davis')).toBeInTheDocument()
    expect(screen.getByText('Rodney Cooper')).toBeInTheDocument()
    expect(screen.getByText('Dora Walker')).toBeInTheDocument()
    expect(screen.getByText('Lena Keller')).toBeInTheDocument()
  })

  it('renders roles', () => {
    render(<Team />)
    expect(screen.getByText('Managing Director (Sales)')).toBeInTheDocument()
    expect(screen.getByText('Creative Art Director')).toBeInTheDocument()
    expect(screen.getByText('Senior Core Developer')).toBeInTheDocument()
    expect(screen.getByText('Creative Content Developer')).toBeInTheDocument()
  })
})
