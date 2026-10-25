import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import {
  ADDRESS,
  COMPONENTDOCK_HREF,
  EMAIL,
  FOOTER,
  PHONE_HREF,
  PHONE_LABEL,
} from '../content'

describe('Footer', () => {
  it('renders the brand block, three link columns and the newsletter', () => {
    render(<Footer />)

    for (const column of FOOTER.columns) {
      expect(screen.getByRole('heading', { name: column.heading })).toBeInTheDocument()
      for (const link of column.links) {
        expect(screen.getAllByRole('link', { name: link.label }).length).toBeGreaterThan(0)
      }
    }
    expect(screen.getByText(FOOTER.blurb)).toBeInTheDocument()
    expect(screen.getByText(ADDRESS)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: PHONE_LABEL })).toHaveAttribute('href', PHONE_HREF)
    expect(screen.getByRole('link', { name: EMAIL })).toHaveAttribute('href', `mailto:${EMAIL}`)
    expect(screen.getByRole('heading', { name: FOOTER.newsletterHeading })).toBeInTheDocument()
    expect(screen.getByLabelText(FOOTER.newsletterLabel)).toHaveAttribute(
      'placeholder',
      FOOTER.newsletterPlaceholder,
    )
    expect(screen.getByText(FOOTER.legal)).toBeInTheDocument()
  })

  it('links Component Dock as the attribution', () => {
    render(<Footer />)
    const dock = screen.getByRole('link', { name: FOOTER.componentDockLabel })
    expect(dock).toHaveAttribute('href', COMPONENTDOCK_HREF)
    expect(dock).toHaveClass('font-semibold')
  })

  it('draws the three social tiles inline with real destinations', () => {
    render(<Footer />)
    for (const social of FOOTER.socials) {
      const tile = screen.getByRole('link', { name: social.label })
      expect(tile).toHaveAttribute('href', social.href)
      expect(tile).not.toHaveAttribute('href', '#')
      expect(tile.querySelector('path')).toHaveAttribute('d')
    }
  })

  it('rejects a malformed address, shows the error and returns focus', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const field = screen.getByLabelText(FOOTER.newsletterLabel)
    await user.type(field, 'not-an-email')
    await user.click(screen.getByRole('button', { name: FOOTER.newsletterSubmit }))

    expect(screen.getByText(FOOTER.newsletterError)).toBeInTheDocument()
    expect(field).toHaveAttribute('aria-invalid', 'true')
    expect(field).toHaveAttribute('aria-describedby', 'newsletter-error')
    expect(document.activeElement).toBe(field)
    expect(screen.queryByRole('status')).toBeNull()
  })

  it('confirms a valid subscribe, clears the field and calls nothing', () => {
    render(<Footer />)

    fireEvent.change(screen.getByLabelText(FOOTER.newsletterLabel), {
      target: { value: 'neighbour@example.com' },
    })
    fireEvent.submit(screen.getByRole('button', { name: FOOTER.newsletterSubmit }).closest('form')!)

    expect(screen.getByRole('status')).toHaveTextContent(FOOTER.newsletterSuccess)
    expect(screen.queryByLabelText(FOOTER.newsletterLabel)).toBeNull()
    expect(screen.queryByText(FOOTER.newsletterError)).toBeNull()
  })
})
