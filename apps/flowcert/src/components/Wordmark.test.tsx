import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Wordmark } from './Wordmark'

describe('Wordmark', () => {
  it('renders the Flow + cert lockup with its mono sub-label', () => {
    const { container } = render(<Wordmark />)

    expect(container.textContent).toContain('Flow')
    expect(container.textContent).toContain('cert')
    expect(screen.getByText('Certified')).toHaveClass('font-mono')
  })

  it('switches to the light tone for the dark footer ground', () => {
    const { container } = render(<Wordmark tone="light" />)

    const svg = container.querySelector('svg')
    expect(svg).toHaveClass('text-white')
    expect(screen.getByText('Certified')).toHaveClass('text-gray-400')
  })
})
