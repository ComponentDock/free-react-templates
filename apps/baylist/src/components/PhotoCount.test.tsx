import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PhotoCount } from './PhotoCount'

describe('PhotoCount', () => {
  it('reads the count in words after a hidden camera glyph', () => {
    const { container } = render(<PhotoCount photos={24} />)

    const pill = screen.getByText('24 photos')
    expect(pill.className).toContain('absolute')
    expect(pill.className).toContain('right-3.5')
    expect(pill.className).toContain('bottom-3.5')
    expect(pill.className).toContain('inline-flex')
    expect(pill.className).toContain('gap-[5px]')
    expect(pill.className).toContain('px-[9px]')
    expect(pill.className).toContain('rounded-lg')
    expect(pill.className).toContain('text-[12.5px]')
    expect(pill.className).toContain('font-semibold')
    expect(pill.className).toContain('text-white')

    const glyph = container.querySelector('svg')!
    expect(glyph).toHaveAttribute('aria-hidden', 'true')
    expect(glyph).toHaveAttribute('width', '15')
    expect(glyph).toHaveAttribute('height', '15')
    expect(pill.textContent).toBe('24 photos')
  })

  it('prints whatever count it is handed', () => {
    render(<PhotoCount photos={31} />)
    expect(screen.getByText('31 photos')).toBeInTheDocument()
  })
})
