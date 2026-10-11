import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the sections in the reference order', () => {
    const { container } = render(<App />)

    const sectionIds = Array.from(container.querySelectorAll('section')).map(
      (section) => section.id,
    )
    expect(sectionIds).toEqual([
      'home',
      'destinations',
      'packages',
      'services',
      'testimonials',
      'about',
      'blog',
    ])

    const headings = Array.from(container.querySelectorAll('section h1')).map(
      (heading) => heading.textContent,
    )
    expect(headings).toEqual([
      'Magical Travel',
      'Popular Destinations',
      'We Provide Affordable Prices',
      'Other issues we can help you with',
      'Testimonial from our Clients',
      'Latest from Our Blog',
    ])

    expect(container.querySelector('footer')).not.toBeNull()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('never leaks the source name into the rendered markup', () => {
    const { container } = render(<App />)

    expect(container.innerHTML.toLowerCase()).not.toContain('colorlib')
    expect(container.innerHTML.toLowerCase()).not.toContain('travelista')
  })
})
