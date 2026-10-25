import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Footer } from '../components/Footer'
import { CONTACT, FOOTER_COMPANY, FOOTER_SERVICES, FOOTER_SUPPORT } from '../data'

afterEach(() => {
  vi.useRealTimers()
  vi.unstubAllGlobals()
})

describe('Footer', () => {
  it('renders the brand block, the three columns and the newsletter', () => {
    render(<Footer />)

    expect(screen.getByRole('img', { name: 'Plantroom Mechanical' })).toBeInTheDocument()
    expect(screen.getByText(CONTACT.address)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: CONTACT.phoneLabel })).toHaveAttribute(
      'href',
      'tel:5551001000',
    )
    expect(screen.getByRole('link', { name: CONTACT.email })).toHaveAttribute(
      'href',
      'mailto:service@plantroom.example',
    )

    FOOTER_SERVICES.forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument()
    })
    FOOTER_COMPANY.forEach((link) => {
      expect(screen.getByRole('link', { name: link.label })).toHaveAttribute('href', link.target)
    })
    expect(screen.getByRole('heading', { level: 3, name: 'Stay Updated' })).toBeInTheDocument()
  })

  it('renders labels without a destination as text instead of a dead anchor', () => {
    render(<Footer />)

    expect(document.querySelectorAll('a[href="#"]')).toHaveLength(0)

    const privacy = FOOTER_SUPPORT.find((link) => link.label === 'Privacy')
    expect(privacy?.target).toBeNull()
    expect(screen.queryByRole('link', { name: 'Privacy' })).not.toBeInTheDocument()
    expect(screen.getByText('Privacy')).toBeInTheDocument()
    expect(screen.getByText('Terms')).toBeInTheDocument()
    expect(screen.getByText('Terms of Service')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact')
  })

  it('points every social tile at a real external destination', () => {
    render(<Footer />)

    const social = screen.getAllByRole('link', { name: /^Plantroom / })
    expect(social).toHaveLength(3)
    social.forEach((link) => {
      expect(link.getAttribute('href')).toMatch(/^https:\/\//)
      expect(link).toHaveAttribute('rel', 'noreferrer')
    })
  })

  it('carries the house Component Dock credit in the legal bar', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Made with Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
    expect(
      screen.getByText('© 2026 Plantroom Mechanical. All rights reserved.'),
    ).toBeInTheDocument()
  })

  it('rejects an empty newsletter submit without navigating', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByText('This field is required')).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toHaveAttribute('aria-invalid', 'true')
    expect(screen.queryByRole('status')).toBeNull()
  })

  it('rejects a malformed address and clears the error on correction', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const field = screen.getByLabelText('Email address')

    await user.type(field, 'sam@company')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument()
    expect(field).toHaveAttribute('aria-describedby', 'footer-newsletter-error')
    expect(field).toHaveClass('border-red-500')

    await user.type(field, '.com')

    expect(screen.queryByText('Please enter a valid email address')).toBeNull()
    expect(field).not.toHaveAttribute('aria-invalid', 'true')
  })

  it('confirms a valid subscription and clears the field', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const field = screen.getByLabelText('Email address')

    await user.type(field, 'dana@company.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(field).toHaveValue('')
    expect(screen.getByRole('status')).toHaveTextContent(
      'Subscribed — check your inbox to confirm.',
    )
  })

  it('clears the toast after the house 4 s', () => {
    vi.useFakeTimers()
    render(<Footer />)

    fireEvent.change(screen.getByLabelText('Email address'), {
      target: { value: 'dana@company.com' },
    })
    fireEvent.submit(screen.getByRole('button', { name: 'Subscribe' }).closest('form')!)
    expect(screen.getByRole('status')).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(4000)
    })
    expect(screen.queryByRole('status')).toBeNull()
  })

  it('resets a pending toast timer on a second submit', () => {
    vi.useFakeTimers()
    render(<Footer />)
    const form = screen.getByRole('button', { name: 'Subscribe' }).closest('form')!

    fireEvent.change(screen.getByLabelText('Email address'), {
      target: { value: 'dana@company.com' },
    })
    fireEvent.submit(form)
    fireEvent.change(screen.getByLabelText('Email address'), {
      target: { value: 'bill@company.com' },
    })
    fireEvent.submit(form)

    expect(screen.getAllByRole('status')).toHaveLength(1)

    act(() => {
      vi.advanceTimersByTime(3999)
    })
    expect(screen.getByRole('status')).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(1)
    })
    expect(screen.queryByRole('status')).toBeNull()
  })

  it('clears a pending toast timer on unmount', () => {
    vi.useFakeTimers()
    const { unmount } = render(<Footer />)

    fireEvent.change(screen.getByLabelText('Email address'), {
      target: { value: 'dana@company.com' },
    })
    fireEvent.submit(screen.getByRole('button', { name: 'Subscribe' }).closest('form')!)
    unmount()

    expect(vi.getTimerCount()).toBe(0)
  })
})
