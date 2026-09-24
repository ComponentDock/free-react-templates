import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { GeometricPattern } from './GeometricPattern'

describe('GeometricPattern', () => {
  it('renders an SVG element', () => {
    const { container } = render(<GeometricPattern />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('has aria-hidden for decorative purpose', () => {
    const { container } = render(<GeometricPattern />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('aria-hidden', 'true')
  })

  it('contains geometric shapes', () => {
    const { container } = render(<GeometricPattern />)
    const svg = container.querySelector('svg')
    expect(svg?.querySelectorAll('line').length).toBeGreaterThan(0)
    expect(svg?.querySelectorAll('polygon').length).toBeGreaterThan(0)
  })
})
