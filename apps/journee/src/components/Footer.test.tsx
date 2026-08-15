import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import {
  componentDockName,
  componentDockUrl,
  copyrightPrefix,
  footerAbout,
  footerNavLinks,
  instafeedImages,
  newsletterParagraph,
  newsletterPlaceholder,
  newsletterSubmitLabel,
  socialLabel,
} from '../data'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the About Agency blurb and Navigation Links', () => {
    render(<Footer />)
    expect(screen.getByText(footerAbout)).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Navigation Links' })).toBeInTheDocument()
    for (const link of footerNavLinks) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('renders the newsletter form and clears the email on submit', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    expect(screen.getByText(newsletterParagraph)).toBeInTheDocument()

    const input = screen.getByLabelText(newsletterPlaceholder)
    await user.type(input, 'traveler@example.com')
    expect(input).toHaveValue('traveler@example.com')

    await user.click(screen.getByRole('button', { name: newsletterSubmitLabel }))
    expect(input).toHaveValue('')
  })

  it('renders the Instafeed grid with eight thumbnails', () => {
    const { container } = render(<Footer />)
    expect(container.querySelectorAll('img')).toHaveLength(instafeedImages.length)
  })

  it('credits Component Dock and renders the social icons', () => {
    render(<Footer />)
    expect(screen.getByText(new RegExp(copyrightPrefix))).toBeInTheDocument()
    const credit = screen.getByRole('link', { name: componentDockName })
    expect(credit).toHaveAttribute('href', componentDockUrl)

    expect(screen.getByRole('link', { name: `${socialLabel}: Facebook` })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: `${socialLabel}: Twitter` })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: `${socialLabel}: Website` })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: `${socialLabel}: Behance` })).toBeInTheDocument()
  })
})
