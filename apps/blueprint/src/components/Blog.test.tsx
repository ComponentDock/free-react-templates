import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('shows the section heading and three post cards with titles, dates, and authors', () => {
    render(<Blog />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'News from our Blog' }),
    ).toBeInTheDocument()

    const titles = screen.getAllByRole('heading', {
      level: 3,
      name: 'Building the Mention Sales Application on Blueprint',
    })
    expect(titles).toHaveLength(3)
    expect(screen.getAllByText('May 12, 2018')).toHaveLength(3)
    expect(screen.getAllByRole('link', { name: /by Dave Miller/ })).toHaveLength(3)
    expect(screen.getAllByRole('img')).toHaveLength(3)
  })
})
