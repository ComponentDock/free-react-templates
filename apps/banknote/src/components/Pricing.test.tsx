import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the section title', () => {
    render(<Pricing />)
    expect(screen.getByText('Pricing')).toBeInTheDocument()
  })

  it('renders 3 pricing tiers', () => {
    render(<Pricing />)
    expect(screen.getByText('Basic')).toBeInTheDocument()
    expect(screen.getByText('Premium')).toBeInTheDocument()
    expect(screen.getByText('Professional')).toBeInTheDocument()
  })

  it('displays prices', () => {
    render(<Pricing />)
    expect(screen.getByText('$47')).toBeInTheDocument()
    expect(screen.getByText('$200')).toBeInTheDocument()
    expect(screen.getByText('$750')).toBeInTheDocument()
  })

  it('marks Premium as popular', () => {
    render(<Pricing />)
    expect(screen.getByText('Popular')).toBeInTheDocument()
  })

  it('renders Buy Now buttons', async () => {
    const user = userEvent.setup()
    render(<Pricing />)
    const buttons = screen.getAllByText('Buy Now')
    expect(buttons.length).toBe(3)
    const first = buttons[0]
    if (first) await user.click(first)
  })
})
