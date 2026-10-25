import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PriceRow } from './PriceRow'

describe('PriceRow', () => {
  it('renders a discounted price in sale red with the original struck through', () => {
    render(<PriceRow price="$149" was="$199" />)

    expect(screen.getByText('$149')).toHaveClass('text-sale', 'text-[21px]', 'font-bold')
    const was = screen.getByText('$199').closest('del')
    expect(was).toHaveClass('text-[15px]', 'text-muted')
    expect(was?.querySelector('.sr-only')).toHaveTextContent('Was')
  })

  it('renders a full price in ink with no struck price at all', () => {
    const { container } = render(<PriceRow price="$129" />)

    expect(screen.getByText('$129')).toHaveClass('text-ink')
    expect(container.querySelector('del')).toBeNull()
    expect(screen.queryByText('Was ')).toBeNull()
  })

  it('baseline-aligns the pair with an 8px gap', () => {
    render(<PriceRow price="$84" was="$99" />)

    expect(screen.getByText('$84').closest('p')).toHaveClass('flex', 'items-baseline', 'gap-2', 'm-0')
  })
})
