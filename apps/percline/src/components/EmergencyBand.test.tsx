import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { EmergencyBand } from './EmergencyBand'
import { StickyCall } from './StickyCall'
import { EMERGENCY, PHONE_LABEL } from '../content'

describe('EmergencyBand', () => {
  it('renders a ping dot, the promise and one white phone pill', () => {
    const { container } = render(<EmergencyBand />)

    expect(screen.getByText(EMERGENCY.eyebrow)).toHaveClass('uppercase')
    expect(screen.getByText(EMERGENCY.headline)).toHaveClass('font-bold')
    expect(screen.getByText(EMERGENCY.body)).toHaveClass('opacity-90')

    const ring = container.querySelector('.animate-ping')
    expect(ring).toHaveClass('motion-reduce:animate-none')

    const phone = screen.getByRole('link', { name: PHONE_LABEL })
    expect(phone).toHaveAttribute('href', 'tel:+15551101100')
    expect(phone).toHaveClass('bg-white', 'text-primary-700')
  })
})

describe('StickyCall', () => {
  it('is a fixed lg-only bar with one full-width pill', () => {
    render(<StickyCall />)
    const bar = document.querySelector('[data-sticky-call]') as HTMLElement
    expect(bar).toHaveClass('fixed', 'lg:hidden', 'z-40')
    const phone = screen.getByRole('link', {
      name: `${EMERGENCY.stickyLabel} · ${PHONE_LABEL}`,
    })
    expect(phone).toHaveClass('w-full', 'rounded-full', 'bg-primary-600')
  })
})
