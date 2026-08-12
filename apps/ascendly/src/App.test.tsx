import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders every Ascendly section in order', () => {
    const { container } = render(<App />)

    // Navbar.
    expect(screen.getByRole('link', { name: 'Ascendly' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Toggle dark mode' })).toBeInTheDocument()

    // Hero.
    const heroHeading = screen.getByRole('heading', { level: 1 })
    expect(heroHeading.textContent).toMatch(/Grow Up Your/)

    // Features.
    expect(
      screen.getByRole('heading', { level: 2, name: 'Financial Analysis' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Marketing Plans' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Optimize Solutions' }),
    ).toBeInTheDocument()

    // Solutions.
    expect(screen.getByRole('heading', { level: 2, name: 'Our Solutions' })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(9) // 6 solutions + 3 blog

    // Testimonial.
    expect(screen.getByRole('heading', { level: 2, name: 'Testimonial' })).toBeInTheDocument()
    expect(screen.getAllByText('— Craig Stephen')).toHaveLength(2)

    // Blog.
    expect(screen.getByRole('heading', { level: 2, name: 'Blog' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'View All' })).toBeInTheDocument()

    // CTA band.
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: "Let's work together to make your business growth dramatically.",
      }),
    ).toBeInTheDocument()

    // Footer.
    expect(screen.getByText(/© \d{4} Ascendly\. All rights reserved\./)).toBeInTheDocument()

    // 6 solution images + 2 testimonial portraits + 3 blog images = 11.
    const images = container.querySelectorAll('img')
    expect(images.length).toBeGreaterThanOrEqual(11)

    // Landmarks.
    expect(container.querySelector('main')).not.toBeNull()
  })
})
