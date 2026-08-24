import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CTA } from './CTA'

describe('CTA', () => {
  it('renders the heading "Create your amazing website with Spruce"', () => {
    render(<CTA />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Create your amazing website with Spruce',
    )
  })

  it('renders the "Start Free Trial" button', () => {
    render(<CTA />)
    expect(screen.getByRole('link', { name: 'Start Free Trial' })).toBeInTheDocument()
  })
})
