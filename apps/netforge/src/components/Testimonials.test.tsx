import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and all three testimonials', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { level: 2, name: 'What Clients Say' })).toBeInTheDocument()

    for (const name of ['Sarah Johnson', 'Michael Chen', 'Emily Rodriguez']) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })

  it('shows client avatars', () => {
    render(<Testimonials />)

    const avatars = screen.getAllByRole('img')
    expect(avatars.length).toBe(3)
    for (const img of avatars) {
      expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    }
  })
})
