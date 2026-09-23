import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders section heading', () => {
    render(<Pricing />)
    expect(screen.getByText('Affordable pricing plan')).toBeInTheDocument()
  })

  it('renders three pricing cards', () => {
    render(<Pricing />)
    expect(screen.getByText('Starter')).toBeInTheDocument()
    expect(screen.getByText('Pro')).toBeInTheDocument()
    expect(screen.getByText('Enterprise')).toBeInTheDocument()
  })

  it('shows prices', () => {
    render(<Pricing />)
    expect(screen.getByText('Free')).toBeInTheDocument()
    expect(screen.getByText('$29')).toBeInTheDocument()
    expect(screen.getByText('$99')).toBeInTheDocument()
  })

  it('shows Most Popular badge on Pro card', () => {
    render(<Pricing />)
    expect(screen.getByText('Most Popular')).toBeInTheDocument()
  })

  it('each card has Get Started Now button', () => {
    render(<Pricing />)
    const buttons = screen.getAllByText('Get Started Now')
    expect(buttons.length).toBe(3)
  })

  it('has feature lists', () => {
    render(<Pricing />)
    expect(screen.getByText('1 workspace')).toBeInTheDocument()
    expect(screen.getByText('Unlimited workspaces')).toBeInTheDocument()
    expect(screen.getByText('Unlimited everything')).toBeInTheDocument()
  })
})
