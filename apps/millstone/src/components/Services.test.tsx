import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders 3 service cards', () => {
    render(<Services />)
    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(3)
  })

  it('renders service headings', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /Automotive Manufacturing/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Heavy Industry Market/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Industry Analysis/i })).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    const descriptions = screen.getAllByText(/Lorem ipsum/i)
    expect(descriptions.length).toBeGreaterThanOrEqual(3)
  })

  it('renders arrow links for each card', () => {
    render(<Services />)
    const arrows = screen.getAllByRole('link', { name: /read more/i })
    expect(arrows).toHaveLength(3)
  })
})
