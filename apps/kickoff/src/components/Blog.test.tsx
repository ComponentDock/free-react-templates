import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading and three news cards with date blocks', () => {
    render(<Blog />)

    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Recent News' })).toBeInTheDocument()

    for (const day of ['08', '07', '06']) {
      expect(screen.getByText(day)).toBeInTheDocument()
    }
    expect(screen.getAllByText(/March 2019/)).toHaveLength(3)
    expect(
      screen.getAllByRole('heading', { name: 'Why Lead Generation is Key for Business Growth' }),
    ).toHaveLength(3)
    expect(screen.getAllByText(/^Admin,/)).toHaveLength(3)
    expect(screen.getAllByRole('link', { name: /read more/ })).toHaveLength(3)
  })
})
