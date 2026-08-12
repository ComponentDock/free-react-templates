import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the subheading and section heading', () => {
    render(<Blog />)

    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Recent Blog' })).toBeInTheDocument()
  })

  it('renders four blog entries with photo, title, and meta', () => {
    render(<Blog />)

    expect(screen.getAllByRole('article')).toHaveLength(4)
    expect(
      screen.getByRole('heading', {
        level: 3,
        name: /lead generation is key/i,
      }),
    ).toBeInTheDocument()

    expect(screen.getAllByText(/october 17, 2019/i)).not.toHaveLength(0)
    expect(screen.getAllByText('Admin')).not.toHaveLength(0)
    expect(screen.getAllByText('3 Comments')).not.toHaveLength(0)
  })
})
