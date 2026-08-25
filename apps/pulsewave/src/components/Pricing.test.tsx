import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the section heading', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Choose Your Pricing Plan')
  })

  it('renders all three pricing plans', () => {
    render(<Pricing />)
    expect(screen.getByText('Basic')).toBeInTheDocument()
    expect(screen.getByText('Standard')).toBeInTheDocument()
    expect(screen.getByText('Premium')).toBeInTheDocument()
  })

  it('renders prices', () => {
    render(<Pricing />)
    expect(screen.getByText('$49')).toBeInTheDocument()
    expect(screen.getByText('$99')).toBeInTheDocument()
    expect(screen.getByText('$199')).toBeInTheDocument()
  })

  it('renders GET STARTED buttons', () => {
    render(<Pricing />)
    const buttons = screen.getAllByRole('link', { name: /get started/i })
    expect(buttons.length).toBe(3)
  })

  it('highlights the Standard plan', () => {
    render(<Pricing />)
    const cards = screen.getAllByText('GET STARTED')
    const standardCard = cards[1]!.closest('.rounded-xl')!
    expect(standardCard.className).toContain('ring-2')
  })
})
