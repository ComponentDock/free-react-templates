import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { FOOTER } from '../content'

describe('Footer', () => {
  it('is a contentinfo landmark with the brand column and three link columns', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByText('Closeknit')).toBeInTheDocument()
    expect(within(footer).getByText(FOOTER.blurb)).toBeInTheDocument()

    for (const column of FOOTER.columns) {
      expect(
        within(footer).getByRole('heading', { level: 2, name: column.title }),
      ).toBeInTheDocument()
      for (const link of column.links) {
        expect(within(footer).getByRole('link', { name: link.label })).toHaveAttribute(
          'href',
          link.href,
        )
      }
    }
  })

  it('uses a digits-only phone URI and a real mailbox', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: FOOTER.phone })).toHaveAttribute(
      'href',
      'tel:5035550142',
    )
    expect(screen.getByRole('link', { name: FOOTER.email })).toHaveAttribute(
      'href',
      'mailto:hello@closeknit.app',
    )
    expect(screen.getByText(FOOTER.address)).toBeInTheDocument()
  })

  it('links every social tile to a real host', () => {
    render(<Footer />)

    const socials = screen.getAllByRole('link', { name: /Follow Closeknit on/ })
    expect(socials).toHaveLength(3)
    for (const social of socials) {
      expect(social.getAttribute('href')).toMatch(/^https:\/\//)
      expect(social).toHaveAttribute('rel', 'noreferrer')
    }
  })

  it('credits Component Dock and renders the legal bar', () => {
    render(<Footer />)

    expect(screen.getByText('© 2026 Closeknit. All rights reserved.')).toBeInTheDocument()
    for (const link of FOOTER.legal) {
      expect(screen.getByRole('link', { name: link.label })).toHaveAttribute('href', link.href)
    }
    expect(screen.getByRole('link', { name: /More templates at Component Dock/ })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('blocks an empty or malformed address and names the problem', () => {
    render(<Footer />)

    const input = screen.getByLabelText('Email address')
    fireEvent.submit(input.closest('form') as HTMLFormElement)

    expect(screen.getByRole('alert')).toHaveTextContent('Enter a valid email address.')
    expect(input).toHaveAttribute('aria-invalid', 'true')

    fireEvent.change(input, { target: { value: 'not-an-email' } })
    fireEvent.submit(input.closest('form') as HTMLFormElement)
    expect(screen.getByRole('alert')).toBeInTheDocument()
    expect(screen.queryByRole('status')).toBeNull()
  })

  it('confirms a valid address inline without a request', () => {
    render(<Footer />)

    const input = screen.getByLabelText('Email address')
    fireEvent.change(input, { target: { value: 'lea@closeknit.app' } })
    fireEvent.submit(input.closest('form') as HTMLFormElement)

    expect(screen.getByRole('status')).toHaveTextContent(
      'Thanks — check your inbox for the first note.',
    )
    expect(screen.queryByRole('alert')).toBeNull()
    expect(input).toHaveValue('')
    expect(input).toHaveAttribute('aria-invalid', 'false')
  })
})
