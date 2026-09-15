import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders four service cards with titles and descriptions', () => {
    render(<Services />)

    const titles = [
      'Get Your Legal Advice',
      'Work with Expert Lawyers',
      'Have Great Discounted Rates',
      'Review Your Case Documents',
    ]

    for (const title of titles) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })

  it('renders service descriptions', () => {
    render(<Services />)

    expect(
      screen.getByText(/expert attorneys provide comprehensive legal advice/),
    ).toBeInTheDocument()
    expect(screen.getByText(/experienced lawyers who specialize/)).toBeInTheDocument()
    expect(screen.getByText(/competitive and transparent pricing/)).toBeInTheDocument()
    expect(screen.getByText(/thoroughly reviews all case documents/)).toBeInTheDocument()
  })
})
