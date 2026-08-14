import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections in the original order', () => {
    const { container } = render(<App />)
    const headings = Array.from(container.querySelectorAll('h1, h2')).map(
      (node) => node.textContent,
    )
    expect(headings).toEqual([
      'Relax Your Mind',
      'Book Your Room',
      'Hotel Accomodation',
      'Royal Facilities',
      'About Us Our History Mission & Vision',
      'Testimonial from our Clients',
      'latest posts from blog',
    ])
    expect(screen.getByRole('link', { name: 'Get Started' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Book Now/i })).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Hostelry — Hotel & Resort')
  })
})
