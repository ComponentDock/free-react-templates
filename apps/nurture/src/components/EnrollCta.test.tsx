import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { EnrollCta } from './EnrollCta'

describe('EnrollCta', () => {
  it('renders the heading with discount offer', () => {
    render(<EnrollCta />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('30% off')
  })

  it('renders the Get Started button', () => {
    render(<EnrollCta />)
    expect(screen.getByRole('link', { name: 'Get Started' })).toBeInTheDocument()
  })
})
