import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the section heading and all six feature cards', () => {
    render(<Features />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Everything You Need to Sell Smarter' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/complete suite of sales tools/i)).toBeInTheDocument()

    for (const title of [
      'Pipeline Management',
      'Contact Management',
      'Email Automation',
      'Sales Analytics',
      'Team Collaboration',
      'AI Lead Scoring',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })
})
