import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the centered section title and subtitle', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Why Choose Us Your Fitness Builder',
    )
    expect(
      screen.getByText('Who are in extremely love with eco friendly system.'),
    ).toBeInTheDocument()
  })

  it('splits an image and a shadowed white card with the three-line heading', () => {
    render(<About />)
    expect(
      screen.getByRole('img', { name: 'Kayak resting on a quiet alpine lake' }),
    ).toHaveAttribute('src', expect.stringContaining('picsum.photos/seed/alpinora-about'))
    for (const line of ['We Realize that', 'there are reduced', 'Wastege Stand out']) {
      expect(screen.getByText(line)).toBeInTheDocument()
    }
    const card = screen.getByText('We Realize that').closest('div')
    expect(card).toHaveClass('bg-white')
  })

  it('shows the three body paragraphs', () => {
    render(<About />)
    expect(screen.getByText(/Thoughtful planning is what turns a good trip/)).toBeInTheDocument()
    expect(screen.getByText(/We keep groups small and itineraries flexible/)).toBeInTheDocument()
    expect(screen.getByText(/Sustainability is not a slogan for us/)).toBeInTheDocument()
  })
})
