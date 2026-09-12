import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CTA } from './CTA'

describe('CTA', () => {
  it('renders the heading and both CTA buttons', () => {
    render(<CTA />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Ready to get started?' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact us' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Make a demo' })).toBeInTheDocument()
  })

  it('has the correct section landmark', () => {
    render(<CTA />)

    expect(screen.getByRole('region', { name: 'Call to action' })).toBeInTheDocument()
  })
})
