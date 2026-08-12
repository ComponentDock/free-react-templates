import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ABOUT_TEXT, COMPONENT_DOCK_URL, NEWSLETTER_TEXT, SOCIAL_LINKS } from '../data'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the three widget columns with headings', () => {
    const { container } = render(<Footer />)
    const footer = container.querySelector('footer')!
    expect(footer).toHaveAttribute('id', 'contact')
    expect(footer).toHaveClass('bg-night')
    expect(screen.getByRole('heading', { level: 3, name: 'About Me' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Newsletter' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Follow Me' })).toBeInTheDocument()
    expect(screen.getByText(ABOUT_TEXT)).toBeInTheDocument()
    expect(screen.getByText(NEWSLETTER_TEXT)).toBeInTheDocument()
  })

  it('credits Component Dock with a link to the site', () => {
    render(<Footer />)
    const credit = screen.getByRole('link', { name: 'Component Dock' })
    expect(credit).toHaveAttribute('href', COMPONENT_DOCK_URL)
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`Copyright © ${year}`))).toBeInTheDocument()
  })

  it('subscribes via the newsletter form without navigating', () => {
    render(<Footer />)
    const input = screen.getByLabelText('Email address')
    expect(input).toHaveAttribute('type', 'email')
    expect(input).toHaveAttribute('placeholder', 'Enter email address')
    fireEvent.submit(screen.getByRole('form', { name: 'Newsletter subscription' }))
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
  })

  it('renders the four social links with brand icons', () => {
    render(<Footer />)
    for (const social of SOCIAL_LINKS) {
      const link = screen.getByRole('link', { name: social.label })
      expect(link).toHaveAttribute('href', social.href)
      expect(link.querySelector('svg')).not.toBeNull()
    }
  })
})
