import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import {
  ADDRESS,
  COMPONENTDOCK_HREF,
  COMPONENTDOCK_LINE,
  EMAIL,
  FOOTER,
  PHONE_DISPLAY,
} from '../content'
import { Footer } from './Footer'

describe('Footer', () => {
  it('carries the brand column, the address, the phone and the email', () => {
    render(<Footer />)
    expect(screen.getByText('Airshed')).toBeInTheDocument()
    expect(screen.getByText(FOOTER.blurb)).toBeInTheDocument()
    expect(screen.getByText(ADDRESS)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: PHONE_DISPLAY })).toHaveAttribute(
      'href',
      'tel:+15551401400',
    )
    expect(screen.getByRole('link', { name: EMAIL })).toHaveAttribute('href', `mailto:${EMAIL}`)
  })

  it('renders the three link columns with four, four and three links', () => {
    render(<Footer />)
    FOOTER.columns.forEach((column) => {
      expect(screen.getByRole('heading', { level: 3, name: column.heading })).toBeInTheDocument()
    })
    const counts = FOOTER.columns.map((column) => column.links.length)
    expect(counts).toEqual([4, 4, 3])
    expect(screen.getByRole('link', { name: 'Duct sealing' })).toHaveAttribute(
      'href',
      '#service-ducts',
    )
  })

  it('rejects an invalid address without making a request', () => {
    render(<Footer />)
    const field = screen.getByLabelText(FOOTER.newsletterLabel)
    fireEvent.change(field, { target: { value: 'nope' } })
    fireEvent.submit(document.querySelector('form') as HTMLFormElement)
    expect(screen.getByRole('alert')).toHaveTextContent(FOOTER.newsletterError)
    expect(field).toHaveAttribute('aria-invalid', 'true')
    expect(screen.queryByRole('status')).toBeNull()
  })

  it('confirms a valid address and clears the field', () => {
    render(<Footer />)
    const field = screen.getByLabelText(FOOTER.newsletterLabel)
    fireEvent.change(field, { target: { value: 'ada@example.com' } })
    fireEvent.submit(document.querySelector('form') as HTMLFormElement)
    expect(screen.getByRole('status')).toHaveTextContent(FOOTER.newsletterSuccess)
    expect(screen.queryByLabelText(FOOTER.newsletterLabel)).toBeNull()
  })

  it('credits Component Dock and keeps every other link on the page', () => {
    const { container } = render(<Footer />)
    const dock = screen.getByRole('link', { name: COMPONENTDOCK_LINE })
    expect(dock).toHaveAttribute('href', COMPONENTDOCK_HREF)
    expect(dock.getAttribute('href')).toBe('https://www.componentdock.com/')

    expect(screen.getByText(FOOTER.legal)).toHaveTextContent('© 2026 Airshed')

    container.querySelectorAll('a').forEach((anchor) => {
      const href = anchor.getAttribute('href')
      expect(href).not.toBeNull()
      expect(href).not.toBe('#')
      if (!href?.startsWith('http') && !href?.startsWith('mailto:') && !href?.startsWith('tel:')) {
        expect(href?.startsWith('#')).toBe(true)
      }
    })
  })
})
