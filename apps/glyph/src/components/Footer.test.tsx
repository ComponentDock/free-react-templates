import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the About Us column with a description', () => {
    render(<Footer />)

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    expect(
      screen.getByText(/Lorem ipsum dolor sit amet, consectetur adipisicing elit/),
    ).toBeInTheDocument()
  })

  it('renders the Newsletter column with the tagline and a subscribe form', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Newsletter' })).toBeInTheDocument()
    expect(screen.getByText('Stay updated with our latest trends')).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: 'Email address' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('renders the Instagram Feed grid with six thumbnails', () => {
    const { container } = render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Instagram Feed' })).toBeInTheDocument()
    const grid = screen.getByRole('heading', { name: 'Instagram Feed' }).parentElement!
    expect(grid.querySelectorAll('img')).toHaveLength(6)
    expect(container.querySelectorAll('img')).toHaveLength(6)
  })

  it('renders the Follow Us column with social links', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Follow Us' })).toBeInTheDocument()
    expect(screen.getByText('Let us be social')).toBeInTheDocument()
    for (const label of ['Facebook', 'Twitter', 'GitHub', 'Behance']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders the copyright bar with the Colorlib credit in the accent color', () => {
    render(<Footer />)

    expect(screen.getByText('Copyright © All rights reserved')).toBeInTheDocument()
    const credit = screen.getByRole('link', { name: 'Colorlib' })
    expect(credit).toHaveAttribute('href', 'https://colorlib.com')
    expect(credit.className).toContain('text-accent')
  })
})
