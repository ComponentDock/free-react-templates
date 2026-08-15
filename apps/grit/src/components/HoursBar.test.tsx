import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { HoursBar } from './HoursBar'
import { hoursClosing, hoursCtaLabel, hoursOpening, hoursTitle } from '../data'

describe('HoursBar', () => {
  it('renders the opening hours text and an accent-orange Contact us button with an arrow icon', () => {
    render(<HoursBar />)
    expect(screen.getByText(hoursTitle)).toBeInTheDocument()
    expect(screen.getByText(new RegExp(hoursOpening.replace(':', ':')))).toBeInTheDocument()
    expect(screen.getByText(new RegExp(hoursClosing))).toBeInTheDocument()
    const cta = screen.getByRole('link', { name: hoursCtaLabel })
    expect(cta.className).toMatch(/bg-accent/)
    expect(cta.querySelector('svg')).not.toBeNull()
  })

  it('skews only the red panel -12 degrees while the content stays straight (top variant)', () => {
    const { container } = render(<HoursBar variant="top" />)
    const skew = container.querySelector('[class*="[transform:skew(-12deg)]"]')
    expect(skew).not.toBeNull()
    expect(skew?.className).toMatch(/bg-brand/)
    // Content wrapper carries no skew transform of its own.
    const content = skew?.parentElement?.querySelector(':scope > div')
    expect(content?.className).not.toMatch(/skew/)
  })

  it('skews +12 degrees for the bottom variant and sits at the right edge', () => {
    const { container } = render(<HoursBar variant="bottom" />)
    const skew = container.querySelector('[class*="[transform:skew(12deg)]"]')
    expect(skew).not.toBeNull()
    expect(container.querySelector('[class*="md:ml-auto"]')).not.toBeNull()
  })
})
