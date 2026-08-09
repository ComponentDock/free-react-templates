import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WhyChooseUs } from './WhyChooseUs'

describe('WhyChooseUs', () => {
  it('renders the heading and all four reason cards', () => {
    render(<WhyChooseUs />)
    expect(screen.getByRole('heading', { name: /Why Choose Us/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Expert Mechanics' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Convenient Place' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Modern Equipments' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Fast Service Delivery' })).toBeInTheDocument()
  })
})
