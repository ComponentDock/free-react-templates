import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders every Palate section in order', () => {
    const { container } = render(<App />)

    // Top bar + navbar.
    expect(screen.getByText('+ 1235 2355 98')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Palate' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Book a table' })).toBeInTheDocument()

    // Hero slider — first slide headline + buttons.
    expect(screen.getByText('Our Delicious Specialties')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Order Now' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'View Menu' })).toBeInTheDocument()

    // Section headings (script words are aria-hidden).
    expect(
      screen.getByRole('heading', { level: 2, name: 'Appetizer Restaurant' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Catering Services' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Our Menu' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Make Reservation' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Our Master Chef' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Happy Customer' })).toBeInTheDocument()

    // Counter stats (jsdom: IntersectionObserver undefined → final values).
    expect(screen.getByText('15,000')).toBeInTheDocument()
    expect(screen.getByText('Happy Customers')).toBeInTheDocument()

    // Footer.
    expect(screen.getByText('Open Hours')).toBeInTheDocument()
    expect(screen.getByText('© Palate. All rights reserved.')).toBeInTheDocument()

    // 24 images total: 18 menu circles + 4 chefs + 2 in hero (1 visible
    // slide renders one bg div; hero slides are bg-image divs, not <img>).
    // Counted below are the <img> elements only.
    const images = container.querySelectorAll('img')
    expect(images.length).toBeGreaterThanOrEqual(24)
  })
})
