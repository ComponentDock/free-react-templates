import { act, render, screen, within } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Fees } from '../components/Fees'
import { HealthPlans } from '../components/HealthPlans'
import { OutOfHours } from '../components/OutOfHours'
import { Species } from '../components/Species'
import { Stats } from '../components/Stats'
import {
  CONTACT,
  FEES,
  FEES_CALLOUT,
  OUT_OF_HOURS,
  PLANS,
  PLANS_FOOTNOTE,
  SPECIES,
  SPECIES_CALLOUT,
  STATS,
} from '../data'
import { installIO, installRaf } from './helpers'

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('OutOfHours', () => {
  it('states plainly who covers the night, on the plum ground', () => {
    render(<OutOfHours />)

    const section = document.getElementById('out-of-hours')!
    expect(section).toHaveClass('bg-primary-800', 'py-14')
    expect(screen.getByText('Out of hours')).toHaveClass('bg-accent-400', 'text-primary-900')
    expect(screen.getByRole('heading', { level: 2, name: OUT_OF_HOURS.title })).toBeInTheDocument()
    expect(screen.getByText(/We do not staff our own overnight service/)).toBeVisible()
  })

  it('dials a valid number with no spaces in the href', () => {
    render(<OutOfHours />)

    const phone = screen.getByRole('link', { name: CONTACT.phoneLabel })
    expect(phone).toHaveAttribute('href', 'tel:01743660214')
    expect(phone).toHaveClass('rounded-2xl', 'bg-accent-400')
  })

  it('names the provider, the address and the distance', () => {
    render(<OutOfHours />)

    expect(screen.getByText('Where you would go')).toHaveClass('text-accent-300')
    expect(screen.getByText(OUT_OF_HOURS.provider)).toHaveClass('text-white')
    expect(screen.getByText(OUT_OF_HOURS.providerAddress)).toBeInTheDocument()
    expect(screen.getByText(OUT_OF_HOURS.distance)).toHaveClass('bg-primary-700', 'rounded-full')
  })

  it('prints the three-cell schedule in order', () => {
    render(<OutOfHours />)

    const cells = screen.getAllByRole('definition')
    expect(cells.map((cell) => cell.textContent)).toEqual([
      'Our own vets, here',
      'Our own vets, here',
      'Severnside, 2.4 miles away',
    ])
    expect(screen.getByText('Mon – Fri, 08:30 – 18:30')).toBeInTheDocument()
    expect(screen.getByText('Sat, 09:00 – 13:00')).toBeInTheDocument()
    expect(screen.getByText('All other hours')).toBeInTheDocument()
    expect(screen.getByText(/typically £180 to £250/)).toBeVisible()
  })
})

describe('Stats', () => {
  it('renders the final figures when no observer exists (jsdom)', () => {
    render(<Stats />)

    for (const stat of STATS) {
      expect(screen.getByText(stat.label)).toBeInTheDocument()
    }
    expect(screen.getByText('4,100')).toBeInTheDocument()
    expect(screen.getByText('16')).toBeInTheDocument()
    expect(screen.getByText('5')).toBeInTheDocument()
    expect(screen.getByText('100%')).toBeInTheDocument()
  })

  it('counts up once the strip is half visible', () => {
    const observers = installIO()
    const raf = installRaf()
    render(<Stats />)

    // The three plain counters read 0 and the percentage one reads 0%.
    expect(screen.getAllByText('0')).toHaveLength(3)
    expect(screen.getByText('0%')).toBeInTheDocument()

    act(() => {
      observers.forEach((observer) => {
        observer.fire(true, observer.elements[0] as Element)
      })
    })

    act(() => {
      for (let frame = 0; frame < 4; frame += 1) {
        raf.flush(0)
      }
      for (let frame = 0; frame < 16; frame += 1) {
        raf.flush(2000)
      }
    })

    expect(screen.getByText('4,100')).toBeInTheDocument()
    expect(screen.getByText('100%')).toBeInTheDocument()
  })

  it('stays at zero when the strip never intersects', () => {
    const observers = installIO()
    render(<Stats />)

    act(() => {
      observers.forEach((observer) => {
        observer.fire(false, observer.elements[0] as Element)
      })
    })

    expect(screen.getAllByText('0')).toHaveLength(3)
    expect(screen.getByText('0%')).toBeInTheDocument()
  })
})

describe('Species', () => {
  it('renders the six species in the reference order', () => {
    render(<Species />)

    const cards = screen.getAllByRole('listitem')
    expect(cards).toHaveLength(6)
    expect(
      cards.map((card) => within(card).getByRole('heading', { level: 3 }).textContent),
    ).toEqual(SPECIES.map((species) => species.name))
  })

  it('marks the two referrals as visibly different', () => {
    render(<Species />)

    const cards = screen.getAllByRole('listitem')
    expect(cards[0]).toHaveClass('border-primary-200', 'bg-white')
    expect(cards[4]).toHaveClass('border-dashed', 'border-gray-300', 'bg-gray-50')
    expect(cards[5]).toHaveClass('border-dashed', 'bg-gray-50')

    const chips = screen.getAllByText('Referred on')
    expect(chips).toHaveLength(2)
    expect(chips[0]).toHaveClass('bg-gray-200', 'uppercase')
    expect(within(cards[4]!).getAllByText('Referred at registration')).toHaveLength(1)
  })

  it('keeps the emoji decorative and the callout on the amber ground', () => {
    render(<Species />)

    const emoji = screen.getByText('🐕')
    expect(emoji).toHaveAttribute('aria-hidden', 'true')
    expect(screen.getByText(SPECIES_CALLOUT)).toHaveClass('bg-accent-50', 'border-accent-400')
  })
})

describe('HealthPlans', () => {
  it('renders three plans with the middle one featured', () => {
    render(<HealthPlans />)

    const cards = screen
      .getAllByRole('heading', { level: 3 })
      .map((heading) => heading.closest('li') as HTMLElement)
    expect(cards).toHaveLength(3)
    expect(cards[0]).toHaveClass('border-primary-200', 'bg-white')
    expect(cards[1]).toHaveClass('bg-primary-700', 'ring-2', 'ring-accent-400')
    expect(cards[2]).toHaveClass('bg-white')
    expect(screen.getByText('Preventive care, spread monthly')).toBeVisible()
  })

  it('shows the saving, the monthly price and five inclusions per plan', () => {
    render(<HealthPlans />)

    const cards = screen
      .getAllByRole('heading', { level: 3 })
      .map((heading) => heading.closest('li') as HTMLElement)
    PLANS.forEach((plan, index) => {
      const card = cards[index]!
      expect(within(card).getByText(plan.saving)).toBeInTheDocument()
      expect(within(card).getByText(plan.price)).toHaveClass('text-4xl', 'tabular-nums')
      expect(within(card).getByText('a month')).toBeInTheDocument()
      const inclusions = plan.inclusions.map((inclusion) => within(card).getByText(inclusion))
      expect(inclusions).toHaveLength(5)
      expect(within(card).getByRole('link', { name: plan.cta })).toHaveAttribute('href', '#contact')
    })
  })

  it('colours the featured badge, ticks and CTA differently', () => {
    render(<HealthPlans />)

    const cards = screen
      .getAllByRole('heading', { level: 3 })
      .map((heading) => heading.closest('li') as HTMLElement)
    const featured = cards[1]!
    expect(within(featured).getByText('Saves £96')).toHaveClass('bg-accent-400')
    expect(within(featured).getByRole('link', { name: 'Join Adult' })).toHaveClass(
      'bg-white',
      'text-primary-700',
    )
    const outer = cards[0]!
    expect(within(outer).getByText('Saves £64')).toHaveClass('bg-accent-100')
    expect(within(outer).getByRole('link', { name: 'Join Puppy & Kitten' })).toHaveClass(
      'bg-primary-700',
    )
    expect(screen.getByText(PLANS_FOOTNOTE)).toBeVisible()
  })
})

describe('Fees', () => {
  it('publishes the eight rows with the three columns', () => {
    render(<Fees />)

    expect(screen.getByRole('columnheader', { name: 'Item' })).toBeInTheDocument()
    expect(screen.getByRole('columnheader', { name: 'Standard' })).toHaveClass('text-right')
    expect(screen.getByRole('columnheader', { name: 'On a plan' })).toBeInTheDocument()

    const rows = within(screen.getByRole('table')).getAllByRole('row')
    expect(rows).toHaveLength(FEES.length + 1)
    FEES.forEach((fee) => {
      expect(screen.getByText(fee.item)).toBeInTheDocument()
      expect(screen.getByText(fee.detail)).toBeInTheDocument()
    })
  })

  it('keeps Included, a discounted figure and the em dash distinct', () => {
    render(<Fees />)

    expect(screen.getAllByText('Included')).toHaveLength(4)
    expect(screen.getByText('£131')).toHaveClass('text-primary-700')
    const dash = screen.getByText('—')
    expect(dash).toHaveClass('text-gray-400')
    expect(dash).not.toHaveClass('text-primary-700')
  })

  it('renders the left-aligned header and the accent callout', () => {
    render(<Fees />)

    const head = screen.getByRole('heading', { level: 2, name: 'What common things cost' })
    expect(head.closest('div')).toHaveClass('max-w-2xl')
    expect(screen.getByText('Fee guide')).toHaveClass('uppercase')
    expect(screen.getByText(FEES_CALLOUT)).toHaveClass('bg-accent-50')
    expect(screen.getByRole('table').parentElement).toHaveClass('rounded-2xl', 'border-primary-200')
  })
})
