import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CtaStats } from './CtaStats'

describe('CtaStats', () => {
  it('shows the heading, sub-paragraph and both CTAs', () => {
    render(<CtaStats />)

    expect(
      screen.getByRole('heading', { level: 2, name: /Your story isn't over/ }),
    ).toBeInTheDocument()
    expect(screen.getByText(/No matter what you've been through/)).toBeInTheDocument()

    const visit = screen.getByRole('link', { name: /Plan Your Visit/ })
    expect(visit).toHaveAttribute('href', '#service-times')
    const watch = screen.getByRole('link', { name: /Watch a Message/ })
    expect(watch).toHaveAttribute('href', '#watch')
  })

  it('shows the three stats', () => {
    render(<CtaStats />)

    const stats: Array<[string, string]> = [
      ['10+', 'Years Serving Austin'],
      ['500+', 'Weekly Attendance'],
      ['50+', 'Small Groups'],
    ]

    for (const [value, label] of stats) {
      expect(screen.getByText(value)).toBeInTheDocument()
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })
})
