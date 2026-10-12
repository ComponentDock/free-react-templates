import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SUPPORT_EMAIL, SUPPORT_PHONE, UtilityBar } from './UtilityBar'

describe('UtilityBar', () => {
  it('renders the phone and e-mail as working links on the dark strip', () => {
    render(<UtilityBar />)

    expect(screen.getByRole('link', { name: SUPPORT_PHONE })).toHaveAttribute(
      'href',
      'tel:+14155550182',
    )
    expect(screen.getByRole('link', { name: SUPPORT_EMAIL })).toHaveAttribute(
      'href',
      `mailto:${SUPPORT_EMAIL}`,
    )
  })

  it('carries a flat azure purchase action with no radius', () => {
    render(<UtilityBar />)

    const action = screen.getByRole('link', { name: 'Get Skyport' })
    expect(action).toHaveAttribute('href', '#plan')
    expect(action).toHaveClass('bg-brand', 'uppercase')
    expect(action).not.toHaveClass('rounded-[25px]')
  })

  it('paints the strip dark and keeps icon glyphs out of the accessibility tree', () => {
    const { container } = render(<UtilityBar />)

    expect(container.firstElementChild).toHaveClass('bg-dark')
    expect(container.querySelectorAll('svg[aria-hidden="true"]')).toHaveLength(2)
  })
})
