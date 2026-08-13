import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the teal band with a white diagonal slant at its top', () => {
    const { container } = render(<Blog />)
    const section = screen.getByRole('region', { name: 'Recent posts' })
    expect(section).toHaveClass('bg-brand', 'overflow-hidden')
    expect(container.querySelector('[class*="rotate(-4deg)"]')).toHaveClass(
      'bg-white',
      'h-[400px]',
      'w-[150%]',
    )
  })

  it('renders the heading, lead and three white blog cards', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2, name: 'Recent Blog Post' })).toBeInTheDocument()
    const titles = screen
      .getAllByRole('heading', { level: 2 })
      .slice(1)
      .map((h) => h.textContent)
    expect(titles).toEqual([
      '45 Best Places To Unwind',
      'A Weekend In The Greek Isles',
      'Top Mountain Trails To Trek',
    ])
    expect(screen.getAllByText('February 26, 2018')).toHaveLength(3)
    expect(screen.getAllByRole('img')).toHaveLength(3)
  })

  it('links each card title and casts a deepening hover shadow', () => {
    render(<Blog />)
    const title = screen.getByRole('link', { name: '45 Best Places To Unwind' })
    expect(title).toHaveClass('text-ink', 'hover:text-brand')
    const card = title.closest('article')!
    expect(card).toHaveClass('shadow-[0_2px_5px_-2px_rgba(0,0,0,0.1)]')
    expect(card).toHaveClass('hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)]')
  })
})
