import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { LICENCE_ITEMS, LICENCE_RATING } from '../content'
import { LicenceBar } from './LicenceBar'

describe('LicenceBar', () => {
  it('prints the licence number, the paperwork claim and the county', () => {
    render(<LicenceBar />)
    LICENCE_ITEMS.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument()
      expect(screen.getByText(item.value)).toBeInTheDocument()
    })
  })

  it('carries the ink ground, the 36 px row and the rating on the right', () => {
    render(<LicenceBar />)
    const strip = document.querySelector('[data-licence-bar]') as HTMLElement
    expect(strip.className).toContain('bg-ink-800')
    expect(strip.querySelector('.h-9')).not.toBeNull()
    expect(screen.getByText(LICENCE_RATING.score)).toBeInTheDocument()
    expect(screen.getByText(LICENCE_RATING.caption)).toBeInTheDocument()
  })

  it('hides the second and third pairs below sm', () => {
    render(<LicenceBar />)
    const hidden = LICENCE_ITEMS.filter((item) => item.wide)
    expect(hidden).toHaveLength(2)
    hidden.forEach((item) => {
      expect(screen.getByText(item.value).parentElement?.className).toContain('hidden')
    })
  })
})
