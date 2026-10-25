import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Process } from './Process'
import { PROCESS_ITEMS } from '../content'

describe('Process', () => {
  it('renders the four checks in order with zero-padded ordinals', () => {
    const { container } = render(<Process />)
    const items = container.querySelectorAll('ol > li')
    expect(Array.from(items).map((item) => item.querySelector('h3')?.textContent)).toEqual(
      PROCESS_ITEMS.map((item) => item.title),
    )
    expect(Array.from(items).map((item) => item.textContent?.slice(0, 2))).toEqual([
      '01',
      '02',
      '03',
      '04',
    ])
  })

  it('ends every item with its takeaway line', () => {
    render(<Process />)
    for (const item of PROCESS_ITEMS) {
      const takeaway = screen.getByText(item.takeaway)
      expect(takeaway).toHaveClass('text-primary-700')
    }
  })

  it('introduces the band with the eyebrow, heading and lede', () => {
    render(<Process />)
    expect(screen.getByText('Before we arrive')).toHaveClass('text-primary-700')
    expect(
      screen.getByRole('heading', { level: 2, name: 'Four things worth trying while you wait' }),
    ).toBeInTheDocument()
  })
})
