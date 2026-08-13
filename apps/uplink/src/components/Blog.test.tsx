import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Blog } from './Blog'

describe('Blog', () => {
  it('shows the section heading and three blog cards with meta', () => {
    const { container } = render(<Blog />)
    expect(screen.getByRole('heading', { name: 'Latest Posts from Our Blog' })).toBeInTheDocument()
    const titles = screen.getAllByRole('heading', { level: 3 }).map((h) => h.textContent)
    expect(titles).toHaveLength(3)
    expect(titles).toContain('Cloud Hosting Trends to Watch in 2026')
    expect(titles).toContain('A Practical Guide to Securing Your Data Center')
    expect(titles).toContain('Shared Hosting or VPS: How to Choose')
    expect(screen.getByText('10 April, 2026')).toBeInTheDocument()
    expect(screen.getByText('22 March, 2026')).toBeInTheDocument()
    expect(screen.getByText('05 March, 2026')).toBeInTheDocument()
    // view/comment/share meta icons: 3 cards x 3 meta items
    expect(container.querySelectorAll('svg')).toHaveLength(9)
  })
})
