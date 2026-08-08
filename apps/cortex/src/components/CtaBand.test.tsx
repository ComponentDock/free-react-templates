import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBand } from './CtaBand'

describe('CtaBand', () => {
  it('renders the heading, blurb and both CTA buttons', () => {
    render(<CtaBand />)
    expect(
      screen.getByRole('heading', { name: /Ready to Build Your First Agent/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Join 10,000\+ developers/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Start Building Free/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Read the Docs/i })).toBeInTheDocument()
  })
})
