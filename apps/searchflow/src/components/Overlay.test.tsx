import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Overlay } from './Overlay'

describe('Overlay', () => {
  it('renders children', () => {
    render(
      <Overlay>
        <div data-testid="child">Hello</div>
      </Overlay>,
    )
    expect(screen.getByTestId('child')).toHaveTextContent('Hello')
  })

  it('applies full viewport dark background', () => {
    const { container } = render(
      <Overlay>
        <span>content</span>
      </Overlay>,
    )
    const overlay = container.firstChild as HTMLElement
    expect(overlay.className).toContain('fixed')
    expect(overlay.className).toContain('inset-0')
    expect(overlay.className).toContain('bg-[#757575]')
  })
})
