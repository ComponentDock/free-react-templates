import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SpecialMenu } from './SpecialMenu'

describe('SpecialMenu', () => {
  it('renders heading', () => {
    render(<SpecialMenu />)
    expect(screen.getByRole('heading', { level: 2, name: 'Special Menu' })).toBeInTheDocument()
  })

  it('renders dish cards with prices and names', () => {
    render(<SpecialMenu />)

    expect(screen.getByText('$11.50')).toBeInTheDocument()
    expect(screen.getByText('Organic tomato salad, gorgonzola cheese, capers')).toBeInTheDocument()

    const twelveDollars = screen.getAllByText('$12.00')
    expect(twelveDollars.length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Baked broccoli')).toBeInTheDocument()
    expect(screen.getByText('$11.00')).toBeInTheDocument()
    expect(screen.getByText('Spicy meatballs')).toBeInTheDocument()
    expect(screen.getByText('Eggplant parmigiana')).toBeInTheDocument()
    expect(screen.getByText('$14.50')).toBeInTheDocument()
    expect(screen.getByText('Grilled salmon fillet')).toBeInTheDocument()
    expect(screen.getByText('$13.00')).toBeInTheDocument()
    expect(screen.getByText('Truffle mushroom risotto')).toBeInTheDocument()
  })

  it('renders all six dish cards as links', () => {
    const { container } = render(<SpecialMenu />)
    const links = container.querySelectorAll('a[href="#"]')
    expect(links).toHaveLength(6)
  })
})
