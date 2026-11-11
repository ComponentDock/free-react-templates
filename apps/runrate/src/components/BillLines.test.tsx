import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { estimateFor } from '../pricing'
import { BillLines } from './BillLines'

describe('BillLines', () => {
  it('lists the four lines with their labels and amounts', () => {
    const { container } = render(<BillLines cost={estimateFor(4, 4, false).cost} />)

    const rows = container.querySelectorAll('.rr-line')
    expect(rows).toHaveLength(4)
    expect([...rows].map((row) => row.querySelector('dt')?.textContent)).toEqual([
      'Platform fee',
      'API requests',
      'Storage',
      'Priority support',
    ])
    expect([...rows].map((row) => row.querySelector('dd')?.textContent)).toEqual([
      '$25.00',
      '$9.00',
      '$5.40',
      '$0.00',
    ])
  })

  it('keys each row with an aria-hidden swatch so colour never carries meaning', () => {
    const { container } = render(<BillLines cost={estimateFor(4, 4, true).cost} />)

    const keys = container.querySelectorAll('.rr-key')
    expect(keys).toHaveLength(4)
    for (const key of keys) {
      expect(key).toHaveAttribute('aria-hidden', 'true')
    }
    expect(container.querySelector('.rr-key--support')).toHaveClass('rr-key--support')
    expect(container.querySelector('dd[data-line="support"]')).toHaveTextContent('$149.00')
  })

  it('prints every amount as currency with two decimals', () => {
    const { container } = render(<BillLines cost={estimateFor(10, 11, true).cost} />)

    expect(container.querySelector('dd[data-line="calls"]')).toHaveTextContent('$999.00')
    expect(container.querySelector('dd[data-line="storage"]')).toHaveTextContent('$1,199.40')
  })
})
