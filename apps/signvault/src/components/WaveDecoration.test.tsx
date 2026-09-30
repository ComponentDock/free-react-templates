import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { WaveDecoration } from './WaveDecoration'

describe('WaveDecoration', () => {
  it('renders an SVG element', () => {
    const { container } = render(<WaveDecoration />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('has a path element', () => {
    const { container } = render(<WaveDecoration />)
    expect(container.querySelector('path')).toBeInTheDocument()
  })

  it('applies light gray fill', () => {
    const { container } = render(<WaveDecoration />)
    const path = container.querySelector('path')
    expect(path).toHaveAttribute('fill', '#f0f0f0')
  })
})
