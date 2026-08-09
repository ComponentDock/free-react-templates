import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('shows the section heading and four expert cards', () => {
    render(<Team />)

    expect(screen.getByRole('heading', { name: 'Our Beauty Experts' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Mellisa Smith' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Marie Mush' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Ana Jacobson' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Ivan Dorchsner' })).toBeInTheDocument()
  })

  it('shows a role for each expert', () => {
    render(<Team />)

    expect(screen.getByText('Stylist')).toBeInTheDocument()
    expect(screen.getByText('Fashionist')).toBeInTheDocument()
    expect(screen.getByText('Makeup Stylist')).toBeInTheDocument()
    expect(screen.getByText('Nail Specialist')).toBeInTheDocument()
  })

  it('shows a portrait for each expert', () => {
    render(<Team />)

    expect(screen.getAllByRole('img', { name: /Portrait of/ })).toHaveLength(4)
  })
})
