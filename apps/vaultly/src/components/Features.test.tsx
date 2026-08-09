import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Features } from './Features'

describe('Features', () => {
  it('renders the heading and subtext', () => {
    render(<Features />)
    expect(
      screen.getByRole('heading', { name: /Everything You Need to Build Wealth/ }),
    ).toBeInTheDocument()
  })

  it('renders all six feature cards with titles and descriptions', () => {
    render(<Features />)

    for (const title of [
      '24/7 AI Advisor',
      'Smart Portfolio Management',
      'Goal-Based Planning',
      'Bank-Level Security',
      'Tax Optimization',
      'Proactive Alerts',
    ]) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(6)
  })
})
