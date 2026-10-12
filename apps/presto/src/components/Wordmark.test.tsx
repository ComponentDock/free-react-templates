import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Wordmark } from './Wordmark'

describe('Wordmark', () => {
  it('renders the brand name beside a decorative glyph', () => {
    const { container } = render(<Wordmark />)
    expect(screen.getByText('Presto')).toBeInTheDocument()
    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
  })

  it('accepts an extra class for the sticky header state', () => {
    const { container } = render(<Wordmark className="opacity-80" />)
    expect(container.firstElementChild).toHaveClass('opacity-80')
  })
})
