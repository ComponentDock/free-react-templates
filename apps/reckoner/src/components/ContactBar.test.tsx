import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ContactBar } from './ContactBar'

describe('ContactBar', () => {
  it('renders phone number and email with proper links', () => {
    render(<ContactBar />)

    expect(screen.getByText('+123 456 7890')).toBeInTheDocument()
    expect(screen.getByText('info@reckoner.com')).toBeInTheDocument()

    const phoneLink = screen.getByText('+123 456 7890').closest('a')
    expect(phoneLink).toHaveAttribute('href', 'tel:+1234567890')

    const emailLink = screen.getByText('info@reckoner.com').closest('a')
    expect(emailLink).toHaveAttribute('href', 'mailto:info@reckoner.com')
  })

  it('renders social media icons with proper links', () => {
    render(<ContactBar />)

    const facebookLink = screen.getByLabelText('Facebook')
    expect(facebookLink).toHaveAttribute('href', 'https://facebook.com')
    expect(facebookLink).toHaveAttribute('target', '_blank')
    expect(facebookLink).toHaveAttribute('rel', 'noopener noreferrer')

    const twitterLink = screen.getByLabelText('Twitter')
    expect(twitterLink).toHaveAttribute('href', 'https://twitter.com')
    expect(twitterLink).toHaveAttribute('target', '_blank')

    const linkedinLink = screen.getByLabelText('LinkedIn')
    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com')
    expect(linkedinLink).toHaveAttribute('target', '_blank')
  })

  it('has proper ARIA labels for social icons', () => {
    render(<ContactBar />)

    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
  })
})
