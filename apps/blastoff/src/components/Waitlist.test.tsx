import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Waitlist } from './Waitlist'

describe('Waitlist', () => {
  it('shows the heading, CTA button and note', () => {
    render(<Waitlist />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Ready to launch faster?' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Get Early Access/ })).toHaveAttribute(
      'href',
      '#contact',
    )
    expect(screen.getByText(/Join 2,000\+ developers already on the waitlist/)).toBeInTheDocument()
  })
})
