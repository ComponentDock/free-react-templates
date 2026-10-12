import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import {
  COMPONENT_DOCK_LABEL,
  COMPONENT_DOCK_URL,
  FOOTER_ABOUT_BODY,
  FOOTER_ABOUT_TITLE,
  FOOTER_LINKS,
  FOOTER_LINKS_TITLE,
  FOLLOW_TITLE,
  NEWSLETTER_ERROR,
  NEWSLETTER_FIELD_LABEL,
  NEWSLETTER_FORM_LABEL,
  NEWSLETTER_OK,
  NEWSLETTER_PLACEHOLDER,
  NEWSLETTER_SEND,
  NEWSLETTER_TITLE,
  SOCIALS,
} from '../lib/site'
import { tokens } from '../test/match-media'

describe('Footer', () => {
  it('dresses the foot of the page in the design dark band', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')

    expect(tokens(footer)).toEqual(expect.arrayContaining(['bg-footer', 'py-[64px]', 'md:py-[128px]']))
    expect(screen.getByRole('heading', { name: FOOTER_ABOUT_TITLE })).toHaveClass('text-white', 'text-[16px]')
    expect(screen.getByText(FOOTER_ABOUT_BODY)).toHaveClass('text-footer-text')
  })

  it('runs the four section rows the design repeats at the foot of the page', () => {
    render(<Footer />)

    const quick = screen.getByRole('navigation', { name: FOOTER_LINKS_TITLE })

    expect(within(quick).getAllByRole('link').map((link) => link.textContent)).toEqual(
      FOOTER_LINKS.map((item) => item.label),
    )
    expect(within(quick).getByRole('link', { name: 'Testimonials' })).toHaveAttribute('href', '#marriages')
    expect(tokens(within(quick).getByRole('link', { name: 'Testimonials' }))).toContain('text-footer-link')
  })

  it('offers the newsletter field with its mint pill under the newsletter heading', () => {
    render(<Footer />)

    const block = screen.getByRole('heading', { name: NEWSLETTER_TITLE }).parentElement as HTMLElement
    const field = screen.getByLabelText(NEWSLETTER_FIELD_LABEL)

    expect(block).toHaveAttribute('id', 'contact')
    expect(field).toHaveAttribute('placeholder', NEWSLETTER_PLACEHOLDER)
    expect(field).toHaveAttribute('type', 'email')
    expect(tokens(field)).toEqual(
      expect.arrayContaining(['rounded-[30px_0_0_30px]', 'border-cta', 'bg-transparent', 'text-white']),
    )

    const send = screen.getByRole('button', { name: NEWSLETTER_SEND })

    expect(tokens(send)).toEqual(
      expect.arrayContaining(['bg-primary-600', 'rounded-[0_30px_30px_0]', 'text-black', 'px-[30px]', 'py-[10px]']),
    )
    expect(tokens(send)).not.toContain('rounded-lg')
  })

  it('sets the four brand marks out under the follow heading', () => {
    render(<Footer />)

    const socials = screen.getAllByRole('link', { name: /^Celebrant on / })

    expect(screen.getByRole('heading', { name: FOLLOW_TITLE })).toBeInTheDocument()
    expect(socials.map((link) => link.getAttribute('aria-label'))).toEqual(
      SOCIALS.map((social) => social.label),
    )
    expect(socials.every((link) => link.getAttribute('href') === COMPONENT_DOCK_URL)).toBe(true)
    expect(socials[0]?.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
    expect(tokens(socials[0]?.querySelector('svg') as Element)).toEqual(
      expect.arrayContaining(['h-[16px]', 'w-[16px]']),
    )
  })

  it('checks the address on the page, keeps what was typed and posts nowhere', () => {
    render(<Footer />)

    const form = screen.getByRole('form', { name: NEWSLETTER_FORM_LABEL })
    const field = screen.getByLabelText(NEWSLETTER_FIELD_LABEL)

    expect(form).not.toHaveAttribute('action')
    expect(screen.getByRole('status')).toHaveTextContent('')

    fireEvent.submit(form)
    expect(screen.getByRole('status')).toHaveTextContent(NEWSLETTER_ERROR)

    fireEvent.change(field, { target: { value: 'not-an-address' } })
    fireEvent.submit(form)

    expect(screen.getByRole('status')).toHaveTextContent(NEWSLETTER_ERROR)
    expect(field).toHaveValue('not-an-address')

    fireEvent.change(field, { target: { value: 'bookings@celebrant.test' } })
    fireEvent.submit(form)

    expect(screen.getByRole('status')).toHaveTextContent(NEWSLETTER_OK)
    expect(field).toHaveValue('bookings@celebrant.test')
  })

  it('signs off with the year and a single Component Dock credit', () => {
    render(<Footer />)

    const line = screen.getByTestId('copyright')

    expect(line).toHaveTextContent(
      `Copyright © ${new Date().getFullYear()} All rights reserved | This template is made with`,
    )

    const credits = screen.getAllByRole('link', { name: COMPONENT_DOCK_LABEL })

    expect(credits).toHaveLength(1)
    expect(credits[0]).toHaveAttribute('href', COMPONENT_DOCK_URL)
    expect(credits[0]).toHaveAttribute('rel', 'noreferrer')
    expect(tokens(credits[0] as Element)).toContain('text-footer-link')
    expect(line.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
    expect(tokens(line.parentElement as Element)).toEqual(
      expect.arrayContaining(['border-t', 'border-footer-line', 'pt-[48px]']),
    )
  })
})
