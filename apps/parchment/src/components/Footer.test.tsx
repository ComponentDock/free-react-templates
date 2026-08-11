import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer, footerSocials } from './Footer'
import {
  copyrightDivider,
  copyrightText,
  footerAboutHeading,
  footerAboutParagraphs,
  footerCredit,
  newsletterBlurb,
  newsletterEmailLabel,
  newsletterHeading,
  newsletterSendLabel,
  newsletterSuccess,
  socialLabels,
} from '../data'

describe('Footer', () => {
  it('renders the about column with heading and paragraphs', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: footerAboutHeading })).toBeInTheDocument()
    for (const paragraph of footerAboutParagraphs) {
      expect(screen.getByText(paragraph)).toBeInTheDocument()
    }
  })

  it('renders the newsletter form and swaps to a success message on submit', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    expect(screen.getByRole('heading', { name: newsletterHeading })).toBeInTheDocument()
    expect(screen.getByText(newsletterBlurb)).toBeInTheDocument()

    const input = screen.getByRole('textbox', { name: newsletterEmailLabel })
    await user.type(input, 'reader@example.com')
    await user.click(screen.getByRole('button', { name: newsletterSendLabel }))

    expect(screen.getByRole('status')).toHaveTextContent(newsletterSuccess)
    expect(screen.queryByRole('textbox', { name: newsletterEmailLabel })).not.toBeInTheDocument()
  })

  it('renders the five social brand links and the copyright bar', () => {
    const { container } = render(<Footer />)

    for (const name of footerSocials) {
      expect(screen.getByRole('link', { name: socialLabels[name] })).toBeInTheDocument()
    }
    // Five brand icons + the newsletter mail icon.
    expect(container.querySelectorAll('svg')).toHaveLength(6)

    expect(screen.getByText(copyrightText)).toBeInTheDocument()
    expect(screen.getByText(footerCredit)).toBeInTheDocument()
    expect(screen.getByText(copyrightDivider)).toBeInTheDocument()
  })
})
