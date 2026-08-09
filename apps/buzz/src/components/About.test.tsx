import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading, blurb, and opening hours', () => {
    render(<About />)

    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByText(/consectetur adipisicing elit/)).toBeInTheDocument()
    expect(screen.getByText('10:00 am - 10:00 pm')).toBeInTheDocument()
  })

  it('shows a studio photo with descriptive alt text', () => {
    render(<About />)
    expect(
      screen.getByRole('img', { name: 'Barber styling a client in the studio' }),
    ).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
