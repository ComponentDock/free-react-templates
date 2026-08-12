import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Quote } from './Quote'

describe('Quote', () => {
  it('shows the athlete quote and attribution', () => {
    render(<Quote />)
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /During the hard times, it.s important to focus on the things you can/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByText('Annie Thorisdottir,')).toBeInTheDocument()
    expect(screen.getByText('Crossfit athlete')).toBeInTheDocument()
  })
})
