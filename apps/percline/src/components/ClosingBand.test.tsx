import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ClosingBand } from './ClosingBand'
import { CLOSING } from '../content'

describe('ClosingBand', () => {
  it('renders a solid white button and a ghost phone button', () => {
    render(<ClosingBand />)

    expect(screen.getByRole('heading', { name: CLOSING.heading })).toHaveClass('text-white')
    expect(screen.getByText(CLOSING.lede)).toHaveClass('text-primary-100')

    const primary = screen.getByRole('link', { name: CLOSING.primary })
    expect(primary).toHaveClass('bg-white', 'text-primary-700')
    expect(primary).toHaveAttribute('href', '#quote')

    const secondary = screen.getByRole('link', { name: CLOSING.secondary })
    expect(secondary).toHaveClass('border-2', 'border-white/40')
    expect(secondary).toHaveAttribute('href', 'tel:+15551101100')
  })
})
