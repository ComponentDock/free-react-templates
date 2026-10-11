import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BeachScene } from './BeachScene'

describe('BeachScene', () => {
  it('draws the flat coast illustration with the drifting camper bus', () => {
    render(<BeachScene />)

    const scene = screen.getByTestId('beach-scene')
    expect(scene).toHaveAttribute('aria-hidden', 'true')

    const svg = scene.querySelector('svg')
    expect(svg).toHaveAttribute('viewBox', '0 0 1440 880')
    expect(svg?.querySelectorAll('path').length).toBeGreaterThan(10)

    // The bus is the only animated group in the illustration.
    const bus = svg?.querySelector('.bus-running')
    expect(bus).not.toBeNull()
    expect(bus?.querySelectorAll('rect')).toHaveLength(9)
  })
})
