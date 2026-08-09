import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand, contact info, link columns, blog posts, and socials', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /Clipper/i })).toBeInTheDocument()
    expect(screen.getByText('34 Street Name, City Name Here, United States')).toBeInTheDocument()
    expect(screen.getByText('+1 242 4942 290')).toBeInTheDocument()
    expect(screen.getByText('webmaster@free-templates.cc')).toBeInTheDocument()

    const links = screen.getByRole('heading', { name: 'Links' }).closest('div')
    expect(links).not.toBeNull()
    for (const label of ['About', 'Hairstyle', 'Contact']) {
      expect(within(links as HTMLElement).getByRole('link', { name: label })).toBeInTheDocument()
    }

    const blog = screen.getByRole('heading', { name: 'Latest Blog' }).closest('div')
    expect(blog).not.toBeNull()
    expect(within(blog as HTMLElement).getByText('7 Best Haircuts for Summer')).toBeInTheDocument()
    expect(
      within(blog as HTMLElement).getByText('4 Grooming Habits Every Man Should Own'),
    ).toBeInTheDocument()
    expect(
      within(blog as HTMLElement).getByText('Why You Should Visit the Barbershop Today'),
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: 'Connect' })).toBeInTheDocument()
    for (const label of ['GitHub', 'X', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(screen.getByText(/All rights reserved \| Clipper/)).toBeInTheDocument()
  })
})
