import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the site name, blurb, and social icons', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(
      within(footer).getByText((_, element) => element?.textContent === 'Haute'),
    ).toBeInTheDocument()
    expect(within(footer).getByText(/velit pulvinar/i)).toBeInTheDocument()
    for (const label of ['Pinterest', 'Facebook', 'Twitter', 'Dribbble', 'Behance']) {
      expect(within(footer).getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders the Recent Posts widget with pink dates', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Recent Posts' })).toBeInTheDocument()
    for (const title of ['Paris Fashion Week', 'About Our Fashion App', 'Simple Blog Post']) {
      expect(screen.getByText(title)).toBeInTheDocument()
    }
    expect(screen.getAllByText('20 January 2019')).toHaveLength(3)
  })

  it('renders the Useful Links and Contact columns', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Useful Links' })).toBeInTheDocument()
    for (const label of ['Testimonials', 'About Us', 'Jobs', 'Reviews', 'Marketing', 'Subscribe']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }

    expect(screen.getByRole('heading', { name: 'Contact' })).toBeInTheDocument()
    expect(screen.getByText(/fashion avenue/i)).toBeInTheDocument()
    expect(screen.getByText('+34 5667 77833')).toBeInTheDocument()
    expect(screen.getByText('hello@haute.templates')).toBeInTheDocument()
  })

  it('renders the copyright line with the current year', () => {
    render(<Footer />)
    expect(
      screen.getByText(`© ${new Date().getFullYear()} Haute — Free React Template`),
    ).toBeInTheDocument()
  })
})
