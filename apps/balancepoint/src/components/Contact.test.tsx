import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CONTACT, PHONE_DISPLAY } from '../content'
import { Contact } from './Contact'

describe('Contact', () => {
  it('is the one large lime surface on the page', () => {
    render(<Contact />)
    expect((document.getElementById('contact') as HTMLElement).className).toContain('bg-primary-700')
  })

  it('offers the white pill and the outlined phone pill', () => {
    render(<Contact />)
    const primary = screen.getByRole('link', { name: CONTACT.primaryCta })
    expect(primary).toHaveAttribute('href', '#incentives')
    expect(primary.className).toContain('bg-white')

    const call = screen.getByRole('link', { name: `Call ${PHONE_DISPLAY}` })
    expect(call).toHaveAttribute('href', 'tel:5551201200')
    expect(call.className).toContain('border-white/40')
  })

  it('carries the heading and the lede', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(CONTACT.heading)
    expect(screen.getByText(CONTACT.lede)).toBeInTheDocument()
  })
})
