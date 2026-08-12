import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand column with logo, blurb and social links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: /Academia/ })).toBeInTheDocument()
    expect(document.querySelector('footer svg.lucide-book-open')).toBeInTheDocument()
    expect(screen.getByText(/Firmament morning sixth subdue darkness/)).toBeInTheDocument()

    for (const label of ['Facebook', 'Twitter', 'Linkedin', 'Instagram']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders the Courses and Resources link columns', () => {
    render(<Footer />)

    const coursesHeading = screen.getByRole('heading', { name: 'Courses' })
    for (const link of ['Wordpress', 'Photoshop', 'Illustrator', 'Adobe XD', 'UI/UX']) {
      expect(
        within(coursesHeading.parentElement!).getByRole('link', { name: link }),
      ).toBeInTheDocument()
    }

    const resourcesHeading = screen.getByRole('heading', { name: 'Resources' })
    for (const link of ['Free Adobe XD Tutorials', 'About', 'Contact']) {
      expect(
        within(resourcesHeading.parentElement!).getByRole('link', { name: link }),
      ).toBeInTheDocument()
    }
  })

  it('renders the About column with address, phone and email as plain text', () => {
    render(<Footer />)

    expect(screen.getByText('200, D-block, Green lane USA')).toBeInTheDocument()
    expect(screen.getByText('+10 367 467 8934')).toBeInTheDocument()
    expect(screen.getByText('academia@contact.com')).toBeInTheDocument()
    // No clickable tel:/mailto: links (plain label + value text, per source).
    expect(screen.queryByRole('link', { name: /^tel:/ })).not.toBeInTheDocument()
  })

  it('renders the bottom bar with copyright and the Component Dock link', () => {
    render(<Footer />)

    expect(screen.getByText(/© 2026 Academia\./)).toBeInTheDocument()
    const dock = screen.getByRole('link', { name: /Component Dock/ })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
