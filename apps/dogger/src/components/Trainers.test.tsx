import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Trainers } from './Trainers'

describe('Trainers', () => {
  it('shows the heading and the three trainer cards', () => {
    render(<Trainers />)

    expect(screen.getByRole('heading', { name: 'Our Trainers' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Jessica White' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Valerie Elash' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Alicia Jones' })).toBeInTheDocument()
  })

  it('renders a photo for every trainer', () => {
    const { container } = render(<Trainers />)

    expect(container.querySelectorAll('img')).toHaveLength(3)
  })
})
