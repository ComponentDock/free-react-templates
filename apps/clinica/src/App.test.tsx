import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import { about, appointment, blog, departments, gallery, hero, team, testimonial } from './data'

describe('App', () => {
  it('renders every section in the reference order', () => {
    render(<App />)
    expect(screen.getByTestId('preloader')).toBeInTheDocument()

    const headings = screen.getAllByRole('heading')
    const headingTexts = headings.map((heading) => heading.textContent)

    // Hero headline + rotating word (accessible name collapses the space).
    expect(headings[0]).toHaveTextContent(hero.headline)
    // Section titles in order.
    expect(headingTexts).toEqual(
      expect.arrayContaining([
        about.title,
        departments.title,
        gallery.title,
        team.title,
        appointment.title,
        blog.title,
      ]),
    )
    expect(screen.getByText(testimonial.quote)).toBeInTheDocument()
  })

  it('links the footer to Component Dock', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('renders the back-to-top button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: 'Back to top' })).toBeInTheDocument()
  })
})
