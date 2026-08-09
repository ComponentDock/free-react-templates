import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('shows the section heading and three post cards', () => {
    render(<Blog />)

    expect(screen.getByRole('heading', { name: 'Our Blog' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Make The Most Of Your Locks' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Chic They Work Any Occassion' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Easy Hairstyles For GirlHair' }),
    ).toBeInTheDocument()
  })

  it('shows the category label and Read More links on every card', () => {
    render(<Blog />)

    expect(screen.getAllByText('STYLE, TIPS')).toHaveLength(3)
    expect(screen.getAllByRole('link', { name: /Read More/ })).toHaveLength(3)
  })
})
