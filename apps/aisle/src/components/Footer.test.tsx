import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import {
  BRAND,
  COMPONENT_DOCK_LABEL,
  COMPONENT_DOCK_URL,
  FOOTER_LINKS,
  FOOTER_NEWS_BODY,
  FOOTER_NEWS_TITLE,
  NEWSLETTER_ERROR,
  NEWSLETTER_FIELD_LABEL,
  NEWSLETTER_FORM_LABEL,
  NEWSLETTER_OK,
  NEWSLETTER_PLACEHOLDER,
  NEWSLETTER_SUBMIT_LABEL,
  SECTION_IDS,
  SOCIALS,
} from '../lib/site'

const STATUS_ID = 'aisle-email-status'

const field = () => screen.getByLabelText(NEWSLETTER_FIELD_LABEL)
const form = () => screen.getByRole('form', { name: NEWSLETTER_FORM_LABEL })

describe('Footer', () => {
  it('opens on the ring pattern with the wordmark and the newsletter block', () => {
    const { container } = render(<Footer />)

    const footer = screen.getByRole('contentinfo')

    expect(footer.id).toBe(SECTION_IDS.rsvp)
    expect(footer).toHaveClass('pt-[70px]', 'isolate')
    expect(container.querySelector('.ring-pattern')).toHaveAttribute('aria-hidden', 'true')
    expect(screen.getByText(BRAND)).toHaveClass('font-display', 'text-ink')
    expect(screen.getByRole('heading', { level: 4, name: FOOTER_NEWS_TITLE })).toHaveClass('text-[1.5rem]')
    expect(screen.getByText(FOOTER_NEWS_BODY)).toHaveClass('text-copy')
  })

  it('renders a labelled pill field with its circular submit', () => {
    render(<Footer />)

    const input = field()

    expect(input).toHaveAttribute('type', 'email')
    expect(input).toHaveAttribute('placeholder', NEWSLETTER_PLACEHOLDER)
    expect(input).toHaveClass('rounded-full', 'shadow-pill', 'pr-[70px]')

    const submit = screen.getByRole('button', { name: NEWSLETTER_SUBMIT_LABEL })

    expect(submit).toHaveAttribute('type', 'submit')
    expect(submit).toHaveClass('h-[55px]', 'w-[55px]', 'rounded-full')
  })

  it('refuses an address it cannot parse, in place and without navigating', () => {
    render(<Footer />)

    fireEvent.change(field(), { target: { value: 'nora' } })
    fireEvent.submit(form())

    expect(screen.getByRole('status')).toHaveTextContent(NEWSLETTER_ERROR)
    expect(field()).toHaveAttribute('aria-invalid', 'true')
    expect(field()).toHaveAttribute('aria-describedby', STATUS_ID)
  })

  it('accepts a real address and says so politely', () => {
    render(<Footer />)

    fireEvent.change(field(), { target: { value: 'nora@ellisfield.co' } })
    fireEvent.submit(form())

    expect(screen.getByRole('status')).toHaveTextContent(NEWSLETTER_OK)
    expect(field()).toHaveAttribute('aria-invalid', 'false')
    expect(field()).not.toHaveAttribute('aria-describedby')
    expect(field()).toHaveValue('nora@ellisfield.co')
  })

  it('carries the five marks and the five tracked links', () => {
    render(<Footer />)

    for (const social of SOCIALS) {
      expect(screen.getByRole('link', { name: social.label })).toBeInTheDocument()
    }

    for (const link of FOOTER_LINKS) {
      const anchor = screen.getByRole('link', { name: link.label })

      expect(anchor).toHaveAttribute('href', link.href)
      expect(anchor).toHaveClass('uppercase', 'tracking-[1px]')
    }

    expect(FOOTER_LINKS).toHaveLength(5)
    expect(SOCIALS).toHaveLength(5)
    expect(screen.getByRole('link', { name: SOCIALS[0]?.label }).querySelector('svg')).toHaveAttribute(
      'aria-hidden',
      'true',
    )
  })

  it('writes the year live and credits Component Dock alone', () => {
    const { container } = render(<Footer />)

    const year = new Date().getFullYear()
    const external = [...container.querySelectorAll('a')].filter((anchor) =>
      (anchor.getAttribute('href') as string).startsWith('http'),
    )

    expect(screen.getByText(new RegExp(`© ${year} `))).toBeInTheDocument()
    expect(external).toHaveLength(1)
    expect(external[0]).toHaveAttribute('href', COMPONENT_DOCK_URL)
    expect(external[0]).toHaveTextContent(COMPONENT_DOCK_LABEL)
  })
})
