import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('shows the section heading and three news cards', () => {
    render(<Blog />)

    expect(screen.getByRole('heading', { name: 'Recent From Blog' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Skin Care for Teen Skin' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Daily Skincare Routine' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Winter Skin Survival' })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { name: /Skin/ })).toHaveLength(3)
  })

  it('shows the category label and Read More links on every card', () => {
    render(<Blog />)

    expect(screen.getAllByText('BEAUTY, TIPS')).toHaveLength(3)
    expect(screen.getAllByRole('link', { name: /Read More/ })).toHaveLength(3)
  })
})
