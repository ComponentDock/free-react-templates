import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading and three article cards', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2, name: 'Our Blog' })).toBeInTheDocument()
    const titles = screen.getAllByRole('heading', { level: 3 })
    expect(titles).toHaveLength(3)
    expect(screen.getAllByText('June 21, 2019')).toHaveLength(3)
    expect(screen.getAllByText('Admin')).toHaveLength(3)
  })

  it('renders the images and comment counts', () => {
    const { container } = render(<Blog />)
    expect(container.querySelectorAll('img')).toHaveLength(3)
    expect(screen.getAllByText('3')).toHaveLength(3)
  })
})
