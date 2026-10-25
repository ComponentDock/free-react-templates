import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Areas } from '../components/Areas'
import { ClosingBand } from '../components/ClosingBand'
import { EmergencyBand } from '../components/EmergencyBand'
import { Options } from '../components/Options'
import { Process } from '../components/Process'
import { StickyCall } from '../components/StickyCall'
import { WhyUs } from '../components/WhyUs'
import {
  BRAND,
  OPTIONS,
  SAMPLE_FIGURE,
  SAMPLE_PRICES,
  SAMPLE_TOWNS,
  STEPS,
  TOWNS,
  WHY_US,
} from '../data'

describe('EmergencyBand', () => {
  it('puts the leaking-tank case and a number inside one thin orange band', () => {
    render(<EmergencyBand />)

    const band = screen.getByRole('region', { name: /leaking tank is a same-day call/i })
    expect(band).toHaveClass('bg-primary-600', 'text-white')
    expect(within(band).getByText('No hot water, or a leaking tank?')).toHaveClass('uppercase')
    expect(
      within(band).getByText(
        'A leaking tank is a same-day call. We carry the common sizes on the truck.',
      ),
    ).toHaveClass('font-bold')
    expect(within(band).getByRole('link', { name: BRAND.phone })).toHaveAttribute(
      'href',
      'tel:5550900900',
    )
  })
})

describe('StickyCall', () => {
  it('is the phone-only bar, hidden from lg up', () => {
    render(<StickyCall />)

    const bar = screen.getByRole('link', { name: /leaking tank\? · \(555\) 090-0900/ })
    expect(bar).toHaveAttribute('href', 'tel:5550900900')
    expect(bar.parentElement).toHaveClass('fixed', 'bottom-0', 'z-40', 'lg:hidden')
  })
})

describe('Options', () => {
  it('prices six ways to answer the same problem, in the reference order', () => {
    render(<Options />)

    const cells = screen.getAllByRole('heading', { level: 3 }).map((heading) => heading.textContent)
    expect(cells).toEqual(OPTIONS.map((option) => option.title))

    OPTIONS.forEach((option) => {
      expect(screen.getByText(option.price)).toHaveClass('text-primary-700')
      expect(screen.getByText(option.blurb)).toHaveClass('flex-1')
    })
    expect(screen.getByText(SAMPLE_PRICES)).toBeInTheDocument()
  })

  it('puts repair in the same grid as the most expensive option', () => {
    render(<Options />)

    expect(screen.getByText('Repair rather than replace')).toBeInTheDocument()
    expect(screen.getByText('From $180')).toBeInTheDocument()
    expect(screen.getByText('From $3,600 installed')).toBeInTheDocument()
  })
})

describe('WhyUs', () => {
  it('lays the four sizing questions out as a definition list beside the panel', () => {
    render(<WhyUs />)

    const panel = screen.getByTestId('flow-panel')
    expect(panel).toHaveAttribute('role', 'img')
    expect(panel.getAttribute('aria-label')).toMatch(/Flow panel/)
    expect(panel.parentElement).toHaveClass('order-last', 'lg:order-first')
    expect(screen.getByText(SAMPLE_FIGURE)).toHaveClass('text-ink-400')

    const terms = screen.getAllByRole('term').map((term) => term.textContent)
    expect(terms).toEqual(WHY_US.map((row) => row.term))
    expect(screen.getAllByRole('definition')).toHaveLength(WHY_US.length)
  })
})

describe('Process', () => {
  it('numbers three steps with mono numerals and puts a time on each', () => {
    render(<Process />)

    const items = screen.getAllByRole('listitem')
    expect(items).toHaveLength(STEPS.length)
    STEPS.forEach((step, index) => {
      expect(within(items[index]!).getByText(step.name)).toHaveClass('text-lg')
      expect(within(items[index]!).getByText(step.duration)).toHaveClass('text-primary-700')
    })
    expect(items[0]).toHaveTextContent('01')
    expect(items[2]).toHaveTextContent('03')
  })
})

describe('Areas', () => {
  it('lists the twelve towns in order as hairline rows', () => {
    render(<Areas />)

    const towns = screen.getAllByRole('listitem').map((item) => item.textContent)
    expect(towns).toEqual(TOWNS)
    expect(screen.getByText('Where we work')).toBeInTheDocument()
    expect(screen.getByText(SAMPLE_TOWNS)).toBeInTheDocument()
  })
})

describe('ClosingBand', () => {
  it('is a flat brand band with a solid and a ghost button', () => {
    render(<ClosingBand />)

    const band = screen.getByRole('region', { name: 'Not sure what size you need?' })
    expect(band).toHaveClass('bg-primary-700')
    expect(within(band).getByRole('link', { name: 'Size mine' })).toHaveAttribute('href', '#size')

    const call = within(band).getByRole('link', { name: /Call \(555\) 090-0900/ })
    expect(call).toHaveAttribute('href', BRAND.phoneHref)
    expect(call).toHaveClass('border-2', 'border-white/40')
  })
})
