import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProductFlag } from './ProductFlag'

describe('ProductFlag', () => {
  it('pins the sale flag 12/12 with an 8px radius in sale red', () => {
    render(<ProductFlag kind="sale" label="-25%" />)
    const flag = screen.getByText('-25%')

    expect(flag).toHaveClass('absolute', 'left-3', 'top-3', 'rounded-[8px]')
    expect(flag).toHaveClass('bg-sale', 'text-white', 'text-[12.5px]', 'font-bold')
  })

  it('treats a new arrival in ink', () => {
    render(<ProductFlag kind="new" label="New" />)

    expect(screen.getByText('New')).toHaveClass('bg-ink', 'text-white')
  })

  it('marks low stock as a white flag with brown text', () => {
    render(<ProductFlag kind="low" label="Only 3 left" />)

    expect(screen.getByText('Only 3 left')).toHaveClass('bg-surface', 'text-low')
  })
})
