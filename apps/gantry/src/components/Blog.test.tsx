import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('shows the heading and three blog cards with titles and meta', () => {
    render(<Blog />)

    const section = screen.getByRole('region', { name: 'News & Updates' })
    expect(within(section).getByRole('heading', { name: 'News & Updates' })).toBeInTheDocument()

    const titles = within(section).getAllByRole('heading', { level: 3 })
    expect(titles).toHaveLength(3)
    expect(
      within(section).getByText('Top Companies That Are Best In Industrial Business'),
    ).toBeInTheDocument()
    expect(within(section).getAllByText('Posted by Admin In News')).toHaveLength(3)
    expect(section.querySelectorAll('img')).toHaveLength(3)
  })
})
