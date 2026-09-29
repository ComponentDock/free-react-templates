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

  it('applies fullscreen fixed positioning', () => {
    const { container } = render(
      <Overlay>
        <span>Content</span>
      </Overlay>,
    )
    const overlay = container.firstChild as HTMLElement
    expect(overlay).toHaveClass('fixed', 'inset-0', 'z-50')
  })

  it('centers content vertically and horizontally', () => {
    const { container } = render(
      <Overlay>
        <span>Content</span>
      </Overlay>,
    )
    const overlay = container.firstChild as HTMLElement
    expect(overlay).toHaveClass('flex', 'flex-col', 'items-center', 'justify-center')
  })

  it('applies white background', () => {
    const { container } = render(
      <Overlay>
        <span>Content</span>
      </Overlay>,
    )
    const overlay = container.firstChild as HTMLElement
    expect(overlay).toHaveClass('bg-white')
  })

  it('has dialog role and aria-modal', () => {
    const { container } = render(
      <Overlay>
        <span>Content</span>
      </Overlay>,
    )
    const overlay = container.firstChild as HTMLElement
    expect(overlay).toHaveAttribute('role', 'dialog')
    expect(overlay).toHaveAttribute('aria-modal', 'true')
  })

  it('has accessible label for search overlay', () => {
    const { container } = render(
      <Overlay>
        <span>Content</span>
      </Overlay>,
    )
    const overlay = container.firstChild as HTMLElement
    expect(overlay).toHaveAttribute('aria-label', 'Search overlay')
  })
})
