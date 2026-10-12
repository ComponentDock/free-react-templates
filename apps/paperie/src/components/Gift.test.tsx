import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { GIFT_COPY, GIFT_CTA, GIFT_HEADING, GIFT_PHOTO } from '../lib/site'
import { Gift } from './Gift'

function tokens(element: Element): string[] {
  return (element.getAttribute('class') ?? '').split(' ')
}

describe('the gift banner', () => {
  it('lays a title and a line of copy over the washed photograph', () => {
    render(<Gift />)

    const band = screen.getByRole('region', { name: GIFT_HEADING })

    expect(screen.getByRole('heading', { level: 2, name: GIFT_HEADING })).toBeInTheDocument()
    expect(tokens(screen.getByRole('heading', { level: 2 }))).toContain('lg:text-[70px]')
    expect(tokens(screen.getByRole('heading', { level: 2 }))).toContain('capitalize')
    expect(screen.getByText(GIFT_COPY)).toBeInTheDocument()
    expect((band as HTMLElement).style.backgroundImage).toContain(`seed/${GIFT_PHOTO}/1920/1200`)
    expect(tokens(band)).toContain('bg-cover')
    expect(tokens(band)).toContain('bg-center')
  })

  it('washes the photograph white from its lower edge, out of the reading order', () => {
    render(<Gift />)

    const band = screen.getByRole('region', { name: GIFT_HEADING })
    const wash = band.querySelector('.gift-wash') as HTMLElement

    expect(wash).toHaveAttribute('aria-hidden', 'true')
    expect(tokens(wash)).toContain('absolute')
    expect(tokens(wash)).toContain('inset-0')
  })

  it('carries the reply action over to the guest book with its sweep', () => {
    render(<Gift />)

    const cta = screen.getByRole('link', { name: GIFT_CTA })

    expect(cta).toHaveAttribute('href', '#guest-book')
    expect(tokens(cta)).toContain('sweep-up')
    expect(tokens(cta)).toContain('bg-primary-600')
    expect(tokens(cta)).toContain('rounded-[5px]')
    expect(tokens(cta)).toContain('h-[60px]')
    expect(tokens(cta)).toContain('min-w-[150px]')
    expect(tokens(cta)).not.toContain('rounded-lg')
  })
})
