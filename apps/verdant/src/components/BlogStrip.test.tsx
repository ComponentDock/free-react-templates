import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BlogStrip } from './BlogStrip'

describe('BlogStrip', () => {
  it('renders the heading and three blog cards', () => {
    render(<BlogStrip />)
    expect(screen.getByRole('heading', { level: 2, name: 'Recent Blog Posts' })).toBeInTheDocument()
    expect(
      screen.getAllByRole('heading', { level: 3, name: 'Where Do You Learn HTML & CSS in 2019?' }),
    ).toHaveLength(3)
    expect(screen.getAllByText('By James — Jan. 20, 2019')).toHaveLength(3)
    expect(screen.getAllByRole('link', { name: 'Read More' })).toHaveLength(3)
  })

  it('shows a photo on every card', () => {
    render(<BlogStrip />)
    expect(screen.getAllByRole('img')).toHaveLength(3)
  })
})
