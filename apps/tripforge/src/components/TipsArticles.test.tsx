import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BLOG } from '../data/content'
import { TipsArticles } from './TipsArticles'

describe('TipsArticles', () => {
  it('renders the section heading and every blog card', () => {
    const { container } = render(<TipsArticles />)
    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe('Tips & Articles')
    expect(container.querySelectorAll('.listing-card')).toHaveLength(BLOG.length)
    expect(container.querySelectorAll('.blog-image')).toHaveLength(BLOG.length)
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(BLOG.length)
    const metas = Array.from(container.querySelectorAll('.blog-meta'))
    expect(metas).toHaveLength(BLOG.length)
    for (const meta of metas) {
      expect(meta.textContent).toContain('August 12, 2018')
      expect(meta.textContent).toContain('Admin')
      expect(meta.textContent).toContain('3')
      expect(meta.querySelector('.loc')).toBeInTheDocument()
    }
  })

  it('shows the mixed tag chips from the reference', () => {
    render(<TipsArticles />)
    expect(screen.getAllByText('Tips, Travel')).toHaveLength(3)
    expect(screen.getAllByText('Culture')).toHaveLength(1)
    expect(
      screen.getByText("8 Best homestay in Philippines that you don't miss out"),
    ).toBeInTheDocument()
  })
})
