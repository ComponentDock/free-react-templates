import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'
import { services } from '../data'

describe('Services', () => {
  it('renders four practice cards on the cream band, each a focusable link', () => {
    render(<Services />)
    const band = screen.getByRole('heading', { level: 2, name: services[0]!.title }).closest('section')
    const cards = Array.from(band!.querySelectorAll('a')) as HTMLElement[]

    expect(cards).toHaveLength(services.length)
    expect(band).toHaveClass('bg-cream')
    for (const card of cards) {
      expect(card.getAttribute('href')).toBe('#contact')
      expect(card.className).toContain('group')
      expect(card.className).toContain('h-[300px]')
    }
  })

  it('gives every card a gradient disc with a 40px glyph and an uppercase heading', () => {
    render(<Services />)
    const descriptions = services.map((service) => service.description)

    for (const [index, service] of services.entries()) {
      const heading = screen.getByRole('heading', { level: 2, name: service.title })
      expect(heading.className).toContain('uppercase')
      expect(heading.className).toContain('group-hover:text-[22px]')

      const card = heading.closest('a') as HTMLElement
      const disc = card.querySelector('span') as HTMLElement
      expect(disc.className).toContain('rounded-full')
      expect(disc.className).toContain('bg-[linear-gradient(0deg,#ab7636_0%,#d7af7e_100%)]')
      expect(disc.className).toContain('text-white')
      expect(disc.querySelector('svg')).toHaveClass('size-[30px]')
      expect(screen.getByText(descriptions[index]!)).toHaveClass('hidden')
      expect(screen.getByText(descriptions[index]!)).toHaveClass('group-hover:block')
    }
  })
})
