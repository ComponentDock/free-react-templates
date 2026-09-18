import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CallToAction } from './CallToAction'

describe('CallToAction', () => {
  it('renders the CTA heading', () => {
    render(<CallToAction />)
    expect(
      screen.getByRole('heading', { name: /Get to Know Project Estimate/i }),
    ).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<CallToAction />)
    expect(screen.getByRole('link', { name: /Get a quote now/i })).toHaveAttribute(
      'href',
      '#contact',
    )
  })
})
