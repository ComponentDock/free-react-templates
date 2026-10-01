import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Checkbox } from './Checkbox'

describe('Checkbox', () => {
  it('renders an unchecked light-gray square for the given label', () => {
    const { container } = render(
      <Checkbox checked={false} onChange={vi.fn()} label="Select Sneakers" />,
    )
    const input = screen.getByRole('checkbox', { name: 'Select Sneakers' })
    expect(input).not.toBeChecked()
    expect(input.className).toContain('opacity-0')
    const glyph = container.querySelector('svg') as SVGSVGElement
    expect(glyph).toBeInTheDocument()
    expect(glyph.getAttribute('width')).toBe('20')
    expect(glyph.getAttribute('class')).toContain('text-uncheck')
    expect(glyph.getAttribute('class')).toContain('transition-colors')
    expect(glyph.getAttribute('class')).toContain('duration-300')
    expect(glyph.getAttribute('class')).toContain('motion-reduce:transition-none')
  })

  it('renders a sage check-square when checked', () => {
    const { container } = render(<Checkbox checked onChange={vi.fn()} label="Select Sneakers" />)
    expect(screen.getByRole('checkbox', { name: 'Select Sneakers' })).toBeChecked()
    const glyph = container.querySelector('svg') as SVGSVGElement
    expect(glyph.getAttribute('class')).toContain('text-sage')
  })

  it('calls onChange with the new checked state on click', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()
    render(<Checkbox checked={false} onChange={handleChange} label="Select Sneakers" />)
    await user.click(screen.getByRole('checkbox', { name: 'Select Sneakers' }))
    expect(handleChange).toHaveBeenCalledWith(true)
  })
})
