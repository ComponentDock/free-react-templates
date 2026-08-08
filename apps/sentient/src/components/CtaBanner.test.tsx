import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('renders the headline, subtext and both call-to-action buttons', () => {
    render(<CtaBanner />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'The Future of AI is Here' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/join thousands of teams/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Start Free' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Talk to Sales' })).toBeInTheDocument()
  })
})
