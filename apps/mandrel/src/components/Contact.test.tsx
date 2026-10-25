import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Contact } from './Contact'
import { CONTACT, EMAIL } from '../content'

describe('Contact', () => {
  it('is the steel-blue closing band with a centred heading and lede', () => {
    const { container } = render(<Contact />)
    const band = container.querySelector('section') as HTMLElement
    expect(band.className).toContain('bg-primary-700')
    expect(band.className).toContain('py-20')
    expect(screen.getByRole('heading', { level: 2, name: CONTACT.heading })).toHaveClass('text-white')
    expect(screen.getByText(CONTACT.lede).className).toContain('text-primary-100')
  })

  it('sends the quote to the bids inbox rather than a form', () => {
    render(<Contact />)
    expect(screen.getByRole('link', { name: CONTACT.primaryCta })).toHaveAttribute(
      'href',
      `mailto:${EMAIL}`,
    )
    expect(screen.queryByRole('textbox')).toBeNull()
    expect(document.querySelector('form')).toBeNull()
  })

  it('offers the white pill and the 2 px steel outline pill', () => {
    render(<Contact />)
    const primary = screen.getByRole('link', { name: CONTACT.primaryCta })
    const secondary = screen.getByRole('link', { name: CONTACT.secondaryCta })
    expect(primary.className).toContain('bg-white')
    expect(primary.className).toContain('text-primary-700')
    expect(secondary.className).toContain('border-white/40')
    expect(secondary).toHaveAttribute('href', '#capabilities')
  })

  it('keeps the band short — the CTAs are the whole close', () => {
    const { container } = render(<Contact />)
    expect((container.querySelector('section') as HTMLElement).className).toContain('lg:py-28')
    expect(container.querySelectorAll('p')).toHaveLength(1)
  })
})
