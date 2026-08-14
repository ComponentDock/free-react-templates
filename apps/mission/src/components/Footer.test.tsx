import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { footerInfo, socialLabels, socials } from '../data'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the address column with contact details and social icons', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Address' })).toBeInTheDocument()
    expect(screen.getByText(/200, A-block, Green road, USA/)).toBeInTheDocument()
    expect(screen.getByText(/\+10 367 267 2678/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: footerInfo.email })).toHaveAttribute(
      'href',
      `mailto:${footerInfo.email}`,
    )
    for (const name of socials) {
      expect(screen.getByRole('link', { name: socialLabels[name] })).toBeInTheDocument()
    }
  })

  it('renders the Navigation column and the Newsletter form', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Navigation' })).toBeInTheDocument()
    for (const item of footerInfo.navigation) {
      expect(screen.getByRole('link', { name: item })).toBeInTheDocument()
    }

    expect(screen.getByRole('heading', { name: footerInfo.newsletterTitle })).toBeInTheDocument()
    expect(screen.getByText(footerInfo.newsletterText)).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toHaveAttribute(
      'placeholder',
      footerInfo.newsletterPlaceholder,
    )
    expect(screen.getByRole('button', { name: footerInfo.signUp })).toBeInTheDocument()
  })

  it('validates the newsletter email inline', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByLabelText('Email address')
    await user.type(input, 'not-an-email')
    await user.click(screen.getByRole('button', { name: footerInfo.signUp }))

    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a valid email address.')
    expect(input).toHaveAttribute('aria-invalid', 'true')
  })

  it('shows a success message for a valid email', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByLabelText('Email address'), 'donor@example.com')
    await user.click(screen.getByRole('button', { name: footerInfo.signUp }))

    expect(screen.getByRole('status')).toHaveTextContent('Thanks for subscribing!')
  })

  it('renders the copyright bar with the current year and the Component Dock link', () => {
    render(<Footer />)

    const year = new Date().getFullYear()
    expect(
      screen.getByText(new RegExp(`Copyright ©${year} All rights reserved`)),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('does not navigate when footer social or navigation links are clicked', () => {
    render(<Footer />)

    fireEvent.click(screen.getByRole('link', { name: 'Facebook' }))
    expect(window.location.hash).toBe('')

    fireEvent.click(screen.getByRole('link', { name: 'Rooms' }))
    expect(window.location.hash).toBe('')
  })
})
