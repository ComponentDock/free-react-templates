import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the Expert Trainers heading', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { level: 2, name: /expert trainers/i })).toBeInTheDocument()
  })

  it('renders all 3 trainer cards', () => {
    render(<Team />)
    expect(screen.getByText('Jessica Mino')).toBeInTheDocument()
    expect(screen.getByText('Amit Khan')).toBeInTheDocument()
    expect(screen.getByText('Paulo Rolac')).toBeInTheDocument()
  })

  it('renders trainer roles', () => {
    render(<Team />)
    expect(screen.getByText('Fitness Instructor')).toBeInTheDocument()
    expect(screen.getByText('Strength Coach')).toBeInTheDocument()
    expect(screen.getByText('Yoga Specialist')).toBeInTheDocument()
  })
})
