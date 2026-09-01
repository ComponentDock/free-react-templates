import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the section heading and description', () => {
    render(<Features />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Powerful Carousel Features',
    )

    expect(screen.getByText(/Everything you need for a stunning carousel/i)).toBeInTheDocument()
  })

  it('renders all six feature cards', () => {
    render(<Features />)

    const features = [
      'Responsive Layout',
      'Touch & Gesture Support',
      'Customizable Styling',
      'Smooth Transitions',
      'Mobile-First Design',
      'Thumbnail Navigation',
    ]

    for (const feature of features) {
      expect(screen.getByText(feature)).toBeInTheDocument()
    }
  })

  it('has the features section id for in-page linking', () => {
    render(<Features />)
    expect(screen.getByTestId('features-section')).toHaveAttribute('id', 'features')
  })
})
