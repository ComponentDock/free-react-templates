import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Crest } from './Crest'

describe('Crest', () => {
  it('renders a decorative shield badge', () => {
    const { container } = render(<Crest />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('aria-hidden', 'true')
    expect(screen.queryByText(/matchday/i)).not.toBeInTheDocument()
  })

  it('applies a custom className', () => {
    const { container } = render(<Crest className="h-10 w-10" />)
    expect(container.querySelector('svg')).toHaveClass('h-10', 'w-10')
  })
})
