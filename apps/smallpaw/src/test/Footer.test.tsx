import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Footer } from '../components/Footer'
import { CONTACT, FOOTER_PRACTICE, SOCIAL } from '../data'

afterEach(() => {
  vi.useRealTimers()
})

describe('Footer', () => {
  it('renders the brand block, the three columns and the newsletter', () => {
    render(<Footer />)

    expect(screen.getByRole('img', { name: /Smallpaw/ })).toBeInTheDocument()
    expect(screen.getByText(CONTACT.address)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: CONTACT.phoneLabel })).toHaveAttribute(
      'href',
      'tel:01743660214',
    )
    expect(screen.getByRole('link', { name: CONTACT.email })).toHaveAttribute(
      'href',
      `mailto:${CONTACT.email}`,
    )

    FOOTER_PRACTICE.forEach((link) => {
      expect(screen.getByRole('link', { name: link.label })).toHaveAttribute(
        'href',
        link.target as string,
      )
    })
    expect(screen.getByRole('heading', { level: 3, name: 'Practice' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Company' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Support' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Stay Updated' })).toBeInTheDocument()
    expect(screen.queryByText('Spaces')).toBeNull()
  })

  it('renders labels without a destination as aria-disabled text, never a dead anchor', () => {
    render(<Footer />)

    expect(document.querySelectorAll('a[href="#"]')).toHaveLength(0)
    expect(screen.queryByRole('link', { name: 'About' })).toBeNull()
    expect(screen.getByText('About')).toHaveAttribute('aria-disabled', 'true')
    expect(screen.getByText('Blog')).toHaveAttribute('aria-disabled', 'true')
    expect(screen.getByText('Privacy Policy')).toHaveAttribute('aria-disabled', 'true')
    expect(screen.getByText('Terms of Service')).toHaveAttribute('aria-disabled', 'true')
  })

  it('points every social tile at a real external destination', () => {
    render(<Footer />)

    const tiles = screen.getAllByRole('link', { name: /^Smallpaw on / })
    expect(tiles).toHaveLength(3)
    tiles.forEach((tile) => {
      expect(tile.getAttribute('href')).toMatch(/^https:\/\//)
      expect(tile).toHaveAttribute('rel', 'noreferrer')
      expect(tile).toHaveAttribute('target', '_blank')
    })
    expect(tiles.map((tile) => tile.getAttribute('href'))).toEqual(
      SOCIAL.map((social) => social.href),
    )
  })

  it('carries the house Component Dock credit in the legal bar', () => {
    render(<Footer />)

    const credit = screen.getByRole('link', { name: 'Made with Component Dock' })
    expect(credit).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(screen.getByText('© 2026 Smallpaw. All rights reserved.')).toBeVisible()
  })

  it('rejects an empty newsletter submit without navigating', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByText('This field is required')).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByLabelText('Email address')).toHaveAttribute(
      'aria-describedby',
      'footer-newsletter-error',
    )
    expect(screen.queryByRole('status')).toBeNull()
  })

  it('rejects a malformed address and clears the error while typing', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const field = screen.getByLabelText('Email address')

    await user.type(field, 'reception@')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument()
    expect(field).toHaveClass('border-red-500')

    await user.type(field, 's')
    expect(screen.queryByText('Please enter a valid email address')).toBeNull()
    expect(field).toHaveAttribute('aria-invalid', 'false')
    expect(field).not.toHaveAttribute('aria-describedby')
  })

  it('confirms a valid address, clears the field and clears the toast', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const field = screen.getByLabelText('Email address')

    await user.type(field, 'diane@smallpaw.example')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(field).toHaveValue('')
    expect(screen.getByRole('status')).toHaveTextContent(
      'Subscribed — check your inbox to confirm.',
    )
  })

  it('keeps the columns inside one grid so the three heads share a baseline', () => {
    render(<Footer />)

    const practice = screen.getByRole('heading', { level: 3, name: 'Practice' }).parentElement
    const grid = practice?.parentElement
    expect(grid).toHaveClass('grid', 'sm:grid-cols-3')
    expect(within(grid as HTMLElement).getAllByRole('heading', { level: 3 })).toHaveLength(3)
  })
})
