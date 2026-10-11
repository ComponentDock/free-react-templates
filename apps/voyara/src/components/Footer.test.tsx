import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the dark footer widgets, instagram feed, and social links', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveClass('bg-ink')

    expect(screen.getByRole('heading', { level: 4, name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4, name: 'Newsletter' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4, name: 'Instagram Feed' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4, name: 'Follow Us' })).toBeInTheDocument()

    expect(screen.getByText('Stay updated with our latest')).toBeInTheDocument()
    expect(screen.getByText('Let us be social')).toBeInTheDocument()

    const thumbs = screen.getAllByRole('img')
    expect(thumbs).toHaveLength(8)
    expect(thumbs[0]).toHaveAttribute('src', 'https://picsum.photos/seed/voyara-insta-1/120/120')

    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Dribbble' })).toBeInTheDocument()
  })

  it('validates the newsletter email and confirms a successful subscription', () => {
    render(<Footer />)
    fireEvent.change(screen.getByLabelText('Email address'), { target: { value: 'nope' } })
    fireEvent.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByText('Please enter a valid email address')).toHaveAttribute('role', 'alert')
    expect(screen.queryByRole('status')).not.toBeInTheDocument()

    fireEvent.change(screen.getByLabelText('Email address'), {
      target: { value: 'ada@example.com' },
    })
    fireEvent.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('status')).toHaveTextContent('Thanks! You are on the list.')
  })

  it('links Component Dock in the footer bottom line instead of any attribution', () => {
    render(<Footer />)
    const brand = screen.getByRole('link', { name: 'Component Dock' })
    expect(brand).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(brand).toHaveAttribute('rel', 'noopener noreferrer')
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })
})
