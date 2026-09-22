import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { Star } from './Star'

describe('Star', () => {
  it('renders a filled star', () => {
    const { container } = render(<Star filled />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('fill', '#F7AF1D')
  })

  it('renders an empty star', () => {
    const { container } = render(<Star />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('fill', 'none')
  })

  it('applies custom size', () => {
    const { container } = render(<Star filled size={24} />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('width', '24')
  })
})
