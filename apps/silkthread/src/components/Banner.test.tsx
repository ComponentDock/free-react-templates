import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Banner } from './Banner'

describe('Banner', () => {
  it('renders 3 banner items', () => {
    render(<Banner />)
    expect(screen.getByText('Clothing Collections 2030')).toBeInTheDocument()
    expect(screen.getByText('Accessories')).toBeInTheDocument()
    expect(screen.getByText('Shoes Spring 2030')).toBeInTheDocument()
  })

  it('renders Shop now links for each banner', () => {
    render(<Banner />)
    const links = screen.getAllByText('Shop now')
    expect(links).toHaveLength(3)
  })

  it('has accessible label', () => {
    render(<Banner />)
    expect(screen.getByLabelText('Category banners')).toBeInTheDocument()
  })
})
