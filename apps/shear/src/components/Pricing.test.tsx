import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the Services & Pricing heading', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { name: 'Services & Pricing' })).toBeInTheDocument()
  })

  it('renders three pricing cards with priced items', () => {
    render(<Pricing />)
    for (const name of ['Haircut', 'Hair Styling', 'Hair Scalp Care']) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    }

    const haircutCard = screen.getByRole('heading', { name: 'Haircut' }).closest('article')
    expect(haircutCard).not.toBeNull()
    expect(within(haircutCard as HTMLElement).getByText("Men's Cut")).toBeInTheDocument()
    expect(within(haircutCard as HTMLElement).getByText('$29.00')).toBeInTheDocument()
    expect(within(haircutCard as HTMLElement).getByText('$54.00')).toBeInTheDocument()
  })
})
