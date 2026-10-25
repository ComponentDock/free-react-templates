import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CLOSING } from '../content'
import { Closing } from './Closing'

describe('Closing', () => {
  it('is the flat violet band with a white heading and a violet-100 lede', () => {
    const { container } = render(<Closing />)
    const band = container.querySelector('section') as HTMLElement
    expect(band.className).toContain('bg-primary-700')
    expect(band.id).toBe('contact')
    expect(screen.getByRole('heading', { level: 2, name: CLOSING.heading }).className).toContain(
      'text-white',
    )
    expect(screen.getByText(CLOSING.lede).className).toContain('text-primary-100')
  })

  it('offers a white fill and an outlined phone button that dials', () => {
    render(<Closing />)
    const primary = screen.getByRole('link', { name: CLOSING.primaryCta })
    expect(primary.className).toContain('bg-white')
    expect(primary).toHaveAttribute('href', '#hero-form')

    const phone = screen.getByRole('link', { name: CLOSING.secondaryCta })
    expect(phone.className).toContain('border-white/40')
    expect(phone).toHaveAttribute('href', 'tel:+15551401400')
    expect(phone.querySelector('svg')).not.toBeNull()
  })
})
