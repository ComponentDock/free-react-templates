import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the blurb, contact info, opening hours, and social links', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Contact Info' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Opening Hours' })).toBeInTheDocument()
    expect(screen.getByText('913-473-7000')).toBeInTheDocument()
    expect(screen.getByText('contact@slickbarber.com')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'GitHub' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'X' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
  })

  it('renders the copyright bar with the site name', () => {
    render(<Footer />)

    const contentinfo = screen.getByRole('contentinfo')
    expect(within(contentinfo).getByText(/All rights reserved \| Slick/)).toBeInTheDocument()
  })
})
