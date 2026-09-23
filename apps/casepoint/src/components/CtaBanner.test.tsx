import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('renders heading', () => {
    render(<CtaBanner />)
    expect(
      screen.getByRole('heading', { level: 2, name: /searching for.*consultant/i }),
    ).toBeInTheDocument()
  })

  it('renders Contact Now button', () => {
    render(<CtaBanner />)
    const link = screen.getByRole('link', { name: /contact now/i })
    expect(link).toHaveAttribute('href', '#contact')
  })
})
