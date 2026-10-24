import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('renders the heading', () => {
    render(<CtaBanner />)
    expect(
      screen.getByRole('heading', { name: /get your answer in just 5 minutes/i }),
    ).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<CtaBanner />)
    expect(screen.getByText(/checking your loan options/i)).toBeInTheDocument()
  })

  it('renders the get started button', () => {
    render(<CtaBanner />)
    expect(screen.getByRole('link', { name: /get started/i })).toBeInTheDocument()
  })
})
