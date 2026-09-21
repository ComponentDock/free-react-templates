import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the section heading', () => {
    render(<Pricing />)
    const headings = screen.getAllByRole('heading', { level: 3 })
    const sectionHeading = headings[0]!
    expect(sectionHeading.textContent).toContain('Price')
    expect(sectionHeading.textContent).toContain('Plan')
  })

  it('renders all three plans', () => {
    render(<Pricing />)
    expect(screen.getByText('Wedding')).toBeDefined()
    expect(screen.getByText('Studio')).toBeDefined()
    expect(screen.getByText('Fashion')).toBeDefined()
  })

  it('displays prices', () => {
    render(<Pricing />)
    expect(screen.getByText('$76')).toBeDefined()
    expect(screen.getByText('$86')).toBeDefined()
    expect(screen.getByText('$96')).toBeDefined()
  })

  it('renders Book Now buttons', () => {
    render(<Pricing />)
    const buttons = screen.getAllByText('Book Now')
    expect(buttons).toHaveLength(3)
  })

  it('renders feature lists with multiple identical items', () => {
    render(<Pricing />)
    const entrance = screen.getAllByText('Unlimited Entrance')
    expect(entrance.length).toBe(3)
    const seat = screen.getAllByText('Comfortable Seat')
    expect(seat.length).toBe(3)
  })
})
