import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('shows the heading and the four post cards', () => {
    render(<Blog />)

    expect(screen.getByRole('heading', { name: 'Dogger Blog' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: '5 Things You Need To Know About Dog Massage' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'How to Choose the Right Dog Food' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Why Regular Walks Keep Dogs Happy' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Understanding Your Dog Body Language' }),
    ).toBeInTheDocument()
  })

  it('shows a date and a Read more button on every post', () => {
    render(<Blog />)

    expect(screen.getAllByText('April 17, 2019')).toHaveLength(4)
    expect(screen.getAllByRole('link', { name: 'Read more' })).toHaveLength(4)
  })
})
