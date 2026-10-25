import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import { Contact } from '../components/Contact'
import { Footer, NEWSLETTER_KEY } from '../components/Footer'
import { contact, footer, site } from '../content'

describe('Contact', () => {
  it('closes the page with a white button and a two-pixel outline call button', () => {
    render(<Contact />)

    const primary = screen.getByRole('link', { name: contact.primary })
    expect(primary).toHaveAttribute('href', '#quote')
    expect(primary).toHaveClass('bg-white', 'text-primary-700')

    const secondary = screen.getByRole('link', { name: contact.secondary })
    expect(secondary).toHaveAttribute('href', site.phoneHref)
    expect(secondary).toHaveClass('border-2', 'border-white/40')
    expect(screen.getByRole('heading', { level: 2, name: contact.title })).toBeInTheDocument()
  })
})

describe('Footer', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('renders the brand block, three link columns and the newsletter', () => {
    render(<Footer />)

    expect(screen.getByText(footer.blurb)).toBeInTheDocument()
    expect(screen.getByText(site.address)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: site.email })).toHaveAttribute(
      'href',
      `mailto:${site.email}`,
    )

    footer.columns.forEach((column) => {
      expect(screen.getByRole('heading', { level: 3, name: column.heading })).toBeInTheDocument()
      column.links.forEach((link) => {
        expect(screen.getAllByRole('link', { name: link.label }).length).toBeGreaterThan(0)
      })
    })

    expect(screen.getByRole('heading', { level: 3, name: footer.newsletter.heading })).toBeInTheDocument()
    expect(screen.getByPlaceholderText(footer.newsletter.placeholder)).toHaveAttribute(
      'type',
      'email',
    )
    expect(screen.getByText(footer.copyright)).toBeInTheDocument()
  })

  it('links Component Dock and never a bare hash', () => {
    const { container } = render(<Footer />)

    const dock = screen.getByRole('link', { name: footer.attribution })
    expect(dock).toHaveAttribute('href', site.componentDock)

    const anchors = Array.from(container.querySelectorAll('a[href]'))
    expect(anchors.filter((anchor) => anchor.getAttribute('href') === '#')).toHaveLength(0)
  })

  it('stores a subscribed address and shows a confirmation', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByPlaceholderText(footer.newsletter.placeholder), 'ada@example.com')
    await user.click(screen.getByRole('button', { name: footer.newsletter.button }))

    expect(localStorage.getItem(NEWSLETTER_KEY)).toBe('ada@example.com')
    expect(screen.getByTestId('newsletter-sent')).toHaveTextContent(footer.newsletter.success)
  })

  it('ignores a blank submission', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const form = screen.getByRole('button', { name: footer.newsletter.button }).closest('form')
    form?.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }))

    await user.click(screen.getByRole('button', { name: footer.newsletter.button }))

    expect(localStorage.getItem(NEWSLETTER_KEY)).toBeNull()
    expect(screen.queryByTestId('newsletter-sent')).toBeNull()
  })
})
