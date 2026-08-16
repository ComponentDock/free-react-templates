import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { TrustBand } from './TrustBand'

describe('TrustBand', () => {
  it('shows the photo block with the yellow 25 years box', () => {
    const { container } = render(<TrustBand />)
    expect(screen.getByText('25')).toBeInTheDocument()
    expect(screen.getByText('Years of Experience')).toBeInTheDocument()
    const box = container.querySelector('.bg-accent')
    expect(box).not.toBeNull()
    expect(screen.getByRole('img', { name: /satisfied customer/i })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })

  it('shows the heading, two paragraphs and a Learn More pill', () => {
    render(<TrustBand />)
    expect(
      screen.getByRole('heading', {
        name: /We know how to build trust & offer the highest quality/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Every home and workplace/i)).toBeInTheDocument()
    expect(screen.getByText(/Our crews arrive on time/i)).toBeInTheDocument()
    const learnMore = screen.getByRole('link', { name: 'Learn More' })
    expect(learnMore).toHaveClass('btn-blue-pill')
    expect(learnMore).toHaveAttribute('href', '#about')
  })

  it('renders the decorative beige strip behind the photo', () => {
    const { container } = render(<TrustBand />)
    expect(container.querySelector('.bg-beige')).not.toBeNull()
  })
})
