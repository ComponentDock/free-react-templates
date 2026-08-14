import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the Tourist Blog title and subtitle', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: 'Tourist Blog' })).toBeInTheDocument()
    expect(screen.getByText('Our Recent Photos')).toBeInTheDocument()
  })

  it('renders three cards with a photo, date overlay and title', () => {
    render(<Blog />)
    expect(document.querySelectorAll('section#blog article img').length).toBe(3)
    expect(screen.getAllByText('23 Dec, 2020').length).toBe(3)
    expect(screen.getAllByRole('link', { name: 'Addiction When Gambling Becomes' }).length).toBe(3)
    expect(screen.getAllByText('23 Dec, 2020')[0]!.className).toContain('text-blogdate')
  })
})
