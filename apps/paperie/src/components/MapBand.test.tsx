import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { MAP_CAPTION, MAP_TITLE } from '../lib/site'
import { MapBand } from './MapBand'

function tokens(element: Element): string[] {
  return (element.getAttribute('class') ?? '').split(' ')
}

describe('the location band', () => {
  it('embeds a map of the lane without a key, loaded only as it is reached', () => {
    render(<MapBand />)

    const frame = screen.getByTitle(MAP_TITLE) as HTMLIFrameElement

    expect(frame.tagName).toBe('IFRAME')
    expect(frame.getAttribute('loading')).toBe('lazy')
    expect(frame.src).toContain('openstreetmap.org')
    expect(frame.src).not.toContain('key=')
    expect(frame.src).not.toContain('google')
    expect(tokens(frame)).toContain('h-[500px]')
    expect(tokens(frame)).toContain('w-full')
  })

  it('names the place the map shows for screen readers', () => {
    render(<MapBand />)

    expect(screen.getByText(MAP_CAPTION)).toHaveClass('sr-only')
  })
})
