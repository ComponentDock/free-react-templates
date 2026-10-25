import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from '../components/Footer'
import { footer, site } from '../content'

describe('Footer', () => {
  it('carries the four zones, real band links and the Component Dock link', () => {
    render(<Footer />)

    expect(screen.getByText(footer.blurb)).toBeInTheDocument()
    expect(screen.getByText(site.address)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: site.phone })).toHaveAttribute('href', site.phoneHref)
    expect(screen.getByRole('link', { name: site.email })).toHaveAttribute(
      'href',
      `mailto:${site.email}`,
    )

    expect(screen.getByRole('heading', { level: 2, name: 'The studio' })).toBeInTheDocument()
    for (const link of footer.studioLinks) {
      expect(screen.getByRole('link', { name: link.label })).toHaveAttribute('href', link.href)
    }

    const docks = screen.getAllByRole('link', { name: footer.componentDockLabel })
    expect(docks).toHaveLength(2)
    for (const dock of docks) {
      expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
      expect(dock).toHaveAttribute('target', '_blank')
      expect(dock).toHaveAttribute('rel', 'noopener')
    }
    expect(screen.getByText(footer.copyright)).toBeInTheDocument()
    for (const link of footer.legalLinks) {
      expect(screen.getAllByRole('link', { name: link.label }).length).toBeGreaterThan(1)
    }
  })

  it('validates the newsletter locally and confirms without a reload', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const field = screen.getByLabelText(footer.newsletterLabel)
    expect(screen.queryByRole('status')).toBeNull()

    await user.type(field, 'nope')
    await user.click(screen.getByRole('button', { name: footer.subscribe }))
    expect(screen.getByRole('status')).toHaveTextContent(footer.newsletterError)
    expect(field).toHaveAttribute('aria-invalid', 'true')
    expect(field).toHaveValue('nope')

    await user.clear(field)
    await user.type(field, 'studio@makeready.design')
    expect(screen.queryByRole('status')).toBeNull()

    await user.click(screen.getByRole('button', { name: footer.subscribe }))
    expect(screen.getByRole('status')).toHaveTextContent(footer.newsletterSuccess)
    expect(field).toHaveValue('')
    expect(field).not.toHaveAttribute('aria-invalid')
  })
})
