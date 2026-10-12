import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PhotoPanel } from './PhotoPanel'

describe('PhotoPanel', () => {
  it('takes half the row and carries the cross-fading layer behind its content', () => {
    render(<PhotoPanel />)

    const panel = screen.getByTestId('photo-panel')

    expect(panel).toHaveClass(
      'relative',
      'z-1',
      'w-1/2',
      'max-[1200px]:w-2/5',
      'max-[992px]:h-[500px]',
      'max-[992px]:w-full',
    )
    expect(panel.querySelector('[data-testid="slideshow"]')).not.toBeNull()
    expect(panel.className).not.toContain('fixed')
  })

  it('accepts layout overrides', () => {
    render(<PhotoPanel className="w-full" />)

    expect(screen.getByTestId('photo-panel')).toHaveClass('w-full')
  })
})
