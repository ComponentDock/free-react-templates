import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the about blurb, address, quick link, recent news, and stay connected columns', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByText('120 Raymond Rd, New York')).toBeInTheDocument()
    expect(screen.getByText('info.deercreative@gmail.com')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Quick Link' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Recent News' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Stay Connected' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Shop' })).toBeInTheDocument()
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })

  it('renders the social links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Dribbble' })).toBeInTheDocument()
  })
})
