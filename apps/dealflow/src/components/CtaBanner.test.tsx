import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('renders the closing CTA with headline, subtext and both buttons', () => {
    render(<CtaBanner />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Ready to Close More Deals?' }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Join 10,000\+ sales teams already using Dealflow/i),
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Start Free Trial' })).toHaveAttribute(
      'href',
      '#contact',
    )
    expect(screen.getByRole('link', { name: 'Book a Demo' })).toHaveAttribute('href', '#contact')
  })
})
