import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'
import { HERO, HERO_FACTS } from '../content'

describe('Hero', () => {
  it('carries the page’s only h1, verbatim', () => {
    render(<Hero />)
    const h1 = screen.getByRole('heading', { level: 1 })
    expect(h1).toHaveTextContent(HERO.heading)
    expect(h1.className).toContain('sm:text-5xl')
    expect(h1.className).toContain('font-bold')
  })

  it('shows the eyebrow, the lede and both CTAs', () => {
    render(<Hero />)
    expect(screen.getByText(HERO.eyebrow)).toBeInTheDocument()
    expect(screen.getByText(HERO.lede)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: HERO.primaryCta })).toHaveAttribute('href', '#contact')
    expect(screen.getByRole('link', { name: HERO.secondaryCta })).toHaveAttribute(
      'href',
      '#projects',
    )
  })

  it('prints the four prequalification facts in order', () => {
    render(<Hero />)
    const labels = screen.getAllByRole('rowheader').map((cell) => cell.textContent)
    expect(labels).toEqual(HERO_FACTS.map((fact) => fact.label))
    HERO_FACTS.forEach((fact) => expect(screen.getByText(fact.value)).toBeInTheDocument())
  })

  it('uses one placeholder photograph, portrait from lg and 4:3 below', () => {
    render(<Hero />)
    const image = screen.getByRole('img', { name: HERO.imageAlt }) as HTMLImageElement
    expect(image.src).toContain('picsum.photos/seed/mandrel-plantroom/960/1280')
    expect(image.className).toContain('aspect-[4/3]')
    expect(image.className).toContain('lg:aspect-[3/4]')
    expect(image.className).toContain('rounded-xl')
  })

  it('sits on the grey ground with a hairline under it', () => {
    const { container } = render(<Hero />)
    const band = container.querySelector('section') as HTMLElement
    expect(band.className).toContain('bg-ink-50')
    expect(band.className).toContain('border-b')
  })
})
