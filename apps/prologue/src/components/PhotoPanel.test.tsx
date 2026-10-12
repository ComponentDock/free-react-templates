import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PhotoPanel } from './PhotoPanel'

describe('PhotoPanel', () => {
  it('is one empty cover-sized photograph with no slideshow', () => {
    render(<PhotoPanel />)

    const panel = screen.getByTestId('photo-panel')

    expect(panel).toHaveAttribute('aria-hidden', 'true')
    expect(panel).toHaveClass(
      'w-[63%]',
      'bg-cover',
      'bg-center',
      'bg-no-repeat',
      'max-[1200px]:w-[40%]',
      'max-[992px]:h-[500px]',
      'max-[992px]:w-full',
    )
    expect(panel.style.backgroundImage).toContain('picsum.photos/seed/prologue-hollow/1200/900')
    expect(panel.childElementCount).toBe(0)
    expect(screen.queryByTestId('slideshow')).toBeNull()
  })

  it('accepts layout overrides', () => {
    const { container } = render(<PhotoPanel className="hidden" />)

    expect(container.querySelector('[data-testid="photo-panel"]')).toHaveClass('hidden')
  })
})
