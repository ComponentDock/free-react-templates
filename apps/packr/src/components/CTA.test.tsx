import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CTA } from './CTA'

describe('CTA', () => {
  it('renders the heading and button', () => {
    render(<CTA />)
    expect(
      screen.getByRole('heading', { name: /are you looking for a web designer/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /available for hire/i })).toBeInTheDocument()
  })
})
