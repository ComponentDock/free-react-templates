import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Cta } from './Cta'

describe('Cta', () => {
  it('renders the CTA heading', () => {
    render(<Cta />)
    expect(screen.getByRole('heading', { name: /We Make Perfection/i })).toBeInTheDocument()
  })

  it('renders the Learn More link', () => {
    render(<Cta />)
    expect(screen.getByRole('link', { name: /Learn More/i })).toBeInTheDocument()
  })
})
