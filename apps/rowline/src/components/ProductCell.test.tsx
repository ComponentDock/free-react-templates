import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProductCell } from './ProductCell'

describe('ProductCell', () => {
  it('stacks the product name above the faint blurb line', () => {
    render(
      <ProductCell
        name="Sneakers Shoes 2020 For Men"
        blurb="Fugiat voluptates quasi nemo, ipsa perferendis"
      />,
    )
    const name = screen.getByText('Sneakers Shoes 2020 For Men')
    expect(name.className).toContain('block')
    expect(name.className).toContain('text-ink')
    const blurb = screen.getByText('Fugiat voluptates quasi nemo, ipsa perferendis')
    expect(blurb.className).toContain('block')
    expect(blurb.className).toContain('text-[12px]')
    expect(blurb.className).toContain('text-subtext')
  })
})
