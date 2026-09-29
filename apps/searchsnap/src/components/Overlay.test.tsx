import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Overlay } from './Overlay'

describe('Overlay', () => {
  it('renders children inside a full-screen container', () => {
    render(
      <Overlay>
        <div data-testid="child">Hello</div>
      </Overlay>,
    )
    expect(screen.getByTestId('child')).toBeInTheDocument()
  })

  it('applies full-viewport styling', () => {
    const { container } = render(
      <Overlay>
        <span>Content</span>
      </Overlay>,
    )
    const overlay = container.firstChild as HTMLElement
    expect(overlay).toHaveClass('min-h-screen', 'w-full')
  })

  it('centers content vertically and horizontally', () => {
    const { container } = render(
      <Overlay>
        <span>Content</span>
      </Overlay>,
    )
    const overlay = container.firstChild as HTMLElement
    expect(overlay).toHaveClass('flex', 'items-center', 'justify-center')
  })

  it('applies light gray background', () => {
    const { container } = render(
      <Overlay>
        <span>Content</span>
      </Overlay>,
    )
    const overlay = container.firstChild as HTMLElement
    expect(overlay).toHaveClass('bg-[#f8f9fa]')
  })
})
