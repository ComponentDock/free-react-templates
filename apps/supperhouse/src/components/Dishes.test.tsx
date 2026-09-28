import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Dishes } from './Dishes'

describe('Dishes', () => {
  it('renders the section title', () => {
    render(<Dishes />)
    expect(
      screen.getByRole('heading', { level: 2, name: /Our Top Rated Dishes/ }),
    ).toBeInTheDocument()
  })

  it('renders the subtitle paragraph', () => {
    render(<Dishes />)
    expect(screen.getByText(/Every dish tells a story/)).toBeInTheDocument()
  })

  it('shows exactly 3 dish cards', () => {
    render(<Dishes />)
    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(3)
  })

  it('each dish card has an image', () => {
    render(<Dishes />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
    for (const img of images) {
      expect(img).toHaveAttribute('loading', 'lazy')
    }
  })

  it('each dish card has a heading with the dish title', () => {
    render(<Dishes />)
    const titles = ['Grilled Salmon', 'Truffle Pasta', 'Wagyu Steak']
    for (const title of titles) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })

  it('each dish card has a description', () => {
    render(<Dishes />)
    expect(screen.getByText(/Perfectly seared Atlantic salmon/)).toBeInTheDocument()
    expect(screen.getByText(/Handmade fettuccine/)).toBeInTheDocument()
    expect(screen.getByText(/A5 Wagyu beef/)).toBeInTheDocument()
  })

  it('each dish card has an alt text matching the title', () => {
    render(<Dishes />)
    const titles = ['Grilled Salmon', 'Truffle Pasta', 'Wagyu Steak']
    for (const title of titles) {
      expect(screen.getByRole('img', { name: title })).toBeInTheDocument()
    }
  })
})
