import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Looming } from './Looming'

describe('Looming', () => {
  it('splits the viewport into a white panel and a photo panel under one half scrim', () => {
    render(<Looming />)

    const row = screen.getByTestId('looming')

    expect(row).toHaveClass(
      'relative',
      'z-1',
      'flex',
      'min-h-screen',
      'w-full',
      'flex-wrap',
      'items-stretch',
    )

    const scrims = screen.getAllByTestId('scrim')

    expect(scrims).toHaveLength(1)
    expect(scrims[0]).toHaveAttribute('aria-hidden', 'true')
    expect(scrims[0]).toHaveClass('absolute', 'inset-0', 'z-[-1]', 'bg-scrim')

    expect(row.children[0]).toBe(scrims[0])
    expect(row.children[1]).toBe(screen.getByTestId('content-panel'))
    expect(row.children[2]).toBe(screen.getByTestId('photo-panel'))
    expect(screen.getByTestId('content-panel')).toHaveClass('bg-panel')
  })

  it('ships no navbar, countdown, footer band or asset images', () => {
    const { container } = render(<Looming />)

    expect(screen.queryByRole('navigation')).toBeNull()
    expect(screen.queryByRole('contentinfo')).toBeNull()
    expect(screen.queryByRole('countdown')).toBeNull()
    expect(screen.queryByRole('timer')).toBeNull()
    expect(container.querySelectorAll('img')).toHaveLength(0)
  })

  it('accepts layout overrides', () => {
    render(<Looming className="min-h-0" />)

    expect(screen.getByTestId('looming')).toHaveClass('min-h-0')
  })
})
