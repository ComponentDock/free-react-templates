import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('is a 1,120 px content-height stage on the pale blue ground', () => {
    const { container } = render(<App />)

    const main = container.querySelector('main') as HTMLElement
    const className = main.getAttribute('class')
    expect(className).toContain('max-w-[1120px]')
    expect(className).toContain('box-content')
    expect(className).toContain('mx-auto')
    expect(className).toContain('px-4')
    expect(className).toContain('py-[clamp(32px,6vw,72px)]')
    expect(className).toContain('bg-ground')
    expect(className).toContain('text-ink')
    expect(className).not.toContain('min-h')
  })

  it('labels the page with one visible h1 over a three-track row', () => {
    const { container } = render(<App />)

    const h1 = screen.getByRole('heading', { level: 1 })
    expect(h1.textContent).toBe('Weather')
    expect(h1.getAttribute('class')).toContain('text-[28px]')
    expect(h1.getAttribute('class')).toContain('leading-[34px]')
    expect(h1.getAttribute('class')).toContain('font-bold')
    expect(h1.getAttribute('class')).toContain('tracking-[-0.02em]')

    const row = container.querySelector('.isobar-grid') as HTMLElement
    expect(row).not.toBeNull()
    expect(row.children).toHaveLength(3)
    expect(h1.nextElementSibling).toBe(row)
  })

  it('binds every section to its own h2 and starts the outline at h1', () => {
    const { container } = render(<App />)

    const sections = container.querySelectorAll('section')
    expect(sections).toHaveLength(3)

    for (const section of sections) {
      const id = section.getAttribute('aria-labelledby') as string
      const heading = container.querySelector(`#${id}`) as HTMLElement
      expect(heading.tagName.toLowerCase()).toBe('h2')
      expect(section.contains(heading)).toBe(true)
    }

    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(3)
    expect(container.querySelectorAll('h3')).toHaveLength(0)
  })

  it('stays static: no added controls, one focusable attribution link', () => {
    const { container } = render(<App />)

    expect(container.querySelectorAll('img')).toHaveLength(0)
    expect(container.querySelectorAll('button')).toHaveLength(0)
    expect(container.querySelectorAll('input')).toHaveLength(0)
    expect(container.querySelectorAll('form')).toHaveLength(0)
    expect(screen.getAllByRole('link')).toHaveLength(1)
    expect(container.querySelectorAll('svg[role="img"]')).toHaveLength(12)
    expect(container.querySelectorAll('svg')).toHaveLength(14)
  })

  it('closes with the Component Dock line under the row', () => {
    const { container } = render(<App />)

    const row = container.querySelector('.isobar-grid') as HTMLElement
    const footer = container.querySelector('footer') as HTMLElement
    expect(row.nextElementSibling).toBe(footer)
    expect(footer.textContent).toBe('More templates at Component Dock')
  })
})
