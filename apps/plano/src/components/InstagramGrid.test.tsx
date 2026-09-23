import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { InstagramGrid } from './InstagramGrid'

describe('InstagramGrid', () => {
  it('renders the section heading', () => {
    render(<InstagramGrid />)
    expect(screen.getByText('@Instagram')).toBeInTheDocument()
  })

  it('renders three images', () => {
    render(<InstagramGrid />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(3)
  })

  it('renders clickable links for each image', () => {
    render(<InstagramGrid />)
    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(3)
  })
})
