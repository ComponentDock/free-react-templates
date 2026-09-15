import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('renders the motivational quote', () => {
    render(<CtaBanner />)
    expect(
      screen.getByText(/Forget what you can get and see what you can give/),
    ).toBeInTheDocument()
  })

  it('renders the volunteer CTA button', () => {
    render(<CtaBanner />)
    expect(screen.getByRole('link', { name: /become a volunteer/i })).toHaveAttribute(
      'href',
      '#volunteers',
    )
  })
})
