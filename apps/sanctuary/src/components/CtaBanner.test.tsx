import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('shows the welcome headline and sub-copy', () => {
    render(<CtaBanner />)

    expect(
      screen.getByRole('heading', { level: 2, name: /You're Welcome Here/ }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Whether you're exploring faith or looking for a church home/),
    ).toBeInTheDocument()
  })

  it('shows the Plan Your Visit and Contact Us actions', () => {
    render(<CtaBanner />)

    expect(screen.getByRole('link', { name: 'Plan Your Visit' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact Us' })).toBeInTheDocument()
  })
})
