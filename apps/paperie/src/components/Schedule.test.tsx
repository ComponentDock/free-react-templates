import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SERVICES } from '../lib/site'
import { Schedule } from './Schedule'

function tokens(element: Element): string[] {
  return (element.getAttribute('class') ?? '').split(' ')
}

describe('the running order', () => {
  it('sets three columns with their title, date, ringed photograph, time and address', () => {
    const { container } = render(<Schedule />)

    const cards = screen.getAllByTestId('schedule-card')

    expect(cards).toHaveLength(3)

    for (const [position, service] of SERVICES.entries()) {
      const card = cards[position] as HTMLElement

      expect(within(card).getByRole('heading', { level: 3, name: service.title })).toBeInTheDocument()
      expect(within(card).getByText(service.date)).toBeInTheDocument()
      expect(within(card).getByText(service.time)).toBeInTheDocument()
      expect(within(card).getByText(service.address)).toBeInTheDocument()

      const photo = within(card).getByRole('img')

      expect(tokens(photo)).toContain('rounded-full')
      expect(tokens(photo)).toContain('border-[10px]')
      expect(tokens(photo)).toContain('border-ring')
    }

    expect(container.querySelectorAll('img')).toHaveLength(3)

    const time = screen.getByText(SERVICES[0]!.time)

    expect(tokens(time)).toContain('text-blush')
    expect(tokens(time)).toContain('tracking-[10px]')
    expect(tokens(time)).toContain('uppercase')
  })

  it('tucks a sprig behind every photograph and hides it from assistive technology', () => {
    const { container } = render(<Schedule />)
    const sprigs = screen.getAllByTestId('schedule-sprig')

    expect(sprigs).toHaveLength(3)

    for (const sprig of sprigs) {
      expect(tokens(sprig)).toContain('pointer-events-none')
      expect(sprig.querySelector('svg')?.getAttribute('aria-hidden')).toBe('true')
    }

    expect(container.querySelectorAll('svg[aria-hidden="true"]')).toHaveLength(3)
  })

  it('draws the gold rule between neighbouring columns only', () => {
    const { container } = render(<Schedule />)
    const dividers = screen.getAllByTestId('schedule-divider')

    expect(dividers).toHaveLength(2)
    for (const divider of dividers) {
      expect(tokens(divider)).toContain('bg-gold')
      expect(tokens(divider)).toContain('h-[75px]')
      expect(tokens(divider)).toContain('w-[2px]')
      expect(tokens(divider)).toContain('lg:block')
      expect(divider).toHaveAttribute('aria-hidden', 'true')
    }

    const lastCard = screen.getAllByTestId('schedule-card')[2] as HTMLElement

    expect(within(lastCard).queryAllByTestId('schedule-divider')).toHaveLength(0)
    expect(tokens(screen.getByRole('region', { name: 'The day' }))).toContain('bg-cream')
    expect(container.querySelectorAll('[data-testid="schedule-divider"]')).toHaveLength(2)
  })
})
