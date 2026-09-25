import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { References } from './References'

describe('References', () => {
  it('renders the section heading', () => {
    render(<References />)
    expect(screen.getByText('References')).toBeInTheDocument()
  })

  it('renders 3 reference cards', () => {
    render(<References />)
    const names = screen.getAllByText('Robert G. Smith')
    expect(names).toHaveLength(3)
  })

  it('renders role for each reference', () => {
    render(<References />)
    const roles = screen.getAllByText('Manager, Company')
    expect(roles).toHaveLength(3)
  })
})
