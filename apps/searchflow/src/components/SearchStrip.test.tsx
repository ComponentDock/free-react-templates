import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { SearchStrip } from './SearchStrip'

describe('SearchStrip', () => {
  it('renders children', () => {
    render(
      <SearchStrip>
        <div data-testid="child">Form here</div>
      </SearchStrip>,
    )
    expect(screen.getByTestId('child')).toHaveTextContent('Form here')
  })

  it('applies white background and full width', () => {
    const { container } = render(
      <SearchStrip>
        <span>content</span>
      </SearchStrip>,
    )
    const strip = container.firstChild as HTMLElement
    expect(strip.className).toContain('bg-white')
    expect(strip.className).toContain('w-full')
    expect(strip.className).toContain('h-[60px]')
  })
})
