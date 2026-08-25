import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the section heading', () => {
    render(<Team />)
    expect(screen.getByText('Qualified Dentist')).toBeInTheDocument()
  })

  it('renders all four doctors', () => {
    render(<Team />)
    expect(screen.getByText('Dr. Lloyd Wilson')).toBeInTheDocument()
    expect(screen.getByText('Dr. Rachel Parker')).toBeInTheDocument()
    expect(screen.getByText('Dr. Ian Smith')).toBeInTheDocument()
    expect(screen.getByText('Dr. Alicia Henderson')).toBeInTheDocument()
  })

  it('renders social links for each doctor', () => {
    render(<Team />)
    expect(screen.getAllByRole('link', { name: /on Facebook/ })).toHaveLength(4)
  })
})
