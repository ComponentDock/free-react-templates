import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LatestBlog } from './LatestBlog'

describe('LatestBlog', () => {
  it('renders the heading and three blog post cards', () => {
    const { container } = render(<LatestBlog />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Latest Posts from Blog' }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        level: 3,
        name: 'Addiction When Gambling Becomes a Problem',
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 3,
        name: 'Computer Hardware Desktops and Notebooks',
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 3,
        name: 'Make MySpace Your Best Designed Space',
      }),
    ).toBeInTheDocument()

    expect(screen.getByText(/25 October, 2017/)).toBeInTheDocument()
    expect(screen.getByText(/18 October, 2017/)).toBeInTheDocument()
    expect(screen.getByText(/12 October, 2017/)).toBeInTheDocument()
    expect(screen.getAllByText(/Mark Wiens/)).toHaveLength(3)

    expect(container.querySelectorAll('img')).toHaveLength(3)
  })

  it('styles titles with the brand purple hover', () => {
    render(<LatestBlog />)

    const title = screen.getByRole('heading', {
      level: 3,
      name: 'Addiction When Gambling Becomes a Problem',
    })
    expect(title).toHaveClass('hover:text-brand-400')
  })
})
