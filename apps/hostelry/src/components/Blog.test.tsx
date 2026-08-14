import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('shows the heading and three blog cards with date, tag, title and excerpt', () => {
    render(<Blog />)
    expect(
      screen.getByRole('heading', { name: 'latest posts from blog', level: 2 }),
    ).toBeInTheDocument()
    for (const title of [
      'Low Cost Advertising',
      'Creative Outdoor Ads',
      'It S Classified How To Utilize Free',
    ]) {
      expect(screen.getByRole('heading', { name: title, level: 3 })).toBeInTheDocument()
    }
    expect(screen.getAllByText('January 12, 2026')).toHaveLength(3)
    expect(screen.getAllByText('Travel / Life Style')).toHaveLength(3)
  })
})
