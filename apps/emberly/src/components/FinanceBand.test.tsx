import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FinanceBand } from './FinanceBand'
import { FINANCE } from '../content'

function slider(): HTMLInputElement {
  return screen.getByLabelText(FINANCE.amountLabel) as HTMLInputElement
}

function setAmount(value: number) {
  fireEvent.change(slider(), { target: { value: String(value) } })
}

function figure(name: 'amount' | 'monthly' | 'total'): string {
  return document.querySelector(`[data-finance-${name}]`)?.textContent ?? ''
}

describe('FinanceBand', () => {
  it('computes the three figures on the first render — no flash of zero', () => {
    render(<FinanceBand />)

    expect(figure('amount')).toBe('£2,400')
    expect(figure('monthly')).toBe('£77')
    expect(figure('total')).toBe('£2,784')
    expect(screen.queryByText('£0')).toBeNull()
  })

  it('configures the range input exactly as the reference does', () => {
    render(<FinanceBand />)
    const input = slider()
    expect(input).toHaveAttribute('type', 'range')
    expect(input).toHaveAttribute('min', String(FINANCE.min))
    expect(input).toHaveAttribute('max', String(FINANCE.max))
    expect(input).toHaveAttribute('step', String(FINANCE.step))
    expect(input).toHaveValue(String(FINANCE.initial))
    expect(screen.getByText('Over 36 months at 9.9% APR representative')).toBeInTheDocument()
    expect(document.querySelector('[data-finance-calc]')).toHaveAttribute('data-apr', '9.9')
  })

  it('recomputes at 800, 1,000 and 4,500 like the live calculator', () => {
    render(<FinanceBand />)

    setAmount(800)
    expect(figure('amount')).toBe('£800')
    expect(figure('monthly')).toBe('£26')
    expect(figure('total')).toBe('£928')

    setAmount(1000)
    expect(figure('amount')).toBe('£1,000')
    expect(figure('monthly')).toBe('£32')
    expect(figure('total')).toBe('£1,160')

    setAmount(4500)
    expect(figure('amount')).toBe('£4,500')
    expect(figure('monthly')).toBe('£145')
    expect(figure('total')).toBe('£5,220')
  })

  it('shows the two end labels under the slider', () => {
    const { container } = render(<FinanceBand />)
    const labels = Array.from(container.querySelectorAll('[data-finance-calc] .justify-between span'))
    expect(labels.map((node) => node.textContent)).toEqual(['£800', '£4,500'])
  })

  it('moves one step per arrow key and ignores every other key', () => {
    render(<FinanceBand />)
    const input = slider()

    fireEvent.keyDown(input, { key: 'ArrowRight' })
    expect(figure('amount')).toBe('£2,450')

    fireEvent.keyDown(input, { key: 'ArrowLeft' })
    expect(figure('amount')).toBe('£2,400')

    fireEvent.keyDown(input, { key: 'Tab' })
    expect(figure('amount')).toBe('£2,400')
  })

  it('clamps at both ends of the range', () => {
    render(<FinanceBand />)
    const input = slider()

    setAmount(FINANCE.max)
    fireEvent.keyDown(input, { key: 'ArrowRight' })
    expect(input).toHaveValue(String(FINANCE.max))

    setAmount(FINANCE.min)
    fireEvent.keyDown(input, { key: 'ArrowLeft' })
    expect(input).toHaveValue(String(FINANCE.min))
  })

  it('links its CTA and keeps the representative-example footnote', () => {
    render(<FinanceBand />)
    expect(screen.getByRole('link', { name: FINANCE.cta })).toHaveAttribute('href', '#contact')
    expect(screen.getByText(FINANCE.footnote)).toBeInTheDocument()
  })
})
