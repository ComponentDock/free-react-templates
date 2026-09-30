import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { PostGrid } from './PostGrid'

describe('PostGrid', () => {
  it('renders 4 post cards', () => {
    render(<PostGrid />)
    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(4)
  })

  it('renders all post titles', () => {
    render(<PostGrid />)
    const titles = screen.getAllByText(/how the gut microbes/i)
    expect(titles).toHaveLength(4)
  })

  it('renders all post dates', () => {
    render(<PostGrid />)
    const dates = screen.getAllByText('Posted: Dec 17, 2019')
    expect(dates).toHaveLength(4)
  })

  it('renders all post images', () => {
    render(<PostGrid />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(4)
  })
})
