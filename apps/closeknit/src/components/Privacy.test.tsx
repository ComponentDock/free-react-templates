import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Privacy } from './Privacy'
import { PRIVACY, PRIVACY_CALLOUT } from '../content'

describe('Privacy', () => {
  it('renders the six defaults in order with their status labels', () => {
    render(<Privacy />)

    for (const item of PRIVACY) {
      expect(screen.getByRole('heading', { level: 3, name: item.title })).toBeInTheDocument()
      expect(screen.getByText(item.body)).toBeInTheDocument()
    }

    expect(screen.getAllByText('On by default')).toHaveLength(3)
    expect(screen.getByText('Permanently off')).toBeInTheDocument()
    expect(screen.getByText('Off by default')).toBeInTheDocument()
    expect(screen.getByText('Always available')).toBeInTheDocument()
    expect(screen.getByText(PRIVACY_CALLOUT)).toBeInTheDocument()
  })

  it('exposes each switch as an image named by its status, never as a control', () => {
    render(<Privacy />)

    const switches = screen.getAllByRole('img')
    expect(switches).toHaveLength(6)
    expect(switches.map((glyph) => glyph.getAttribute('aria-label'))).toEqual([
      'On by default',
      'On by default',
      'On by default',
      'Permanently off',
      'Off by default',
      'Always available',
    ])
    expect(screen.queryAllByRole('switch')).toHaveLength(0)
    expect(screen.queryAllByRole('checkbox')).toHaveLength(0)
    expect(screen.queryAllByRole('button')).toHaveLength(0)
  })

  it('draws the knob on the right only for the four defaults that are on', () => {
    const { container } = render(<Privacy />)
    const tracks = container.querySelectorAll('[role="img"]')

    expect(tracks[0]).toHaveClass('justify-end', 'bg-primary-600')
    expect(tracks[3]).toHaveClass('justify-start', 'bg-gray-200')
  })
})
