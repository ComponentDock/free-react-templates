import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { WhyUs } from './WhyUs'

describe('WhyUs', () => {
  it('renders the section heading', () => {
    render(<WhyUs />)
    expect(screen.getByText('Why ShieldGuard')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'The Smart Choice for Coverage' }),
    ).toBeInTheDocument()
  })

  it('renders all four value cards', () => {
    render(<WhyUs />)
    for (const title of [
      'Save Up to 35%',
      'Claims in 24 Hours',
      'Personal Advisors',
      'Digital First',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })
})
