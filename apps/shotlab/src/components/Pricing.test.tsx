import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the pricing heading', () => {
    render(<Pricing />)
    expect(screen.getByText('My Pricing')).toBeInTheDocument()
  })

  it('renders all 4 pricing plans', () => {
    render(<Pricing />)
    expect(screen.getByText('Model Photography')).toBeInTheDocument()
    expect(screen.getByText('Portrait Photography')).toBeInTheDocument()
    expect(screen.getByText('Fashion Photography')).toBeInTheDocument()
    expect(screen.getByText('Wedding Photography')).toBeInTheDocument()
  })

  it('renders prices', () => {
    render(<Pricing />)
    expect(screen.getByText('$49.99')).toBeInTheDocument()
    expect(screen.getByText('$79.99')).toBeInTheDocument()
    expect(screen.getByText('$99.99')).toBeInTheDocument()
    expect(screen.getByText('$149.99')).toBeInTheDocument()
  })

  it('renders feature lists', () => {
    render(<Pricing />)
    expect(screen.getAllByText('10 Photos')).toHaveLength(1)
    expect(screen.getAllByText('25 Photos')).toHaveLength(1)
    expect(screen.getAllByText('50 Photos')).toHaveLength(1)
    expect(screen.getAllByText('100 Photos')).toHaveLength(1)
  })

  it('renders Get Started buttons', () => {
    render(<Pricing />)
    const buttons = screen.getAllByText('Get Started')
    expect(buttons).toHaveLength(4)
  })

  it('links Get Started to contact section', () => {
    render(<Pricing />)
    const buttons = screen.getAllByText('Get Started')
    buttons.forEach((btn) => {
      expect(btn.closest('a')).toHaveAttribute('href', '#contact')
    })
  })
})
