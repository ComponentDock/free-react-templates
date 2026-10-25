import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CardChip } from './CardChip'

describe('CardChip', () => {
  it('pins a white pill 14px into the cover with the label in the card hue', () => {
    render(<CardChip label="Life outside work" />)

    const chip = screen.getByText('Life outside work')
    expect(chip.tagName).toBe('SPAN')
    expect(chip).toHaveClass(
      'absolute',
      'left-[14px]',
      'top-[14px]',
      'whitespace-nowrap',
      'rounded-full',
      'bg-white',
      'px-[11px]',
      'py-[5px]',
      'text-[12.5px]',
      'font-semibold',
    )
    expect(chip.className).toContain('text-[var(--chip)]')
    expect(chip.className).toContain('shadow-[0_2px_8px_rgba(0,0,0,0.15)]')
  })

  it('renders any label verbatim, sentence case included', () => {
    render(<CardChip label="Productivity" />)

    expect(screen.getByText('Productivity').textContent).toBe('Productivity')
  })
})
