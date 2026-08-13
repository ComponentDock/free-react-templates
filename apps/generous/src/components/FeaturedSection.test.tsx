import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturedSection } from './FeaturedSection'

describe('FeaturedSection', () => {
  it('shows the heading, copy and raised-total line', () => {
    render(<FeaturedSection />)
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /School in Africa Need Renovations. Thanks To All Donors/,
      }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Far far away, behind the word mountains/)).toBeInTheDocument()
    expect(screen.getByText('We have raised $30,000')).toBeInTheDocument()
  })

  it('shows a Read The Full Story button and a photo under the teal overlay', () => {
    const { container } = render(<FeaturedSection />)
    const button = screen.getByRole('link', { name: 'Read The Full Story' })
    expect(button).toHaveAttribute('href', '#about')
    expect(container.querySelector('img')).toBeInTheDocument()
    expect(container.querySelector('.bg-primary\\/90')).toBeInTheDocument()
  })
})
