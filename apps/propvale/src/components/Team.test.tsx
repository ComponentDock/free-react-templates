import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the section heading and all 4 agent cards', () => {
    render(<Team />)

    expect(screen.getByRole('heading', { level: 2, name: 'Our Agents' })).toBeInTheDocument()

    expect(screen.getByText('David Wilson')).toBeInTheDocument()
    expect(screen.getByText('Jessica Brown')).toBeInTheDocument()
    expect(screen.getByText('Robert Taylor')).toBeInTheDocument()
    expect(screen.getByText('Amanda Lee')).toBeInTheDocument()

    expect(screen.getByText('Senior Agent')).toBeInTheDocument()
    expect(screen.getByText('Property Consultant')).toBeInTheDocument()
    expect(screen.getByText('Investment Specialist')).toBeInTheDocument()
    expect(screen.getByText('Rental Manager')).toBeInTheDocument()

    expect(screen.getAllByRole('link', { name: /on Facebook/ }).length).toBe(4)
    expect(screen.getAllByRole('link', { name: /on LinkedIn/ }).length).toBe(4)
    expect(screen.getAllByRole('link', { name: /on Twitter/ }).length).toBe(4)
  })
})
