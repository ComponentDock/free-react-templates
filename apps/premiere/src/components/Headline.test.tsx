import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Headline } from './Headline'

describe('Headline', () => {
  it('renders the uppercase headline and its under-construction sub-line', () => {
    render(<Headline />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toBe('Coming Soon')
    expect(heading).toHaveClass('uppercase')
    expect(screen.getByText(/under construction/)).toBeInTheDocument()
  })

  it('accepts a className override', () => {
    render(<Headline className="opacity-50" />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveClass('opacity-50')
  })
})
