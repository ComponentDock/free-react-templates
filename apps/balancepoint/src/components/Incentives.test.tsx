import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { INCENTIVES, INCENTIVES_COPY } from '../content'
import { Incentives } from './Incentives'

function boxes() {
  return screen.getAllByRole('checkbox') as HTMLInputElement[]
}

describe('Incentives', () => {
  it('renders six tickable programmes in the reference order', () => {
    render(<Incentives />)
    expect(boxes()).toHaveLength(6)
    INCENTIVES.forEach((incentive, index) => {
      expect(boxes()[index]!.value).toBe(incentive.id)
      expect(boxes()[index]!.getAttribute('data-amount')).toBe(String(incentive.amount))
      expect(screen.getByText(incentive.name)).toBeInTheDocument()
    })
  })

  it('prints every disqualifying condition verbatim', () => {
    render(<Incentives />)
    INCENTIVES.forEach((incentive) => {
      expect(screen.getByText(incentive.condition)).toBeInTheDocument()
      expect(screen.getByText(incentive.source)).toBeInTheDocument()
    })
  })

  it('starts with federal, utility and manufacturer ticked and nets $10,400', () => {
    render(<Incentives />)
    expect(boxes().filter((box) => box.checked)).toHaveLength(3)
    expect(screen.getByText('$14,800')).toBeInTheDocument()
    expect(document.querySelector('[data-incentive-total]')?.textContent).toBe('−$4,400')
    const net = document.querySelector('[data-net-total]') as HTMLElement
    expect(net.textContent).toBe('$10,400')
    expect(net.getAttribute('aria-live')).toBe('polite')
    expect(net.className).toContain('font-mono')
    expect(net.className).toContain('tabular-nums')
  })

  it('recomputes the deduction and the net figure as rows are ticked', () => {
    render(<Incentives />)
    boxes().forEach((box) => {
      if (!box.checked) {
        fireEvent.click(box)
      }
    })
    expect(document.querySelector('[data-incentive-total]')?.textContent).toBe('−$8,300')
    expect(document.querySelector('[data-net-total]')?.textContent).toBe('$6,500')
  })

  it('returns to the installed price when every programme is unticked', () => {
    render(<Incentives />)
    boxes().forEach((box) => {
      if (box.checked) {
        fireEvent.click(box)
      }
    })
    expect(document.querySelector('[data-incentive-total]')?.textContent).toBe('−$0')
    expect(document.querySelector('[data-net-total]')?.textContent).toBe('$14,800')
  })

  it('styles the selected row with has-[:checked] rather than JS classes', () => {
    render(<Incentives />)
    const label = screen.getByText(INCENTIVES[0]!.name).closest('label') as HTMLElement
    expect(label.className).toContain('has-[:checked]:border-primary-400/60')
    expect(label.className).toContain('has-[:checked]:bg-primary-400/5')
  })

  it('carries the dark band, the lime eyebrow and the summary card copy', () => {
    render(<Incentives />)
    const band = document.getElementById('incentives') as HTMLElement
    expect(band.className).toContain('bg-ink-900')
    expect(screen.getByText(INCENTIVES_COPY.eyebrow).className).toContain('text-primary-300')
    expect(screen.getByText(INCENTIVES_COPY.installedLabel)).toBeInTheDocument()
    expect(screen.getByText(INCENTIVES_COPY.selectedLabel)).toBeInTheDocument()
    expect(screen.getAllByText(INCENTIVES_COPY.netLabel).length).toBeGreaterThan(0)
    expect(screen.getByText(INCENTIVES_COPY.paperwork)).toBeInTheDocument()
    expect(screen.getByText(INCENTIVES_COPY.caveat)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: INCENTIVES_COPY.cta })).toHaveAttribute(
      'href',
      '#contact',
    )
  })

  it('keeps the amount on the same line as the name', () => {
    render(<Incentives />)
    const amounts = document.querySelectorAll('.font-mono')
    expect(amounts.length).toBeGreaterThanOrEqual(6)
    expect(amounts[0]!.textContent).toBe('−$2,000')
  })
})
