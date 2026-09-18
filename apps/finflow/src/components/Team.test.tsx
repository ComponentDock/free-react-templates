import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the team heading and member names', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { name: /Meet Team/i })).toBeInTheDocument()
    expect(screen.getByText('Kaiara Spencer')).toBeInTheDocument()
    expect(screen.getByText('Dave Simpson')).toBeInTheDocument()
    expect(screen.getByText('Ben Thompson')).toBeInTheDocument()
  })

  it('displays team member roles', () => {
    render(<Team />)
    expect(screen.getByText('Accountant')).toBeInTheDocument()
    expect(screen.getAllByText('Bank Teller')).toHaveLength(2)
  })
})
