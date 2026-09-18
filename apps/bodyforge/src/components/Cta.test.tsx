import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Cta } from './Cta'

describe('Cta', () => {
  it('renders the heading and CTA button', () => {
    render(<Cta />)

    expect(screen.getByText('Your Gym')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Become A Member' })).toBeInTheDocument()
  })

  it('links the CTA to the contact section', () => {
    render(<Cta />)

    expect(screen.getByRole('link', { name: 'Become A Member' })).toHaveAttribute(
      'href',
      '#contact',
    )
  })

  it('renders the descriptive text', () => {
    render(<Cta />)

    expect(screen.getByText(/Join BodyForge today/)).toBeInTheDocument()
  })
})
