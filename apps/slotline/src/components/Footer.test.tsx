import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from '../components/Footer'
import { footer, site } from '../content'

describe('Footer', () => {
  it('renders the three link columns, the claim and the Component Dock credit', () => {
    render(<Footer />)

    for (const column of footer.columns) {
      expect(screen.getByRole('heading', { level: 3, name: column.title })).toBeInTheDocument()
      for (const link of column.links) {
        expect(screen.getByRole('link', { name: link.label })).toHaveAttribute('href', link.href)
      }
    }

    expect(screen.getByText(footer.claim)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: footer.componentDockLabel })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
    expect(screen.getByRole('link', { name: site.email })).toHaveAttribute('href', `mailto:${site.email}`)
    expect(screen.getByText(footer.legal)).toBeInTheDocument()
  })

  it('leaves no dead anchor anywhere — the reference had three', () => {
    render(<Footer />)
    const anchors = screen.getAllByRole('link')
    for (const anchor of anchors) {
      expect(anchor.getAttribute('href')).not.toBe('#')
      expect(anchor.getAttribute('href')).not.toBeNull()
    }
  })

  it('validates the newsletter before accepting an address', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText('Email address')
    const submit = screen.getByRole('button', { name: footer.newsletterCta })

    await user.click(submit)
    expect(screen.getByRole('alert')).toHaveTextContent(footer.errors.required)
    expect(input).toHaveAttribute('aria-invalid', 'true')

    await user.type(input, 'not-an-address')
    await user.click(submit)
    expect(screen.getByRole('alert')).toHaveTextContent(footer.errors.email)

    await user.clear(input)
    await user.type(input, 'studio@example.com')
    await user.click(submit)
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    expect(screen.getByRole('status')).toHaveTextContent(footer.newsletterSuccess)
    expect(input).toHaveValue('')
    expect(input).not.toHaveAttribute('aria-describedby')
  })

  it('keeps the brand marks decorative rather than dead links', () => {
    render(<Footer />)
    const marks = document.querySelectorAll('footer li span[title]')
    expect(marks).toHaveLength(3)
    for (const mark of Array.from(marks)) {
      expect(mark.closest('a')).toBeNull()
    }
  })
})
