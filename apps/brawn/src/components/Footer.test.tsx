import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { COMPONENT_DOCK, FOOTER, FOOTER_LINKS } from '../content'
import { Footer } from './Footer'

describe('Footer', () => {
  it('is a dark three-column footer with the four headings', () => {
    const { container } = render(<Footer />)
    const footer = container.querySelector('footer') as HTMLElement
    expect(footer.className).toContain('bg-surface-dark')

    expect(screen.getByRole('heading', { name: FOOTER.aboutHeading })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: FOOTER.contactHeading })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: FOOTER.subscribeHeading })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: FOOTER.linksHeading })).toBeInTheDocument()

    const columns = footer.querySelectorAll('.md\\:col-span-4, .md\\:col-span-5, .md\\:col-span-3')
    expect(columns).toHaveLength(3)
    expect(screen.getByText(FOOTER.about)).toBeInTheDocument()
  })

  it('lists the contact rows as links where they can be dialled or mailed', () => {
    render(<Footer />)
    expect(screen.getByText('1090 Foundry Row, Portland, OR')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '+1 503 555 0142' })).toHaveAttribute(
      'href',
      'tel:+15035550142',
    )
    expect(screen.getByRole('link', { name: 'hello@brawn.example' })).toHaveAttribute(
      'href',
      'mailto:hello@brawn.example',
    )
  })

  it('carries four social marks and the four quick links', () => {
    render(<Footer />)
    FOOTER.social.forEach((social) => {
      const link = screen.getByRole('link', { name: social.label })
      expect(link).toHaveAttribute('href', social.href)
      expect(link).toHaveAttribute('target', '_blank')
      expect(link.querySelector('svg')).not.toBeNull()
    })

    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '#about')
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact')
    expect(screen.getByText('Terms of Use')).toBeInTheDocument()
    expect(screen.getByText('Disclaimers')).toBeInTheDocument()
    expect(FOOTER_LINKS).toHaveLength(4)
  })

  it('validates the subscribe field and confirms a real address', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText('Email address')
    const submit = screen.getByRole('button', { name: 'Subscribe to the Brawn newsletter' })

    await user.click(submit)
    expect(screen.getByRole('alert')).toHaveTextContent('Enter a valid email address')
    expect(input).toHaveAttribute('aria-invalid', 'true')

    await user.type(input, 'not-an-email')
    await user.click(submit)
    expect(screen.getByRole('alert')).toBeInTheDocument()

    await user.clear(input)
    await user.type(input, 'member@brawn.example')
    await user.click(submit)
    expect(screen.getByRole('status')).toHaveTextContent(
      'Thanks — we will email member@brawn.example when the next block opens.',
    )
    expect(input).toHaveValue('')
    expect(input).toHaveAttribute('aria-invalid', 'false')
  })

  it('credits Component Dock with the current year and nothing else', () => {
    render(<Footer />)
    const credit = screen.getByRole('link', { name: 'Component Dock' })
    expect(credit).toHaveAttribute('href', COMPONENT_DOCK)
    const line = credit.closest('p') as HTMLElement
    expect(line).toHaveTextContent(String(new Date().getFullYear()))
    expect(line).toHaveTextContent('Brawn')
    expect(line).toHaveTextContent('More templates at Component Dock')
  })
})
