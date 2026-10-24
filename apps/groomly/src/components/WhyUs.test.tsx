import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WhyUs } from './WhyUs'

describe('WhyUs', () => {
  it('renders the heading and all four feature items with titles', () => {
    render(<WhyUs />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'A Place Where Pets Come First' }),
    ).toBeInTheDocument()

    for (const title of [
      'Certified Staff',
      'Fear-Free Certified',
      'Premium Products',
      'Climate Controlled',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }

    expect(screen.getByText(/nationally certified/)).toBeInTheDocument()
    expect(screen.getByText(/fear-free handling/)).toBeInTheDocument()
    expect(screen.getByText(/pet-safe shampoos/)).toBeInTheDocument()
    expect(screen.getByText(/Temperature-controlled facility/)).toBeInTheDocument()
  })
})
