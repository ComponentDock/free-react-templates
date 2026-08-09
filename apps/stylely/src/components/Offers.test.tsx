import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Offers } from './Offers'

describe('Offers', () => {
  it('shows the section heading', () => {
    render(<Offers />)

    expect(screen.getByRole('heading', { name: 'What We Offer' })).toBeInTheDocument()
  })

  it('renders four offer cards with photographs', () => {
    render(<Offers />)

    expect(screen.getByRole('heading', { name: 'Best Equipment' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Best Price' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Fitness Equipment' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Fitness Training' })).toBeInTheDocument()
    expect(screen.getAllByRole('img')).toHaveLength(4)
  })
})
