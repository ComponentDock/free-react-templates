import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ReadTime } from './ReadTime'

describe('ReadTime', () => {
  it('renders a grey-beige pill around the label', () => {
    render(<ReadTime label="9 min read" />)

    const pill = screen.getByText('9 min read')
    expect(pill.tagName).toBe('SPAN')
    expect(pill).toHaveClass(
      'inline-flex',
      'items-center',
      'gap-[6px]',
      'whitespace-nowrap',
      'rounded-full',
      'bg-pill',
      'px-[10px]',
      'py-[4px]',
      'font-medium',
      'text-pill-ink',
    )
  })

  it('draws the clock glyph inline at 15px and hides it from assistive tech', () => {
    const { container } = render(<ReadTime label="4 min read" />)
    const svg = container.querySelector('svg')!

    expect(svg).toHaveAttribute('aria-hidden', 'true')
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24')
    expect(svg).toHaveClass('h-[15px]', 'w-[15px]', 'fill-none', 'stroke-current', 'stroke-2')
    expect(svg.className.baseVal).toContain('[stroke-linecap:round]')
    expect(svg.querySelector('circle')).toHaveAttribute('r', '9')
    expect(svg.querySelector('path')).toHaveAttribute('d', 'M12 7v5l3 2')
  })

  it('keeps the space before "min" and no trailing period', () => {
    render(<ReadTime label="6 min read" />)

    expect(screen.getByText('6 min read').textContent).toBe('6 min read')
  })
})
