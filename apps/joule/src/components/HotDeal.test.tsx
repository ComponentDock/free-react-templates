import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { HotDeal } from './HotDeal'

describe('HotDeal', () => {
  it('renders headline', () => {
    render(<HotDeal />)
    expect(screen.getByText('Hot Deal This Week')).toBeInTheDocument()
  })

  it('renders countdown timer with all units', () => {
    render(<HotDeal />)
    expect(screen.getByText('Days')).toBeInTheDocument()
    expect(screen.getByText('Hours')).toBeInTheDocument()
    expect(screen.getByText('Mins')).toBeInTheDocument()
    expect(screen.getByText('Secs')).toBeInTheDocument()
  })

  it('renders countdown values with padding', () => {
    render(<HotDeal />)
    expect(screen.getByText('08')).toBeInTheDocument()
    expect(screen.getByText('32')).toBeInTheDocument()
    expect(screen.getByText('15')).toBeInTheDocument()
  })

  it('renders Shop Now button', () => {
    render(<HotDeal />)
    expect(screen.getByText('Shop Now')).toBeInTheDocument()
  })

  it('has light grey background', () => {
    const { container } = render(<HotDeal />)
    const section = container.querySelector('section')
    expect(section?.className).toContain('bg-light-grey')
  })

  it('countdown circles are red and circular', () => {
    render(<HotDeal />)
    const daysCircle = screen.getByText('Days').closest('div')
    expect(daysCircle?.className).toContain('rounded-full')
    expect(daysCircle?.className).toContain('bg-brand/90')
  })

  it('Shop Now button is pill-shaped with brand color', () => {
    render(<HotDeal />)
    const shopNow = screen.getByText('Shop Now').closest('a')
    expect(shopNow?.className).toContain('rounded-[40px]')
    expect(shopNow?.className).toContain('bg-brand')
  })
})
