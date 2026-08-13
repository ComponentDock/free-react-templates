import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { componentDock, footerProducts, instagramFeed } from '../data'

describe('Footer', () => {
  it('renders the dark footer with the top products link column', () => {
    const { container } = render(<Footer />)
    const footer = container.querySelector('footer') as HTMLElement
    expect(footer).toHaveClass('bg-footer')
    expect(screen.getByRole('heading', { name: 'top products' })).toBeInTheDocument()
    for (const product of footerProducts) {
      expect(screen.getByRole('link', { name: product })).toBeInTheDocument()
    }
  })

  it('renders the newsletter with reassurance copy and validation', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'newsletter' })).toBeInTheDocument()
    expect(
      screen.getByText('You can trust us. we only send promo offers, not a single.'),
    ).toBeInTheDocument()
    const input = screen.getByLabelText('Your email here')
    expect(screen.getByRole('button', { name: 'subscribe now' })).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'subscribe now' }))
    expect(screen.getByText('Please enter a valid email address.')).toBeInTheDocument()

    fireEvent.change(input, { target: { value: 'jane@example.com' } })
    expect(screen.queryByText('Please enter a valid email address.')).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'subscribe now' }))
    expect(screen.getByRole('status')).toHaveTextContent('Thanks for subscribing!')
    expect(screen.queryByLabelText('Your email here')).not.toBeInTheDocument()
  })

  it('clears the error as soon as the email input changes', () => {
    render(<Footer />)
    const input = screen.getByLabelText('Your email here')
    fireEvent.click(screen.getByRole('button', { name: 'subscribe now' }))
    expect(screen.getByText('Please enter a valid email address.')).toBeInTheDocument()
    fireEvent.change(input, { target: { value: 'a@b.co' } })
    expect(screen.queryByText('Please enter a valid email address.')).not.toBeInTheDocument()
  })

  it('subscribes directly without error when the email is valid on first submit', () => {
    render(<Footer />)
    fireEvent.change(screen.getByLabelText('Your email here'), {
      target: { value: 'jane@example.com' },
    })
    fireEvent.click(screen.getByRole('button', { name: 'subscribe now' }))
    expect(screen.getByRole('status')).toHaveTextContent('Thanks for subscribing!')
  })

  it('renders the instagram feed with eight square thumbs', () => {
    const { container } = render(<Footer />)
    const feedImgs = container.querySelectorAll('img.h-\\[55px\\]')
    expect(feedImgs).toHaveLength(instagramFeed.length)
    expect(screen.getByRole('heading', { name: 'instagram feed' })).toBeInTheDocument()
  })

  it('renders the copyright bar with the Component Dock link and social circles', () => {
    render(<Footer />)
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
    const dockLinks = screen.getAllByRole('link', { name: /componentdock\.com/i })
    expect(dockLinks.length).toBeGreaterThan(0)
    for (const link of dockLinks) {
      expect(link).toHaveAttribute('href', componentDock)
    }
    const socialButtons = screen.getAllByRole('link')
    expect(socialButtons.filter((l) => l.className.includes('rounded-full'))).toHaveLength(5)
  })
})
