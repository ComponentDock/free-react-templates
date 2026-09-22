import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the team heading and 4 trainer cards', () => {
    render(<Team />)
    expect(
      screen.getByRole('heading', { level: 2, name: /our experienced trainers/i }),
    ).toBeInTheDocument()
    expect(screen.getByText('Ethel Davis')).toBeInTheDocument()
    expect(screen.getByText('Rodney Cooper')).toBeInTheDocument()
    expect(screen.getByText('Dora Walker')).toBeInTheDocument()
    expect(screen.getByText('Lena Keller')).toBeInTheDocument()
  })

  it('displays trainer roles', () => {
    render(<Team />)
    expect(screen.getByText(/managing director/i)).toBeInTheDocument()
    expect(screen.getByText(/creative art director/i)).toBeInTheDocument()
    expect(screen.getByText(/senior core developer/i)).toBeInTheDocument()
    expect(screen.getByText(/creative content developer/i)).toBeInTheDocument()
  })
})
