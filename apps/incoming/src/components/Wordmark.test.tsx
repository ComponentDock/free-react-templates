import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Wordmark } from './Wordmark'

describe('Wordmark', () => {
  it('renders the original brand wordmark with its accent glyph', () => {
    const { container } = render(<Wordmark />)

    expect(screen.getByText('Incoming')).toHaveClass('font-heading', 'font-bold', 'text-ink')
    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
  })

  it('centres itself and never exceeds the card width', () => {
    const { container } = render(<Wordmark />)

    expect(container.firstElementChild).toHaveClass('w-full', 'max-w-full', 'text-center')
  })

  it('accepts a className override', () => {
    const { container } = render(<Wordmark className="opacity-50" />)

    expect(container.firstElementChild).toHaveClass('opacity-50')
  })
})
