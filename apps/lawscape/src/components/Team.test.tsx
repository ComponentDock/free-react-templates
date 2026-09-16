import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the section heading', () => {
    render(<Team />)
    expect(screen.getByText('Meet Our Attorneys')).toBeInTheDocument()
  })

  it('displays all four attorneys', () => {
    render(<Team />)
    expect(screen.getByText('James Barrel')).toBeInTheDocument()
    expect(screen.getByText('Stephen Red')).toBeInTheDocument()
    expect(screen.getByText('Matmex Sogan')).toBeInTheDocument()
    expect(screen.getByText('Richar Male')).toBeInTheDocument()
  })

  it('shows specialization for each attorney', () => {
    render(<Team />)
    const specs = screen.getAllByText('Personal Lawyer')
    expect(specs).toHaveLength(4)
  })

  it('has social links for each attorney', () => {
    render(<Team />)
    expect(screen.getByLabelText('James Barrel on Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('James Barrel on Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Email James Barrel')).toBeInTheDocument()
  })
})
