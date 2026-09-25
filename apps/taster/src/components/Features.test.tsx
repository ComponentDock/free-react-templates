import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the section heading', () => {
    render(<Features />)
    expect(
      screen.getByRole('heading', { level: 2, name: /find your best food/i }),
    ).toBeInTheDocument()
  })

  it('renders 3 feature cards with Learn More links', () => {
    render(<Features />)
    const learnMoreLinks = screen.getAllByRole('link', { name: /learn more/i })
    expect(learnMoreLinks).toHaveLength(3)
  })

  it('shows category labels and titles', () => {
    render(<Features />)
    expect(screen.getByText('Vegies')).toBeInTheDocument()
    expect(screen.getByText('Beef Empanadas')).toBeInTheDocument()
    expect(screen.getByText('Buttermilk Chicken Jibaritos')).toBeInTheDocument()
    expect(screen.getByText('Chicken Chimichurri Croquettes')).toBeInTheDocument()
  })
})
