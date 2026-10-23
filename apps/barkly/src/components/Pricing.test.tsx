import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('shows the heading and the three pricing plans', () => {
    render(<Pricing />)

    expect(screen.getByRole('heading', { name: 'Pricing Table' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Basic' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Premium' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Professional' })).toBeInTheDocument()
  })

  it('shows the plan prices and a Buy Now button for each plan', () => {
    render(<Pricing />)

    const articles = screen.getAllByRole('article')
    expect(articles.map((article) => article.textContent)).toEqual(
      expect.arrayContaining([
        expect.stringContaining('$47'),
        expect.stringContaining('$250'),
        expect.stringContaining('$850'),
      ]),
    )
    expect(screen.getAllByRole('link', { name: 'Buy Now' })).toHaveLength(3)
  })

  it('lists the features for each plan', () => {
    render(<Pricing />)

    expect(screen.getAllByText(/Officia quaerat eaque neque/)).toHaveLength(3)
  })
})
