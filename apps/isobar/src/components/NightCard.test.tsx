import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { NIGHT } from '../data'
import { NightCard } from './NightCard'

describe('NightCard', () => {
  it('is a compact indigo section named by its own heading', () => {
    const { container } = render(<NightCard night={NIGHT} />)

    const section = container.querySelector('section') as HTMLElement
    const heading = container.querySelector('h2') as HTMLElement
    expect(section).toHaveAttribute('aria-labelledby', 'isobar-night')
    expect(heading.id).toBe('isobar-night')
    expect(heading.textContent).toBe('Reykjavík')
    expect(heading.getAttribute('class')).toContain('text-[22px]')
    expect(section.getAttribute('class')).toContain('isobar-night')
    expect(section.getAttribute('class')).toContain('rounded-card')
    expect(section.getAttribute('class')).toContain(
      'bg-[linear-gradient(170deg,#1e1b4b,#312e81)]',
    )
  })

  it('draws the square 64 px snow glyph with no negative margin', () => {
    const { container } = render(<NightCard night={NIGHT} />)

    const icon = container.querySelector('svg[role="img"]') as SVGElement
    expect(icon.getAttribute('aria-label')).toBe('Light snow')
    expect(icon.getAttribute('class')).toContain('h-16')
    expect(icon.getAttribute('class')).toContain('w-16')
    expect(icon.getAttribute('class')).not.toContain('-mt-')
    expect(container.querySelector('.isobar-snow')).not.toBeNull()
  })

  it('prints the temperature at 64 px with the true minus sign', () => {
    const { container } = render(<NightCard night={NIGHT} />)

    const temp = container.querySelector('p.mt-\\[18px\\]') as HTMLElement
    expect(temp.textContent).toBe('−2° degrees Celsius')
    expect(temp.getAttribute('class')).toContain('text-[64px]')
    expect(temp.getAttribute('class')).toContain('font-light')
    expect(temp.getAttribute('class')).not.toContain('isobar-temp')
    expect(temp.querySelector('[aria-hidden="true"]')?.textContent).toBe('°')
    expect(temp.querySelector('.sr-only')?.textContent).toBe(' degrees Celsius')
  })

  it('ends with the icy-roads warning strip', () => {
    const { container } = render(<NightCard night={NIGHT} />)

    const note = Array.from(container.querySelectorAll('p')).find((p) =>
      p.textContent?.includes('Icy roads warning'),
    ) as HTMLElement
    expect(note.textContent).toBe('Icy roads warning until 18:00')
    const className = note.getAttribute('class')
    expect(className).toContain('rounded-note')
    expect(className).toContain('bg-note-bg')
    expect(className).toContain('text-note')
    expect(className).toContain('text-[13.5px]')
    expect(className).toContain('px-3')
    expect(className).toContain('py-2.5')

    const warning = note.querySelector('svg') as SVGElement
    expect(warning).toHaveAttribute('aria-hidden', 'true')
    expect(warning.getAttribute('class')).toContain('h-[18px]')
    expect(warning.getAttribute('class')).toContain('w-[18px]')
  })

  it('states the local time and the condition line on the muted token', () => {
    const { container } = render(<NightCard night={NIGHT} />)

    const when = container.querySelector('p') as HTMLElement
    expect(when.textContent).toBe('13:20 local')
    expect(when.getAttribute('class')).toContain('text-[14px]')
    expect(when.getAttribute('class')).toContain('text-muted')

    const condition = Array.from(container.querySelectorAll('p')).find((p) =>
      p.textContent?.startsWith('Light snow'),
    ) as HTMLElement
    expect(condition.textContent).toBe('Light snow · H 1° L −4°')
    expect(condition.getAttribute('class')).toContain('text-[16px]')
    expect(condition.getAttribute('class')).toContain('font-medium')
  })
})
