import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { StarRating } from './StarRating'

describe('StarRating', () => {
  it('renders 5 star buttons', () => {
    render(<StarRating value={0} onChange={vi.fn()} />)
    expect(screen.getAllByRole('button', { name: /rate/i })).toHaveLength(5)
  })

  it('highlights stars up to the current value', () => {
    render(<StarRating value={3} onChange={vi.fn()} />)
    const buttons = screen.getAllByRole('button', { name: /rate/i })
    // Stars 5, 4, 3 should be filled (value 3 means 3 stars filled)
    const svgFilled = buttons[2]?.querySelector('svg')
    expect(svgFilled?.getAttribute('class')).toContain('fill-star')
    const svgFilled2 = buttons[3]?.querySelector('svg')
    expect(svgFilled2?.getAttribute('class')).toContain('fill-star')
    const svgFilled3 = buttons[4]?.querySelector('svg')
    expect(svgFilled3?.getAttribute('class')).toContain('fill-star')
    // Stars 2, 1 should be empty
    const svgEmpty = buttons[0]?.querySelector('svg')
    expect(svgEmpty?.getAttribute('class')).toContain('fill-none')
    const svgEmpty2 = buttons[1]?.querySelector('svg')
    expect(svgEmpty2?.getAttribute('class')).toContain('fill-none')
  })

  it('calls onChange when a star is clicked', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<StarRating value={0} onChange={onChange} />)
    const buttons = screen.getAllByRole('button', { name: /rate/i })
    await user.click(buttons[2]!) // Click star 3
    expect(onChange).toHaveBeenCalledWith(3)
  })

  it('calls onChange with correct value for each star', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<StarRating value={0} onChange={onChange} />)
    const buttons = screen.getAllByRole('button', { name: /rate/i })
    await user.click(buttons[0]!) // Star 5 (first button = highest value)
    expect(onChange).toHaveBeenCalledWith(5)
    await user.click(buttons[4]!) // Star 1 (last button = lowest value)
    expect(onChange).toHaveBeenCalledWith(1)
  })
})
