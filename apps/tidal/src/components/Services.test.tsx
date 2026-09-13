import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: "It's time to start your adventure",
      }),
    ).toBeInTheDocument()
  })

  it('renders all four service cards', () => {
    render(<Services />)

    const titles = ['Activities', 'Travel Arrangements', 'Private Guide', 'Location Manager']
    for (const title of titles) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()
    expect(screen.getByText(/Ut enim ad minim veniam/)).toBeInTheDocument()
  })
})
