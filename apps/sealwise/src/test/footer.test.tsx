import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'
import { contact, footer, site } from '../content'

describe('closing band', () => {
  it('offers exactly two routes back into the page', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { level: 2, name: contact.title })).toBeInTheDocument()
    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(2)
    expect(links[0]).toHaveAttribute('href', '#identify')
    expect(links[1]).toHaveAttribute('href', site.phoneHref)
  })
})

describe('footer', () => {
  it('renders four zones, real links and the dock line', () => {
    render(<Footer />)
    expect(screen.getByText(footer.blurb)).toBeInTheDocument()
    expect(screen.getByText(site.address)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: site.email })).toHaveAttribute(
      'href',
      `mailto:${site.email}`,
    )
    for (const column of footer.columns) {
      expect(screen.getByRole('heading', { level: 2, name: column.title })).toBeInTheDocument()
      for (const link of column.links) {
        expect(screen.getByRole('link', { name: link.label })).toHaveAttribute('href', link.href)
      }
    }
    for (const social of footer.social) {
      const link = screen.getByRole('link', { name: social.label })
      expect(link).toHaveAttribute('href', social.href)
      expect(link).toHaveAttribute('rel', 'noreferrer')
    }
    const dock = screen.getByRole('link', { name: footer.dock })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('rejects a blank and a malformed address, then confirms a good one', async () => {
    render(<Footer />)
    const input = screen.getByLabelText(footer.newsletter.placeholder)
    await userEvent.click(screen.getByRole('button', { name: footer.newsletter.submit }))
    expect(screen.getByRole('alert')).toHaveTextContent('Enter the address you want the reminders sent to.')

    await userEvent.type(input, 'not-an-address')
    await userEvent.click(screen.getByRole('button', { name: footer.newsletter.submit }))
    expect(screen.getByRole('alert')).toHaveTextContent(footer.newsletter.error)
    expect(input).toHaveAttribute('aria-invalid', 'true')

    await userEvent.clear(input)
    await userEvent.type(input, 'sam@example.com')
    await userEvent.click(screen.getByRole('button', { name: footer.newsletter.submit }))
    expect(screen.getByRole('status')).toHaveTextContent(footer.newsletter.success)
    expect(input).toHaveValue('')
  })
})
