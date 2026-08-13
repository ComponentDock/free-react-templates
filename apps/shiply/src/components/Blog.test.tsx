import { render, screen, within } from '@testing-library/react'
import { Blog } from './Blog'
import { describe, expect, it } from 'vitest'

describe('Blog', () => {
  it('renders the section title and two post cards', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2, name: 'Our Blog' })).toBeInTheDocument()
    expect(screen.getByText('See Our Daily News & Updates')).toBeInTheDocument()
    const section = screen.getByRole('region', { name: 'Our Blog' })
    const posts = within(section).getAllByRole('article')
    expect(posts).toHaveLength(2)
    expect(
      within(posts[0]!).getByRole('heading', { level: 3, name: /Warehousing/ }),
    ).toBeInTheDocument()
    expect(within(posts[0]!).getByText(/by Theresa Winston/)).toBeInTheDocument()
  })
})
