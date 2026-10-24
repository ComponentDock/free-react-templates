import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders heading', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Consultants')
  })

  it('renders consultant cards', () => {
    render(<Team />)
    const headings = screen.getAllByRole('heading', { level: 4 })
    expect(headings.length).toBe(4)
    headings.forEach((h) => {
      expect(h.textContent).toBe('Andy Florence')
    })
  })

  it('renders consultant roles', () => {
    render(<Team />)
    expect(screen.getByText('Chief Surgeon')).toBeInTheDocument()
    expect(screen.getByText('Cardiologist')).toBeInTheDocument()
    expect(screen.getByText('Neurologist')).toBeInTheDocument()
    expect(screen.getByText('Pediatrician')).toBeInTheDocument()
  })
})
