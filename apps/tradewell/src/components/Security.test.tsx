import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Security } from './Security'

describe('Security', () => {
  it('shows the section heading', () => {
    render(<Security />)

    expect(
      screen.getByRole('heading', { name: 'Your Assets Are Protected & Secure' }),
    ).toBeInTheDocument()
  })

  it('shows all six protection cards', () => {
    render(<Security />)

    for (const name of [
      'SIPC Protected',
      'FDIC Insured Cash',
      '256-bit Encryption',
      'Two-Factor Auth',
      'SEC Registered',
      '24/7 Monitoring',
    ]) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })
})
