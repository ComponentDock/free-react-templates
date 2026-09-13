import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CategoryShows } from './CategoryShows'

describe('CategoryShows', () => {
  it('renders section heading', () => {
    render(<CategoryShows />)
    expect(screen.getByText('By Category')).toBeInTheDocument()
  })

  it('renders four category cards', () => {
    render(<CategoryShows />)
    const titles = screen.getAllByText('Cras malesuada ipsum sapien.')
    expect(titles.length).toBe(4)
  })

  it('renders category tags', () => {
    render(<CategoryShows />)
    const travelTags = screen.getAllByText('travel')
    expect(travelTags.length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('lifestyle')).toBeInTheDocument()
    expect(screen.getByText('music')).toBeInTheDocument()
  })

  it('renders Browse Shows button', () => {
    render(<CategoryShows />)
    expect(screen.getByText('Browse Shows')).toBeInTheDocument()
  })

  it('renders card images', () => {
    render(<CategoryShows />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(4)
  })
})
