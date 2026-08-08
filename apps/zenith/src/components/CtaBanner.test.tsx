import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('renders the headline and subtext', () => {
    render(<CtaBanner />)
    expect(
      screen.getByRole('heading', { level: 2, name: /ready to transform your workflow/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/join thousands of teams already using zenith/i)).toBeInTheDocument()
  })

  it('renders the two CTA buttons', () => {
    render(<CtaBanner />)
    expect(screen.getByRole('link', { name: 'Start free trial' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact sales' })).toBeInTheDocument()
  })
})
