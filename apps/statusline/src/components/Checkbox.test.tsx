import { useState } from 'react'
import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Checkbox } from './Checkbox'

function Harness({ initial = false }: { initial?: boolean }) {
  const [checked, setChecked] = useState(initial)
  return <Checkbox checked={checked} onChange={setChecked} label="Select Markotto89" />
}

describe('Checkbox', () => {
  it('renders a real focusable input hidden via opacity (not display:none)', () => {
    render(<Harness />)
    const input = screen.getByRole('checkbox', { name: 'Select Markotto89' })
    expect(input).toHaveAttribute('type', 'checkbox')
    expect(input).not.toBeChecked()
    expect(input.className).toContain('opacity-0')
    expect(input.className).toContain('absolute')
    expect(input.className).not.toContain('display')
    expect(input.className).not.toContain('hidden')
  })

  it('shows the light-gray empty square when unchecked', () => {
    const { container } = render(<Harness />)
    const glyph = container.querySelector('svg')
    expect(glyph).toBeInTheDocument()
    expect(glyph?.getAttribute('aria-hidden')).toBe('true')
    expect(glyph?.getAttribute('width')).toBe('20')
    expect(glyph?.getAttribute('height')).toBe('20')
    expect(glyph?.getAttribute('class')).toContain('text-uncheck')
    expect(glyph?.getAttribute('class')).toContain('duration-300')
    expect(glyph?.getAttribute('class')).toContain('motion-reduce:transition-none')
  })

  it('shows the teal check-square when default-checked', () => {
    const { container } = render(<Harness initial />)
    const input = screen.getByRole('checkbox', { name: 'Select Markotto89' })
    expect(input).toBeChecked()
    const glyph = container.querySelector('svg')
    expect(glyph?.getAttribute('class')).toContain('text-accent')
  })

  it('toggles to the teal glyph on click and back on second click', async () => {
    const user = userEvent.setup()
    const { container } = render(<Harness />)
    const input = screen.getByRole('checkbox', { name: 'Select Markotto89' })
    await user.click(input)
    expect(input).toBeChecked()
    expect(container.querySelector('svg')?.getAttribute('class')).toContain('text-accent')
    await user.click(input)
    expect(input).not.toBeChecked()
    expect(container.querySelector('svg')?.getAttribute('class')).toContain('text-uncheck')
  })

  it('invokes onChange with the new checked value', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()
    render(<Checkbox checked={false} onChange={handleChange} label="Select Larry_bird" />)
    const input = screen.getByRole('checkbox', { name: 'Select Larry_bird' })
    await user.click(input)
    expect(handleChange).toHaveBeenCalledWith(true)
  })
})
