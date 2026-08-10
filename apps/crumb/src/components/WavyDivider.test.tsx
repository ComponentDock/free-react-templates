import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { WavyDivider } from './WavyDivider'

describe('WavyDivider', () => {
  it('renders a decorative wave svg', () => {
    const { container } = render(<WavyDivider />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('aria-hidden', 'true')
  })
})
