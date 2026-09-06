import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SpecialMenu } from './SpecialMenu'

describe('SpecialMenu', () => {
  it('renders 4 menu items with names and prices', () => {
    render(<SpecialMenu />)
    const items = screen.getAllByRole('article')
    expect(items).toHaveLength(4)

    for (const item of items) {
      expect(item.textContent).toMatch(/\$\d+/)
    }
  })
})
