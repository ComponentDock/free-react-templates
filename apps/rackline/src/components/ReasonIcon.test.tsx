import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ReasonIcon } from './ReasonIcon'

describe('ReasonIcon', () => {
  it('draws the bracket artwork with a 2px current-colour stroke', () => {
    const { container } = render(<ReasonIcon className="absolute inset-0" />)

    const svg = container.querySelector('svg')
    expect(svg).not.toBeNull()
    expect(svg).toHaveAttribute('viewBox', '0 0 59 68')
    expect(svg).toHaveAttribute('stroke-width', '2')
    expect(svg).toHaveAttribute('fill', 'none')
    expect(svg).toHaveAttribute('aria-hidden', 'true')
    expect(svg?.getAttribute('class')).toBe('absolute inset-0')
    expect(container.querySelectorAll('path')).toHaveLength(6)
  })

  it('renders without a class when none is given', () => {
    const { container } = render(<ReasonIcon />)

    expect(container.querySelector('svg')?.getAttribute('class')).toBeNull()
  })
})
