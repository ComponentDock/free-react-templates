import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Trainers } from './Trainers'

describe('Trainers', () => {
  it('renders the section heading', () => {
    render(<Trainers />)
    expect(screen.getByRole('heading', { name: 'Expert Trainers' })).toBeInTheDocument()
  })

  it('shows all three trainers with names and roles', () => {
    render(<Trainers />)
    expect(screen.getByRole('heading', { name: 'Mellisa Howard' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Mike Richardson' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Charles White' })).toBeInTheDocument()
    const roles = screen.getAllByText('Gym Trainer')
    expect(roles).toHaveLength(3)
  })
})
