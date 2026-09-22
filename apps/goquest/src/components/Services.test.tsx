import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders all four service items', () => {
    render(<Services />)
    expect(screen.getByText('8000+ Our Local Guides')).toBeInTheDocument()
    expect(screen.getByText('100% Trusted Tour Agency')).toBeInTheDocument()
    expect(screen.getByText('28+ Years of Travel Experience')).toBeInTheDocument()
    expect(screen.getByText('98% Our Travelers are Happy')).toBeInTheDocument()
  })

  it('renders service cards with border styling', () => {
    render(<Services />)
    const cards = screen.getAllByText(
      /Our Local Guides|Trusted Tour|Years of Travel|Travelers are Happy/,
    )
    expect(cards.length).toBe(4)
  })
})
