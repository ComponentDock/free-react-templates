import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PriceRow } from './PriceRow'
import type { PriceRow as PriceRowData } from '../panels'

const row: PriceRowData = { name: 'Face Treatments', duration: '40 min.', price: '$10' }

describe('PriceRow', () => {
  it('renders the service name, duration, and price', () => {
    render(<PriceRow row={row} />)
    expect(screen.getByText('Face Treatments')).toBeInTheDocument()
    expect(screen.getByText('40 min.')).toBeInTheDocument()
    expect(screen.getByText('$10')).toBeInTheDocument()
  })

  it('lays the row out as a flex list item with 60/30/10% column widths', () => {
    const { container } = render(<PriceRow row={row} />)
    const item = container.querySelector('li')
    expect(item?.className).toContain('flex')
    const [name, duration, price] = Array.from(item?.querySelectorAll('span') ?? [])
    expect(name?.className).toContain('w-[60%]')
    expect(name?.className).toContain('text-black')
    expect(duration?.className).toContain('w-[30%]')
    expect(duration?.className).toContain('text-[#6c757d]')
    expect(price?.className).toContain('w-[10%]')
    expect(price?.className).toContain('text-price')
  })

  it('spaces rows with a 15px bottom margin like the reference li rule', () => {
    const { container } = render(<PriceRow row={row} />)
    expect(container.querySelector('li')?.className).toContain('mb-[15px]')
  })

  it('sizes the row text at 16px weight 400 like the reference', () => {
    const { container } = render(<PriceRow row={row} />)
    expect(container.querySelector('li')?.className).toContain('text-[16px]')
    expect(container.querySelector('li')?.className).toContain('font-normal')
  })
})
