import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Areas } from '../components/Areas'
import { Emergency } from '../components/Emergency'
import { Plans } from '../components/Plans'
import { Process } from '../components/Process'
import { WhyUs } from '../components/WhyUs'
import { areas, emergency, plans, process, site, whyUs } from '../content'

describe('emergency strip', () => {
  it('pairs the pinging dot with one white phone pill', () => {
    render(<Emergency />)
    expect(screen.getByText(emergency.kicker)).toBeInTheDocument()
    expect(screen.getByText(emergency.title)).toBeInTheDocument()
    const call = screen.getByRole('link', { name: site.phone })
    expect(call).toHaveAttribute('href', site.phoneHref)
    expect(call.className).toContain('rounded-full')
  })
})

describe('plans', () => {
  it('prints three prices and badges only the middle tier', () => {
    render(<Plans />)
    expect(screen.getByText(plans.lead)).toBeInTheDocument()
    expect(screen.getAllByText('Most chosen')).toHaveLength(1)
    expect(screen.getByText('$39')).toBeInTheDocument()
    expect(screen.getByText('$59')).toBeInTheDocument()
    expect(screen.getByText('$89')).toBeInTheDocument()
    expect(screen.getByText(plans.footnote)).toBeInTheDocument()
  })

  it('pairs each tier with its feature ladder and CTA', () => {
    render(<Plans />)
    for (const tier of plans.tiers) {
      const name = screen.getByRole('heading', { level: 3, name: tier.name })
      const card = name.parentElement as HTMLElement
      for (const feature of tier.features) {
        expect(within(card).getByText(feature)).toBeInTheDocument()
      }
      expect(within(card).getByRole('link', { name: tier.cta })).toHaveAttribute('href', '#contact')
    }
  })
})

describe('why us', () => {
  it('draws its own figure and keeps the four commitments in order', () => {
    render(<WhyUs />)
    expect(screen.getByRole('img', { name: /sealed outline around a house/ })).toBeInTheDocument()
    expect(screen.getByText(whyUs.caption)).toBeInTheDocument()
    const terms = screen.getAllByRole('term').map((node) => node.textContent)
    expect(terms).toEqual(whyUs.commitments.map((commitment) => commitment.term))
  })
})

describe('process', () => {
  it('numbers the three steps and states each duration', () => {
    render(<Process />)
    expect(screen.getAllByRole('listitem')).toHaveLength(3)
    for (const step of process.steps) {
      expect(screen.getByText(step.num)).toBeInTheDocument()
      expect(screen.getByRole('heading', { level: 3, name: step.title })).toBeInTheDocument()
      expect(screen.getByText(step.duration)).toBeInTheDocument()
    }
  })
})

describe('service areas', () => {
  it('lists fourteen towns and states the radius', () => {
    render(<Areas />)
    expect(screen.getByRole('heading', { level: 2, name: areas.title })).toBeInTheDocument()
    const towns = screen.getAllByRole('listitem').map((node) => node.textContent)
    expect(towns).toEqual(areas.towns)
    expect(towns).toHaveLength(14)
    expect(screen.getByText(areas.note)).toBeInTheDocument()
  })
})
