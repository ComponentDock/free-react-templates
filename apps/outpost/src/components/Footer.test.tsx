import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the navy footer widgets and the Instagram feed', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveClass('bg-navy')
    expect(footer).toHaveAttribute('id', 'contact')

    expect(screen.getByRole('heading', { level: 4, name: 'About Agency' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4, name: 'Navigation Links' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4, name: 'Newsletter' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4, name: 'Instagram Feed' })).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('link', { name: 'Pricing' })).toHaveAttribute('href', '#packages')
    expect(screen.getByRole('link', { name: 'contact' })).toHaveAttribute('href', '#newsletter')

    const thumbs = screen.getAllByRole('img')
    expect(thumbs).toHaveLength(8)
    expect(thumbs[0]).toHaveAttribute('src', 'https://picsum.photos/seed/outpost-insta-1/120/120')
  })

  it('validates the footer newsletter email and confirms a subscription', () => {
    render(<Footer />)

    fireEvent.change(screen.getByLabelText('Email address'), { target: { value: 'nope' } })
    fireEvent.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a valid email address')
    expect(screen.queryByRole('status')).not.toBeInTheDocument()

    fireEvent.change(screen.getByLabelText('Email address'), {
      target: { value: 'ada@example.com' },
    })
    fireEvent.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('status')).toHaveTextContent('Thanks! You are on the list.')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('links Component Dock in the footer bottom line', () => {
    render(<Footer />)

    const brand = screen.getByRole('link', { name: 'Component Dock' })
    expect(brand).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(brand).toHaveAttribute('rel', 'noopener noreferrer')
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })
})
