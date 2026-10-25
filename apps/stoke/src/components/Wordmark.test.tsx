import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Wordmark } from './Wordmark'

describe('Wordmark', () => {
  it('draws the plate and the two-line name in ink on a light ground', () => {
    render(<Wordmark />)
    expect(screen.getByText('STOKE')).toHaveClass('text-ink-900')
    expect(screen.getByText('Heating & Cooling')).toHaveClass('text-ink-500')
  })

  it('switches to white for the dark footer ground', () => {
    render(<Wordmark tone="light" />)
    expect(screen.getByText('STOKE')).toHaveClass('text-white')
    expect(screen.getByText('Heating & Cooling')).toHaveClass('text-gray-400')
  })

  it('takes a layout class from its caller', () => {
    render(<Wordmark className="mb-4" />)
    expect(screen.getByText('STOKE').parentElement?.parentElement).toHaveClass('mb-4')
  })
})
