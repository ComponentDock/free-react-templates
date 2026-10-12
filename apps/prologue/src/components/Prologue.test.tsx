import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Prologue } from './Prologue'

describe('Prologue', () => {
  it('splits the viewport into a white panel and a photo panel under one scrim', () => {
    render(<Prologue />)

    const row = screen.getByTestId('prologue')

    expect(row).toHaveClass(
      'relative',
      'z-[1]',
      'flex',
      'min-h-screen',
      'w-full',
      'flex-wrap',
      'items-stretch',
    )

    const scrims = screen.getAllByTestId('scrim')

    expect(scrims).toHaveLength(1)
    expect(scrims[0]).toHaveClass('absolute', 'inset-0', 'z-[-1]', 'bg-scrim')

    expect(row.children[0]).toBe(scrims[0])
    expect(row.children[1]).toBe(screen.getByTestId('content-panel'))
    expect(row.children[2]).toBe(screen.getByTestId('photo-panel'))
    expect(screen.getByTestId('content-panel')).toHaveClass('bg-panel')
  })

  it('ships no navbar, footer band, countdown, second section or asset image', () => {
    const { container } = render(<Prologue />)

    expect(screen.queryByRole('navigation')).toBeNull()
    expect(screen.queryByRole('contentinfo')).toBeNull()
    expect(screen.queryByRole('timer')).toBeNull()
    expect(screen.queryByTestId('slideshow')).toBeNull()
    expect(container.querySelectorAll('img')).toHaveLength(0)
    expect(container.querySelectorAll('section')).toHaveLength(0)
  })

  it('accepts layout overrides', () => {
    render(<Prologue className="min-h-0" />)

    expect(screen.getByTestId('prologue')).toHaveClass('min-h-0')
  })
})
