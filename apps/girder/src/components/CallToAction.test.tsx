import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CallToAction } from './CallToAction'

describe('CallToAction', () => {
  it('renders the heading and call-to-action button', () => {
    render(<CallToAction />)
    expect(
      screen.getByRole('heading', {
        name: /The road of success is always under construction/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Get a free quote/i })).toBeInTheDocument()
  })
})
