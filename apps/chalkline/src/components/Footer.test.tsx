import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { footerColumns, legalLinks } from '../data'

describe('Footer', () => {
  it('renders the brand block, the three link columns and the newsletter', () => {
    render(<Footer />)

    footerColumns.forEach((column) => {
      const nav = screen.getByRole('navigation', { name: column.title })
      column.links.forEach((link) => {
        expect(within(nav).getByRole('link', { name: link.label })).toHaveAttribute(
          'href',
          link.href,
        )
      })
    })
    expect(screen.getByRole('form', { name: 'Newsletter' })).toBeInTheDocument()
  })

  it('carries the mail address and the licence line', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'hello@chalklinelms.org' })).toHaveAttribute(
      'href',
      'mailto:hello@chalklinelms.org',
    )
    expect(screen.getByText(/AGPL-3.0 · the trademark/)).toBeInTheDocument()
  })

  it('confirms a valid subscription without a network call', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByLabelText('Email address'), 'registrar@example.edu')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('status')).toHaveTextContent('You are on the list')
  })

  it('stays silent when the browser rejects the address', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    // Bypass the browser's own validation so the handler's guard is exercised.
    const form = screen.getByRole('form', { name: 'Newsletter' }) as HTMLFormElement
    form.noValidate = true

    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('renders the bottom bar with the legal links and the Component Dock credit', () => {
    render(<Footer />)

    legalLinks.forEach((link) => {
      expect(screen.getByRole('link', { name: link.label })).toBeInTheDocument()
    })
    expect(screen.getByText('© 2026 Chalkline. All rights reserved.')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'More templates at Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
