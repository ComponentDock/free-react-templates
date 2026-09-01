import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Features } from './Features'

describe('Features', () => {
  it('renders the section heading', () => {
    render(<Features />)
    expect(screen.getByText('Powerful Carousel Features')).toBeInTheDocument()
  })

  it('renders the section description', () => {
    render(<Features />)
    expect(screen.getByText(/Everything you need for a stunning carousel/i)).toBeInTheDocument()
  })

  it('renders six feature cards', () => {
    render(<Features />)
    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(6)
  })

  it('renders all feature titles', () => {
    render(<Features />)
    expect(screen.getByText('Responsive Layout')).toBeInTheDocument()
    expect(screen.getByText('Touch & Gesture Support')).toBeInTheDocument()
    expect(screen.getByText('Customizable Styling')).toBeInTheDocument()
    expect(screen.getByText('Smooth Transitions')).toBeInTheDocument()
    expect(screen.getByText('Mobile-First Design')).toBeInTheDocument()
    expect(screen.getByText('Thumbnail Navigation')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<Features />)
    expect(screen.getByText(/Fluid grid adapts beautifully/i)).toBeInTheDocument()
    expect(screen.getByText(/Native swipe gestures/i)).toBeInTheDocument()
    expect(screen.getByText(/Tailwind CSS design tokens/i)).toBeInTheDocument()
    expect(screen.getByText(/Hardware-accelerated CSS animations/i)).toBeInTheDocument()
    expect(screen.getByText(/Built mobile-first/i)).toBeInTheDocument()
    expect(screen.getByText(/Visual thumbnail strip/i)).toBeInTheDocument()
  })

  it('has correct section id for anchor navigation', () => {
    render(<Features />)
    expect(screen.getByTestId('features-section')).toHaveAttribute('id', 'features')
  })
})
