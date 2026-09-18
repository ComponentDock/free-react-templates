import { render, screen } from '@testing-library/react'
import { CallToAction } from './CallToAction'
import { describe, expect, it } from 'vitest'

describe('CallToAction', () => {
  it('renders the CTA text', () => {
    render(<CallToAction />)
    expect(screen.getByText(/Need to clean your house/)).toBeInTheDocument()
  })

  it('renders phone and email links', () => {
    render(<CallToAction />)
    expect(screen.getByRole('link', { name: '0-1230-456-7890' })).toHaveAttribute(
      'href',
      'tel:012304567890',
    )
    expect(screen.getByRole('link', { name: 'youremail@email.com' })).toHaveAttribute(
      'href',
      'mailto:youremail@email.com',
    )
  })
})
