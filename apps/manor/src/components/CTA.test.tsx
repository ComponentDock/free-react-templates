import { render, screen } from '@testing-library/react'
import { CTA } from './CTA'
import { describe, it, expect } from 'vitest'

describe('CTA', () => {
  it('renders the CTA heading with highlighted text', () => {
    render(<CTA />)
    expect(screen.getByText(/Do you want to talk with one of our/)).toBeInTheDocument()
    expect(screen.getByText('real estate experts?')).toBeInTheDocument()
  })

  it('renders phone number', () => {
    render(<CTA />)
    expect(screen.getByText('+0080 234 567 84441')).toBeInTheDocument()
    expect(screen.getByText('Call now:')).toBeInTheDocument()
  })
})
