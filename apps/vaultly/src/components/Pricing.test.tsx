import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the heading and three plans with prices', () => {
    render(<Pricing />)

    expect(screen.getByRole('heading', { name: 'Simple, Transparent Pricing' })).toBeInTheDocument()

    for (const plan of ['Free', 'Plus', 'Premium']) {
      expect(screen.getByRole('heading', { name: plan })).toBeInTheDocument()
    }
    expect(screen.getByText('$0')).toBeInTheDocument()
    expect(screen.getByText('$12')).toBeInTheDocument()
    expect(screen.getByText('$29')).toBeInTheDocument()
  })

  it('highlights the Plus plan as the popular choice', () => {
    render(<Pricing />)

    const plusCard = screen.getByText('Plus').closest('article')
    expect(plusCard).not.toBeNull()
    expect(screen.getByText('Most Popular')).toBeInTheDocument()
  })
})
