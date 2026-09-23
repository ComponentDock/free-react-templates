import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('renders the headline', () => {
    render(<CtaBanner />)
    expect(
      screen.getByRole('heading', { name: /Let's discuss about your interior/i }),
    ).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<CtaBanner />)
    expect(screen.getByText(/all-powerful Pointing/i)).toBeInTheDocument()
  })

  it('renders the Contact Us button', () => {
    render(<CtaBanner />)
    expect(screen.getByRole('link', { name: /Contact Us/i })).toBeInTheDocument()
  })

  it('renders the phone number link', () => {
    render(<CtaBanner />)
    expect(screen.getByText('+10 (87) 267 2467')).toBeInTheDocument()
  })
})
