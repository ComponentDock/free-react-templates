import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('shows the section heading and three news cards', () => {
    render(<Blog />)

    expect(screen.getByRole('heading', { name: 'Latest Style News' })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { name: 'There Our You Divide Itseld..' })).toHaveLength(
      2,
    )
    expect(screen.getByRole('heading', { name: 'One Which Won Two Divide..' })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { name: /Divide/ })).toHaveLength(3)
  })

  it('shows the category label and Read More links on every card', () => {
    render(<Blog />)

    expect(screen.getAllByText('ART, ILLUSTRATION')).toHaveLength(3)
    expect(screen.getAllByRole('link', { name: /Read More/ })).toHaveLength(3)
  })
})
