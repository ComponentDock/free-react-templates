import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import type { IconKey } from '../data'
import { WeatherIcon } from './WeatherIcon'

const GLYPHS: { icon: IconKey; label: string; shape: string }[] = [
  { icon: 'sun', label: 'Sunny', shape: 'isobar-sun' },
  { icon: 'partly', label: 'Partly cloudy', shape: 'isobar-cloud' },
  { icon: 'cloud', label: 'Cloudy', shape: 'isobar-cloud' },
  { icon: 'rain', label: 'Light rain', shape: 'isobar-rain' },
  { icon: 'thunder', label: 'Thunderstorms', shape: 'isobar-bolt' },
  { icon: 'snow', label: 'Light snow', shape: 'isobar-snow' },
]

describe('WeatherIcon', () => {
  it.each(GLYPHS)('draws $icon as a labelled image', ({ icon, label, shape }) => {
    const { container } = render(<WeatherIcon icon={icon} label={label} className="h-9 w-9" />)

    const svg = screen.getByRole('img', { name: label })
    expect(svg.tagName.toLowerCase()).toBe('svg')
    expect(svg).toHaveAttribute('viewBox', '0 0 64 64')
    expect(svg.getAttribute('class')).toContain('block')
    expect(svg.getAttribute('class')).toContain('h-9')
    expect(container.querySelector(`.${shape}`)).not.toBeNull()
  })

  it('draws a sun group on every sun-bearing glyph and no cloud on a bare sun', () => {
    const { container, rerender } = render(<WeatherIcon icon="partly" label="Partly cloudy" />)
    expect(container.querySelectorAll('.isobar-sun')).toHaveLength(1)
    expect(container.querySelectorAll('.isobar-cloud')).toHaveLength(1)

    rerender(<WeatherIcon icon="sun" label="Sunny" />)
    expect(container.querySelectorAll('.isobar-sun')).toHaveLength(1)
    expect(container.querySelectorAll('.isobar-cloud')).toHaveLength(0)
  })

  it('animates the sun only when asked', () => {
    const { container, rerender } = render(
      <WeatherIcon icon="partly" label="Partly cloudy" spin />,
    )
    expect(container.querySelector('.isobar-sun')?.getAttribute('class')).toContain('isobar-spin')

    rerender(<WeatherIcon icon="partly" label="Partly cloudy" />)
    expect(container.querySelector('.isobar-sun')?.getAttribute('class')).not.toContain(
      'isobar-spin',
    )
  })

  it('leaves the spin class off glyphs without a sun', () => {
    const { container } = render(<WeatherIcon icon="snow" label="Light snow" spin />)

    expect(container.querySelector('.isobar-sun')).toBeNull()
    expect(container.querySelector('.isobar-snow')).not.toBeNull()
  })
})
