import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { IntroStrip } from './IntroStrip'

describe('IntroStrip', () => {
  it('renders four feature boxes', () => {
    render(<IntroStrip />)
    expect(screen.getByText('Expert Attorneys')).toBeInTheDocument()
    expect(screen.getByText('Case Dismissed')).toBeInTheDocument()
    expect(screen.getByText('Court Performance')).toBeInTheDocument()
    expect(screen.getByText('Legal Protection')).toBeInTheDocument()
  })
})
