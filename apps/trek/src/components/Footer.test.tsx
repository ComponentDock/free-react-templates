import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import {
  componentDockName,
  componentDockUrl,
  emailLabel,
  instagramImages,
  instagramTitle,
  madeWithPrefix,
  newsletterSuccess,
  newsletterTitle,
  quickLinks,
  quickLinksTitle,
  sendLabel,
} from '../data'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the Instagram grid, quick links, newsletter, and Component Dock credit', () => {
    const { container } = render(<Footer />)

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: instagramTitle })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /Instagram photo/ })).toHaveLength(
      instagramImages.length,
    )
    expect(container.querySelectorAll('img')).toHaveLength(instagramImages.length)

    expect(screen.getByRole('navigation', { name: quickLinksTitle })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: quickLinksTitle })).toBeInTheDocument()
    for (const link of quickLinks) {
      expect(screen.getByText(link)).toBeInTheDocument()
    }

    expect(screen.getByRole('heading', { name: newsletterTitle })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: emailLabel })).toBeInTheDocument()

    const dock = screen.getByRole('link', { name: componentDockName })
    expect(dock).toHaveAttribute('href', componentDockUrl)
    expect(screen.getByText(new RegExp(madeWithPrefix))).toBeInTheDocument()
  })

  it('submits the newsletter email and replaces the form with a success message', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByLabelText(emailLabel), 'hiker@example.com')
    await user.click(screen.getByRole('button', { name: sendLabel }))

    expect(screen.getByRole('status')).toHaveTextContent(newsletterSuccess)
    expect(screen.queryByLabelText(emailLabel)).not.toBeInTheDocument()
  })

  it('keeps the form when the email is empty', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.click(screen.getByRole('button', { name: sendLabel }))

    expect(screen.getByLabelText(emailLabel)).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('never references the source template by name', () => {
    render(<Footer />)
    expect(document.body.textContent).not.toMatch(/colorlib/i)
  })
})
