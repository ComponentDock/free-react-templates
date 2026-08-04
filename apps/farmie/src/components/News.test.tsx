import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { News } from './News'

describe('News', () => {
  it('shows the heading and the four post cards', () => {
    render(<News />)

    expect(screen.getByRole('heading', { name: 'From Our Farm News' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'The Best Time To Harvest Organic Strawberries' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Five Herbs Every Home Garden Should Grow' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'How We Keep Our Soil Healthy Year After Year' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'From Pasture To Plate: Our Grass-Fed Beef' }),
    ).toBeInTheDocument()
  })

  it('shows a date with author and a Read more button on every post', () => {
    render(<News />)

    expect(screen.getAllByText(/Post on 18 Aug 2018/)).toHaveLength(4)
    expect(screen.getAllByRole('link', { name: 'Read more' })).toHaveLength(4)
  })
})
