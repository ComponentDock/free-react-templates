import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('shows the section heading and three pricing cards', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { name: /Our Pricing/i })).toBeInTheDocument()
    expect(screen.getByText('Personal Driving')).toBeInTheDocument()
    expect(screen.getByText('Power Booster')).toBeInTheDocument()
    expect(screen.getByText('Freight Driving')).toBeInTheDocument()
  })

  it('renders each card with a price, features, and a Get started button', () => {
    render(<Pricing />)
    const cards = screen.getAllByRole('link', { name: /Get started/i })
    expect(cards).toHaveLength(3)

    const personal = screen.getByText('Personal Driving').closest('article') as HTMLElement
    expect(within(personal).getByText('$199')).toBeInTheDocument()
    expect(within(personal).getByText('Full course theory')).toBeInTheDocument()
    expect(within(personal).getByText('20% off')).toBeInTheDocument()
  })
})
