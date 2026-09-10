import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders section heading', () => {
    render(<Pricing />)
    expect(screen.getByText('We offer best services to our customer')).toBeInTheDocument()
  })

  it('renders three pricing cards', () => {
    render(<Pricing />)
    expect(screen.getByText('Car Wash')).toBeInTheDocument()
    expect(screen.getByText('Detailing')).toBeInTheDocument()
    expect(screen.getByText('Wash & Detailing')).toBeInTheDocument()
  })

  it('displays correct prices', () => {
    render(<Pricing />)
    expect(screen.getByText('$50.00')).toBeInTheDocument()
    expect(screen.getByText('$100.00')).toBeInTheDocument()
    expect(screen.getByText('$200.00')).toBeInTheDocument()
  })

  it('renders feature lists for each card', () => {
    render(<Pricing />)
    expect(screen.getByText('Exterior hand wash')).toBeInTheDocument()
    expect(screen.getByText('Full interior cleaning')).toBeInTheDocument()
    expect(screen.getByText('Complete exterior wash')).toBeInTheDocument()
  })

  it('renders Get Started buttons', () => {
    render(<Pricing />)
    const buttons = screen.getAllByText('Get Started')
    expect(buttons).toHaveLength(3)
    buttons.forEach((btn) => {
      expect(btn).toHaveAttribute('href', '#contact')
    })
  })

  it('hovering over card changes button style', async () => {
    const user = userEvent.setup()
    render(<Pricing />)
    const card = screen.getByText('Car Wash').closest('.group')!
    await user.hover(card)
    const btn = screen.getAllByText('Get Started')[0] as HTMLElement
    expect(btn.className).toContain('group-hover:bg-brand')
  })
})
