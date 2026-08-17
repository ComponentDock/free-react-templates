import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Footer } from './Footer'
import { BRAND, COPYRIGHT, FOOTER_LINKS, NEWSLETTER, SOCIALS } from '../data'

describe('Footer', () => {
  it('renders the brand, about text, and four social icons', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: BRAND })).toBeInTheDocument()
    expect(screen.getByText(FOOTER_LINKS.about)).toBeInTheDocument()
    expect(
      screen.getAllByRole('link', { name: /facebook|instagram|linkedin|youtube/i }),
    ).toHaveLength(SOCIALS.length)
  })

  it('renders the Navigation and Services columns', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Navigation' })).toBeInTheDocument()
    for (const item of FOOTER_LINKS.navigation) {
      expect(screen.getByRole('link', { name: item })).toBeInTheDocument()
    }
    expect(screen.getByRole('heading', { name: 'Services' })).toBeInTheDocument()
    for (const item of FOOTER_LINKS.services) {
      expect(screen.getByRole('link', { name: item })).toBeInTheDocument()
    }
  })

  it('shows an error for an invalid email and does not submit', () => {
    render(<Footer />)
    const input = screen.getByLabelText('Email address')
    fireEvent.change(input, { target: { value: 'not-an-email' } })
    fireEvent.click(screen.getByRole('button', { name: NEWSLETTER.submit }))
    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a valid email address.')
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('subscribes with a valid email and swaps the form for a success message', () => {
    render(<Footer />)
    const input = screen.getByLabelText('Email address')
    fireEvent.change(input, { target: { value: 'visitor@example.com' } })
    fireEvent.click(screen.getByRole('button', { name: NEWSLETTER.submit }))
    expect(screen.getByRole('status')).toHaveTextContent(NEWSLETTER.success)
    expect(screen.queryByLabelText('Email address')).not.toBeInTheDocument()
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('clears the error while the user keeps typing', () => {
    render(<Footer />)
    const input = screen.getByLabelText('Email address')
    fireEvent.change(input, { target: { value: 'bad' } })
    fireEvent.click(screen.getByRole('button', { name: NEWSLETTER.submit }))
    expect(screen.getByRole('alert')).toBeInTheDocument()
    fireEvent.change(input, { target: { value: 'still-bad' } })
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('renders the copyright line and the Component Dock link', () => {
    render(<Footer />)
    expect(screen.getByText(COPYRIGHT.line)).toBeInTheDocument()
    expect(screen.getByText(COPYRIGHT.creditLead)).toBeInTheDocument()
    const credit = screen.getByRole('link', { name: COPYRIGHT.creditLink })
    expect(credit).toHaveAttribute('href', COPYRIGHT.creditUrl)
  })
})
