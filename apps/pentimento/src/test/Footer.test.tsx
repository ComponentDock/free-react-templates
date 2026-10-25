import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from '../components/Footer'
import { site } from '../content'

describe('Footer', () => {
  it('links Component Dock and nothing dead', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Component Dock — more templates' })).toHaveAttribute(
      'href',
      site.componentDock,
    )
    expect(screen.getByRole('link', { name: 'More templates at Component Dock' })).toHaveAttribute(
      'href',
      site.componentDock,
    )
    expect(screen.getByRole('link', { name: site.phone })).toHaveAttribute('href', site.phoneHref)
    const emailLinks = screen.getAllByRole('link', { name: site.email })
    expect(emailLinks.length).toBeGreaterThanOrEqual(1)
    expect(emailLinks[0]).toHaveAttribute('href', `mailto:${site.email}`)
    expect(screen.getByText(site.address)).toBeInTheDocument()
  })

  it('re-points the dead Spaces column at the bands that exist', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { level: 2, name: 'The work' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Recent paintings' })).toHaveAttribute('href', '#works')
    expect(screen.getByRole('link', { name: 'Statement' })).toHaveAttribute('href', '#statement')
    expect(screen.getByRole('link', { name: 'Exhibitions' })).toHaveAttribute('href', '#exhibitions')
    expect(screen.getByRole('link', { name: 'Acquiring work' })).toHaveAttribute('href', '#acquire')

    const hrefs = Array.from(document.querySelectorAll('footer a')).map((link) =>
      link.getAttribute('href'),
    )
    expect(hrefs).not.toContain('#')
    expect(hrefs).not.toContain('#spaces')
  })

  it('rejects an incomplete address', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByLabelText('E-mail address'), 'not-an-address')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('alert')).toHaveTextContent(
      'That address looks incomplete. Check it and send again.',
    )
    expect(screen.queryByRole('status')).toBeNull()
  })

  it('confirms a good address without reloading the page', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByLabelText('E-mail address'), 'collector@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('status')).toHaveTextContent('Added. Studio notes arrive rarely')
    expect(screen.queryByRole('alert')).toBeNull()
  })

  it('keeps the legal labels as text, because there is no second page to send them to', () => {
    render(<Footer />)

    expect(screen.getByText('Privacy Policy')).toBeInTheDocument()
    expect(screen.getByText('Terms of Service')).toBeInTheDocument()
    expect(screen.getByText('Style Guide')).toBeInTheDocument()
    expect(screen.getByText(/© 2026 Maren Kjeldsen/)).toBeInTheDocument()
  })
})
