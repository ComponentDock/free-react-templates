import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import {
  componentDockUrl,
  footerAbout,
  newsletter,
  socialLabels,
  socials,
  usefulLinks,
} from '../data'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the About column with contact details', () => {
    render(<Footer />)

    expect(screen.getByText(footerAbout.address)).toBeInTheDocument()
    expect(screen.getByText(footerAbout.phone)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: footerAbout.email })).toHaveAttribute(
      'href',
      `mailto:${footerAbout.email}`,
    )
  })

  it('renders the Useful Links widget with both link lists', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Useful Links' })).toBeInTheDocument()
    for (const list of usefulLinks) {
      for (const item of list) {
        expect(screen.getByRole('link', { name: item })).toBeInTheDocument()
      }
    }
  })

  it('renders the newsletter widget with input, Subscribe button and socials', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: newsletter.title })).toBeInTheDocument()
    expect(screen.getByText(newsletter.text)).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toHaveAttribute(
      'placeholder',
      newsletter.placeholder,
    )
    expect(screen.getByRole('button', { name: newsletter.cta })).toBeInTheDocument()
    for (const name of socials) {
      expect(screen.getByRole('link', { name: socialLabels[name] })).toBeInTheDocument()
    }
  })

  it('shows inline validation for an invalid email and blocks submit', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByLabelText('Email address')
    await user.type(input, 'not-an-email')
    await user.click(screen.getByRole('button', { name: newsletter.cta }))

    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a valid email address.')
    expect(input).toHaveAttribute('aria-invalid', 'true')
  })

  it('accepts a valid email without an error', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByLabelText('Email address'), 'shopper@grocerly.com')
    await user.click(screen.getByRole('button', { name: newsletter.cta }))

    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toHaveAttribute('aria-invalid', 'false')
  })

  it('links the copyright bar to Component Dock', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: /More templates at Component Dock/ })).toHaveAttribute(
      'href',
      componentDockUrl,
    )
  })

  it('handles clicks on the wordmark, useful links and social icons without navigating', () => {
    render(<Footer />)

    fireEvent.click(screen.getByRole('link', { name: 'Grocerly' }))
    fireEvent.click(screen.getByRole('link', { name: usefulLinks[0][0] }))
    fireEvent.click(screen.getByRole('link', { name: socialLabels.facebook }))
  })
})
