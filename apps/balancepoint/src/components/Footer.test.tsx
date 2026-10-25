import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import {
  ADDRESS,
  COMPONENTDOCK_HREF,
  EMAIL,
  FOOTER,
  PHONE_DISPLAY,
} from '../content'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the wordmark, the blurb, the address and the contact routes', () => {
    render(<Footer />)
    expect(screen.getByText('Balancepoint')).toBeInTheDocument()
    expect(screen.getByText(FOOTER.blurb)).toBeInTheDocument()
    expect(screen.getByText(ADDRESS)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: PHONE_DISPLAY })).toHaveAttribute(
      'href',
      'tel:5551201200',
    )
    expect(screen.getByRole('link', { name: EMAIL })).toHaveAttribute('href', `mailto:${EMAIL}`)
  })

  it('renders three link lists with every link resolving on the page', () => {
    render(<Footer />)
    FOOTER.columns.forEach((column) => {
      expect(screen.getByRole('heading', { level: 3, name: column.heading })).toBeInTheDocument()
      column.links.forEach((link) => {
        const anchor = screen.getByRole('link', { name: link.label })
        expect(anchor).toHaveAttribute('href', link.href)
      })
    })
  })

  it('gives the social chips real destinations and names', () => {
    render(<Footer />)
    FOOTER.socials.forEach((social) => {
      const link = screen.getByRole('link', { name: social.label })
      expect(link).toHaveAttribute('href', social.href)
      expect(link).toHaveAttribute('rel', 'noreferrer')
    })
  })

  it('rejects an invalid newsletter address and confirms a valid one', () => {
    render(<Footer />)
    const input = screen.getByLabelText(FOOTER.newsletterLabel)
    fireEvent.change(input, { target: { value: 'not-an-email' } })
    fireEvent.click(screen.getByRole('button', { name: FOOTER.newsletterCta }))
    expect(screen.getByRole('alert')).toHaveTextContent(FOOTER.newsletterError)
    expect(input).toHaveAttribute('aria-invalid', 'true')

    fireEvent.change(input, { target: { value: 'jordan@example.com' } })
    fireEvent.click(screen.getByRole('button', { name: FOOTER.newsletterCta }))
    expect(screen.getByRole('status')).toHaveTextContent(FOOTER.newsletterSuccess)
    expect(screen.queryByRole('button', { name: FOOTER.newsletterCta })).toBeNull()
  })

  it('never imposes a fixed minimum width on the newsletter row', () => {
    render(<Footer />)
    const input = screen.getByLabelText(FOOTER.newsletterLabel)
    expect(input.className).toContain('min-w-0')
    expect(input.className).toContain('flex-1')
    expect(input.className).not.toContain('w-[373px]')
  })

  it('closes with the legal bar and the Component Dock line', () => {
    render(<Footer />)
    expect(screen.getByText(FOOTER.legal)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: FOOTER.privacy })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: FOOTER.terms })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'More templates at Component Dock' })).toHaveAttribute(
      'href',
      COMPONENTDOCK_HREF,
    )
    expect((document.querySelector('footer') as HTMLElement).className).toContain('bg-gray-900')
  })
})
