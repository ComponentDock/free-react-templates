import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { NOW } from '../data'
import { NowCard } from './NowCard'

describe('NowCard', () => {
  it('is a blue gradient section named by its city heading', () => {
    const { container } = render(<NowCard now={NOW} />)

    const section = container.querySelector('section') as HTMLElement
    const heading = container.querySelector('h2') as HTMLElement
    expect(section).toHaveAttribute('aria-labelledby', 'isobar-city')
    expect(heading.id).toBe('isobar-city')
    expect(heading.textContent).toBe('Porto')
    expect(heading.getAttribute('class')).toContain('text-[22px]')
    expect(heading.getAttribute('class')).toContain('font-bold')

    const className = section.getAttribute('class')
    expect(className).toContain('isobar-now')
    expect(className).toContain('overflow-hidden')
    expect(className).toContain('rounded-card')
    expect(className).toContain('p-6')
    expect(className).toContain('text-white')
    expect(className).toContain(
      'bg-[linear-gradient(160deg,#1d4ed8_0%,#2563eb_45%,#0e7490_100%)]',
    )
  })

  it('hangs the 108 px spinning sun 10 px above the padding', () => {
    const { container } = render(<NowCard now={NOW} />)

    const top = container.querySelector('div') as HTMLElement
    expect(top.getAttribute('class')).toContain('flex')
    expect(top.getAttribute('class')).toContain('items-start')
    expect(top.getAttribute('class')).toContain('justify-between')
    expect(top.getAttribute('class')).toContain('gap-3')

    const icon = top.querySelector('svg') as SVGElement
    expect(icon.getAttribute('aria-label')).toBe('Partly cloudy')
    const className = icon.getAttribute('class')
    expect(className).toContain('h-[108px]')
    expect(className).toContain('w-[108px]')
    expect(className).toContain('-mt-2.5')
    expect(className).toContain('-mr-1.5')
    expect(icon.querySelector('.isobar-sun')?.getAttribute('class')).toContain('isobar-spin')

    expect(top.querySelector('p')?.textContent).toBe('Friday, 25 September · 14:20')
    expect(top.querySelector('p')?.getAttribute('class')).toContain('text-[14px]')
  })

  it('sets the temperature at 96 px with a spoken unit, not a spelled degree', () => {
    const { container } = render(<NowCard now={NOW} />)

    const temp = container.querySelector('.isobar-temp') as HTMLElement
    expect(temp.textContent).toBe('23° degrees Celsius')
    expect(temp.querySelector('[aria-hidden="true"]')?.textContent).toBe('°')
    expect(temp.querySelector('.sr-only')?.textContent).toBe(' degrees Celsius')
    expect(screen.getAllByText('degrees Celsius')).toHaveLength(1)
  })

  it('states the condition on the muted token', () => {
    const { container } = render(<NowCard now={NOW} />)

    const condition = screen.getByText('Partly cloudy · H 25° L 16°')
    expect(condition.getAttribute('class')).toContain('text-[16px]')
    expect(condition.getAttribute('class')).toContain('font-medium')
    expect(condition.getAttribute('class')).toContain('text-muted')
    expect(container.querySelectorAll('dl > div')).toHaveLength(4)
  })

  it('ends with the five-cell hourly strip', () => {
    const { container } = render(<NowCard now={NOW} />)

    const list = container.querySelector('ol') as HTMLElement
    expect(list).toHaveAttribute('aria-label', 'Next hours')
    expect(list.querySelectorAll('li')).toHaveLength(5)
    expect(container.querySelector('li')).toBe(list.firstElementChild)
  })
})
