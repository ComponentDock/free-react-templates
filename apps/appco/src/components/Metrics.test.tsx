import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Metrics } from './Metrics'

describe('Metrics', () => {
  it('renders the heading and at least four stat counters', () => {
    render(<Metrics />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Say Hello To The Collaboration Hub.' }),
    ).toBeInTheDocument()

    for (const value of ['50K+', '250K+', '4.9', '120+']) {
      expect(screen.getByText(value)).toBeInTheDocument()
    }
    for (const label of ['Active Users', 'Messages Sent', 'Average Rating', 'Countries']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })
})
