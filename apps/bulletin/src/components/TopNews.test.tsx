import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopNews } from './TopNews'
import { topNewsPosts } from '../data'

describe('TopNews', () => {
  it('renders six post cards with thumbnail, date, title and author', () => {
    const { container } = render(<TopNews />)

    expect(container.querySelectorAll('img')).toHaveLength(6)
    for (const post of topNewsPosts) {
      expect(screen.getByText(post.title)).toBeInTheDocument()
      expect(screen.getAllByText(post.author).length).toBeGreaterThan(0)
    }
    expect(screen.getAllByText('June 20, 2018').length).toBe(6)
  })
})
