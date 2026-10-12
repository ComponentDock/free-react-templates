import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Wordmark } from './Wordmark'

describe('Wordmark', () => {
  it('renders the brand name beside its own azure mark', () => {
    render(<Wordmark />)

    expect(screen.getByText('Skyport')).toBeInTheDocument()
    expect(document.querySelector('svg rect')).toHaveAttribute('fill', '#3898f8')
  })

  it('keeps the mark decorative so it never enters the accessibility tree', () => {
    render(<Wordmark />)

    expect(document.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
  })

  it('lets a caller recolour the label through the class prop', () => {
    render(<Wordmark className="text-white" />)

    expect(screen.getByText('Skyport')).toHaveClass('text-white')
    expect(screen.getByText('Skyport')).not.toHaveClass('text-ink')
  })
})
