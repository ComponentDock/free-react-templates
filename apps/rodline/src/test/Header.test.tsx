import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Header } from '../components/Header'
import { OfferBar } from '../components/OfferBar'
import { contact, offer } from '../content'

describe('OfferBar', () => {
  it('carries the price lead, the qualifier and the phone', () => {
    render(<OfferBar />)

    expect(screen.getByText(offer.lead)).toBeInTheDocument()
    expect(screen.getByText(offer.qualifier)).toHaveClass('hidden', 'sm:inline')
    expect(screen.getByRole('link', { name: contact.phone })).toHaveAttribute(
      'href',
      contact.phoneHref,
    )
  })

  it('removes itself when dismissed and remembers nothing', async () => {
    const user = userEvent.setup()
    render(<OfferBar />)

    await user.click(screen.getByRole('button', { name: 'Dismiss offer' }))

    expect(screen.queryByText(offer.lead)).toBeNull()
    expect(window.localStorage.getItem('offer-dismissed')).toBeNull()
  })
})

describe('Header', () => {
  it('is one wordmark and one call action, with no navigation', () => {
    render(<Header />)

    const banner = screen.getByRole('banner')
    expect(banner).toHaveClass('sticky', 'top-0', 'z-50')
    expect(banner.querySelector('.lg\\:h-18')).not.toBeNull()

    expect(screen.getByRole('link', { name: 'Rodline home' })).toHaveAttribute('href', '#top')

    const hrefs = screen.getAllByRole('link').map((link) => link.getAttribute('href'))
    expect(hrefs).toContain(contact.phoneHref)
    const call = screen.getByText(contact.phone).closest('a')
    expect(call).toHaveClass('rounded-lg', 'bg-primary-600')
    expect(screen.getByText('Call now')).toHaveClass('sm:hidden')
    expect(screen.queryByRole('navigation')).toBeNull()
    expect(screen.queryByRole('button')).toBeNull()
  })
})
