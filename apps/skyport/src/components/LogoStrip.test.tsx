import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LogoStrip } from './LogoStrip'

describe('LogoStrip', () => {
  it('renders exactly five own grey partner marks', () => {
    render(<LogoStrip />)

    const marks = screen.getAllByRole('listitem')
    expect(marks).toHaveLength(5)
    expect(screen.getByRole('list')).toHaveClass('text-[#a8a8a8]')
  })

  it('uses the reference padding rhythm around the row', () => {
    const { container } = render(<LogoStrip />)

    expect(container.querySelector('section')).toHaveClass('pt-[40px]')
    expect(screen.getByRole('list')).toHaveClass('py-[60px]', 'px-[65px]')
  })

  it('hides every mark glyph from the accessibility tree', () => {
    const { container } = render(<LogoStrip />)

    expect(container.querySelectorAll('svg')).toHaveLength(5)
    container.querySelectorAll('svg').forEach((glyph) => {
      expect(glyph).toHaveAttribute('aria-hidden', 'true')
    })
  })
})
