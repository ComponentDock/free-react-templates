import { createEvent, fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import {
  COPYRIGHT,
  EMAIL_ERROR,
  FOOTER_LINKS,
  NEWSLETTER,
  NEWSLETTER_LABEL,
  SOCIALS,
} from '../lib/site'

function emailField() {
  return screen.getByLabelText(NEWSLETTER_LABEL)
}

function submitForm() {
  const form = emailField().closest('form') as HTMLFormElement
  const event = createEvent.submit(form)
  fireEvent(form, event)
}

describe('Footer', () => {
  it('renders the brand blurb and one link per social network', () => {
    render(<Footer />)

    expect(screen.getByText(FOOTER_LINKS.about)).toBeInTheDocument()
    for (const key of SOCIALS) {
      expect(screen.getByRole('link', { name: key })).toBeInTheDocument()
    }
  })

  it('renders the Navigation and Services columns', () => {
    render(<Footer />)

    for (const item of FOOTER_LINKS.navigation) {
      expect(screen.getByRole('link', { name: item })).toBeInTheDocument()
    }
    for (const item of FOOTER_LINKS.services) {
      expect(screen.getByRole('link', { name: item })).toBeInTheDocument()
    }
  })

  it('cancels the newsletter submit so the page never navigates', () => {
    render(<Footer />)
    const form = emailField().closest('form') as HTMLFormElement
    const event = createEvent.submit(form)

    fireEvent(form, event)

    expect(event.defaultPrevented).toBe(true)
  })

  it('rejects a malformed address and keeps the form', () => {
    render(<Footer />)

    fireEvent.change(emailField(), { target: { value: 'not-an-address' } })
    submitForm()

    expect(screen.getByRole('alert')).toHaveTextContent(EMAIL_ERROR)
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
    expect(emailField()).toBeInTheDocument()
  })

  it('accepts a valid address and swaps the form for the confirmation', () => {
    render(<Footer />)

    fireEvent.change(emailField(), { target: { value: 'visitor@example.com' } })
    submitForm()

    expect(screen.getByRole('status')).toHaveTextContent(NEWSLETTER.success)
    expect(screen.queryByLabelText(NEWSLETTER_LABEL)).not.toBeInTheDocument()
  })

  it('clears the error as soon as the visitor types again', () => {
    render(<Footer />)

    fireEvent.change(emailField(), { target: { value: 'broken' } })
    submitForm()
    expect(screen.getByRole('alert')).toBeInTheDocument()

    fireEvent.change(emailField(), { target: { value: 'broken@example.com' } })

    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    expect(emailField()).toHaveValue('broken@example.com')
  })

  it('credits Component Dock with the only external link on the page', () => {
    const { container } = render(<Footer />)
    const external = Array.from(container.querySelectorAll('a[href^="http"]'))

    expect(external).toHaveLength(1)
    expect(external[0]).toHaveAttribute('href', COPYRIGHT.creditUrl)
    expect(external[0]).toHaveTextContent(COPYRIGHT.creditLink)
    expect(screen.getByText(COPYRIGHT.line)).toBeInTheDocument()
  })
})
