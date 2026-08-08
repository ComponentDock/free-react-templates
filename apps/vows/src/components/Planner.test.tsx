import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Planner } from './Planner'

describe('Planner', () => {
  it('renders the eyebrow, heading, and planner profile', () => {
    render(<Planner />)

    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Meet Your Planner' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Isabella Sterling' })).toBeInTheDocument()
    expect(screen.getByText(/With over twelve years of experience/)).toBeInTheDocument()
    expect(
      screen.getByText(/Featured in Vogue Weddings, Martha Stewart Weddings, and Brides Magazine/),
    ).toBeInTheDocument()
  })

  it('renders the planner portrait placeholder', () => {
    render(<Planner />)

    const image = screen.getByRole('img', { name: 'Isabella Sterling' })
    expect(image).toHaveAttribute('src', expect.stringContaining('picsum.photos/seed/vows-planner'))
  })
})
