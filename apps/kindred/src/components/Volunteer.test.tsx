import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Volunteer } from './Volunteer'

describe('Volunteer', () => {
  it('renders the photo card with a Join now button', () => {
    const { container } = render(<Volunteer />)
    expect(screen.getByRole('heading', { name: 'Kindred Charity' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Join now' })).toBeInTheDocument()
    expect(container.querySelector('img')).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/kindred-about/640/720',
    )
  })

  it('renders the solid-blue donation panel with a black Donate now button', () => {
    const { container } = render(<Volunteer />)
    const panel = container.querySelector('[data-testid="donation-panel"]')
    expect(panel).not.toBeNull()
    expect(panel).toHaveClass('bg-brand')
    expect(screen.getByRole('heading', { name: 'Donation so far' })).toBeInTheDocument()
    expect(screen.getByText('$380,000')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Donate now' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Donate now' })).toHaveClass('bg-black')
  })
})
