import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import {
  COMPONENT_DOCK,
  COPYRIGHT,
  FOLLOW_TITLE,
  FOOTER_ABOUT,
  FOOTER_FEATURES,
  FOOTER_FEATURES_TITLE,
  NEWSLETTER_BUTTON,
  NEWSLETTER_PLACEHOLDER,
  NEWSLETTER_TITLE,
  SOCIAL_LINKS,
} from '../data'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand, about blurb and features links', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByRole('link', { name: /^Paragon$/ })).toBeInTheDocument()
    expect(within(footer).getByText(FOOTER_ABOUT)).toBeInTheDocument()
    expect(
      within(footer).getByRole('heading', { level: 2, name: FOOTER_FEATURES_TITLE }),
    ).toBeInTheDocument()
    for (const link of FOOTER_FEATURES) {
      expect(within(footer).getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('renders the newsletter form and prevents default on submit', () => {
    const { container } = render(<Footer />)
    expect(screen.getByRole('heading', { level: 2, name: NEWSLETTER_TITLE })).toBeInTheDocument()

    const input = screen.getByLabelText('Email address')
    expect(input).toHaveAttribute('type', 'email')
    expect(input).toHaveAttribute('placeholder', NEWSLETTER_PLACEHOLDER)
    fireEvent.change(input, { target: { value: 'hello@example.com' } })

    const form = container.querySelector('form')
    expect(form).not.toBeNull()
    fireEvent.submit(form!)
    expect(screen.getByRole('button', { name: NEWSLETTER_BUTTON })).toBeInTheDocument()
  })

  it('renders Follow Us social links and the Component Dock credit', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { level: 3, name: FOLLOW_TITLE })).toBeInTheDocument()
    for (const { label } of SOCIAL_LINKS) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(screen.getByText(COPYRIGHT)).toBeInTheDocument()

    const dock = screen.getByRole('link', { name: COMPONENT_DOCK.label })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
