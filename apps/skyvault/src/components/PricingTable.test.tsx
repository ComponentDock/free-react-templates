import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PricingTable } from './PricingTable'

describe('PricingTable', () => {
  it('puts four plans inside one bordered container', () => {
    render(<PricingTable />)

    const section = document.getElementById('plans')!
    expect(section).toHaveClass('bg-surface', 'pt-[94px]', 'pb-[98px]', 'scroll-mt-[124px]')

    const container = section.querySelector('.border-haze')!
    expect(container).toHaveClass('border-2', 'rounded-[12px]', 'overflow-hidden', 'flex-wrap')

    expect(screen.getAllByRole('heading', { level: 3 }).map((plan) => plan.textContent)).toEqual([
      'Starter',
      'Growth',
      'Business',
      'Scale',
    ])
  })

  it('carries a violet header bar and a mint action per column', () => {
    const { container } = render(<PricingTable />)

    const headers = Array.from(container.querySelectorAll('h3'))
    headers.forEach((header) => {
      expect(header).toHaveClass('h-[129px]', 'bg-plum', 'leading-[129px]', 'text-white')
    })

    const buys = screen.getAllByRole('link', { name: /^Buy the .+ plan$/ })
    expect(buys).toHaveLength(4)
    buys.forEach((buy) => {
      expect(buy).toHaveAttribute('href', '#contact')
      expect(buy).toHaveClass('bg-mint', 'h-[53px]', 'w-[132px]', 'rounded-[12px]')
    })
  })

  it('shifts the period label beside each 36px price', () => {
    render(<PricingTable />)

    expect(screen.getByText('$9.90')).toHaveClass('text-[36px]', 'text-plum-mid')
    expect(screen.getAllByText('/month')[0]).toHaveClass(
      'text-[14px]',
      'translate-x-[-5px]',
      'translate-y-[12px]',
    )
    expect(screen.getAllByText('/month')).toHaveLength(4)
  })

  it('lists five rows per plan with mint-checked and crossed entries', () => {
    const { container } = render(<PricingTable />)

    const columns = Array.from(container.querySelector('.border-2.border-haze')!.children)
    expect(columns).toHaveLength(4)

    const includedCounts = columns.map(
      (column) => column.querySelectorAll('.text-ink.shrink-0, svg.text-ink').length,
    )
    expect(includedCounts).toEqual([3, 3, 4, 5])

    expect(screen.getAllByText('Priority support')).toHaveLength(4)
    expect(screen.getAllByText('Control panel access')).toHaveLength(4)

    const crossed = Array.from(container.querySelectorAll('svg.text-body-copy'))
    expect(crossed).toHaveLength(5)
    expect(crossed[0]).toHaveClass('h-[18px]', 'w-[18px]')
  })

  it('keeps the odd-column rules for the two-column reflow and drops them last', () => {
    const { container } = render(<PricingTable />)

    const columns = Array.from(container.querySelector('.border-2.border-haze')!.children)
    expect(columns[0]).toHaveClass('w-full', 'min-[576px]:w-1/2', 'min-[992px]:w-1/4')
    expect(columns[0]).toHaveClass('min-[576px]:border-r-2')
    expect(columns[1]).not.toHaveClass('min-[576px]:border-r-2')
    expect(columns[2]).toHaveClass('min-[576px]:border-r-2')
    expect(columns[3]).not.toHaveClass('min-[576px]:border-r-2', 'min-[992px]:border-r-2')
  })
})
