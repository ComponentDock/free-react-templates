import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import {
  aboutText,
  copyrightText,
  creditText,
  emailPlaceholder,
  followHeading,
  instagramSeeds,
  newsletterHeading,
  subscribeLabel,
} from '../data'

describe('Footer', () => {
  it('renders the about, newsletter, instagram and follow-us columns', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByText(aboutText)).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: newsletterHeading })).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toHaveAttribute('placeholder', emailPlaceholder)
    expect(screen.getByRole('button', { name: subscribeLabel })).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: 'Instagram Feed' })).toBeInTheDocument()
    expect(screen.getAllByRole('img', { name: 'Instagram post' })).toHaveLength(
      instagramSeeds.length,
    )

    expect(screen.getByRole('heading', { name: followHeading })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Dribbble' })).toBeInTheDocument()
  })

  it('renders the copyright bar', () => {
    render(<Footer />)

    expect(screen.getByText(copyrightText)).toBeInTheDocument()
    expect(screen.getByText(creditText)).toBeInTheDocument()
  })

  it('shows a validation error for an empty or invalid email', () => {
    render(<Footer />)

    fireEvent.click(screen.getByRole('button', { name: subscribeLabel }))
    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a valid email address.')
    expect(screen.getByLabelText('Email address')).toHaveAttribute('aria-invalid', 'true')

    fireEvent.change(screen.getByLabelText('Email address'), {
      target: { value: 'not-an-email' },
    })
    fireEvent.click(screen.getByRole('button', { name: subscribeLabel }))
    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a valid email address.')
  })

  it('shows a success message and resets the field for a valid email', () => {
    render(<Footer />)

    const input = screen.getByLabelText('Email address')
    fireEvent.change(input, { target: { value: 'reader@example.com' } })
    fireEvent.click(screen.getByRole('button', { name: subscribeLabel }))

    expect(screen.getByRole('status')).toHaveTextContent('Thanks for subscribing!')
    expect(input).toHaveValue('')
    expect(input).not.toHaveAttribute('aria-invalid')
  })
})
