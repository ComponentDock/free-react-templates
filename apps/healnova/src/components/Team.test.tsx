import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the team heading and doctor cards', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { name: /Our Dedicated Doctors/i })).toBeInTheDocument()
    expect(screen.getByText('Dr. Jade Guzman')).toBeInTheDocument()
    expect(screen.getByText('Dr. Hannah Ford')).toBeInTheDocument()
    expect(screen.getByText('Dr. James Wilson')).toBeInTheDocument()
  })

  it('shows each doctor specialty', () => {
    render(<Team />)
    expect(screen.getByText('General Surgeon')).toBeInTheDocument()
    expect(screen.getByText('Cardiologist')).toBeInTheDocument()
    expect(screen.getByText('Neurologist')).toBeInTheDocument()
  })
})
