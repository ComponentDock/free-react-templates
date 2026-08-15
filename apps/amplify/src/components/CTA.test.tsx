import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CTA } from './CTA'
import { callNowLabel, callNowNumber } from '../data'

describe('CTA', () => {
  it('renders the heading, sub-line, and the call-now phone text', () => {
    render(<CTA />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Interested in working with us?' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Hit the button below or give us a call/)).toBeInTheDocument()
    expect(screen.getByText(callNowLabel)).toBeInTheDocument()
    expect(screen.getByText(callNowNumber)).toBeInTheDocument()
  })
})
