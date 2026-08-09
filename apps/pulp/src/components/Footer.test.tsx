import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the brand column with description and three circular social buttons', () => {
    render(<Footer />)

    expect(screen.getByText('Pulp')).toBeInTheDocument()
    expect(screen.getByText(/far from the countries Vokalia/i)).toBeInTheDocument()
    for (const label of ['Twitter', 'Facebook', 'Instagram']) {
      const link = screen.getByRole('link', { name: label })
      expect(link).toHaveClass('rounded-full')
      expect(link).toHaveClass('bg-white/5')
    }
  })

  it('shows the Recent Blog widget with two entries and meta', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Recent Blog' })).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: 'The Quiet Power of a Well-Dressed Man' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: 'Why Print Is Making a Bold Comeback' }),
    ).toBeInTheDocument()
    expect(screen.getAllByText('July 12, 2018')).toHaveLength(2)
    expect(screen.getAllByText('Admin')).toHaveLength(2)
    expect(screen.getAllByText('19')).toHaveLength(2)
  })

  it('shows the Site Links navigation', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Site Links' })).toBeInTheDocument()
    for (const link of ['Home', 'About', 'Model', 'Services', 'Blog']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('shows the Have a Questions? widget with contact rows', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Have a Questions?' })).toBeInTheDocument()
    expect(screen.getByText(/203 Fake St\. Mountain View/i)).toBeInTheDocument()
    expect(screen.getByText('+2 392 3929 210')).toBeInTheDocument()
    expect(screen.getByText('info@yourdomain.com')).toBeInTheDocument()
  })

  it('shows the bottom bar with the repo-standard credit', () => {
    render(<Footer />)

    const year = new Date().getFullYear()
    expect(screen.getByText(`© ${year} Pulp — Free React Template`)).toBeInTheDocument()
  })
})
