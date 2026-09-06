import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { OurMenu } from './OurMenu'

describe('OurMenu', () => {
  it('renders 6 menu items with names, descriptions, and prices', () => {
    render(<OurMenu />)
    const items = screen.getAllByRole('article')
    expect(items).toHaveLength(6)

    for (const item of items) {
      expect(item.textContent).toMatch(/\$\d+/)
    }
  })
})
