import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Arrivals } from './Arrivals'

describe('Arrivals', () => {
  it('renders the section heading', () => {
    render(<Arrivals />)
    expect(screen.getByRole('heading', { name: /What's New/i })).toBeInTheDocument()
  })

  it('renders three arrival cards with images, titles, blurbs and links', () => {
    render(<Arrivals />)
    for (const title of ['Fresh Arrivals', 'Online Store', 'New Collection']) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
      expect(screen.getByRole('img', { name: title })).toBeInTheDocument()
      expect(screen.getByText(`${title}`, { selector: 'h3' }).nextElementSibling).not.toBeNull()
    }
    expect(screen.getAllByRole('link', { name: /Learn Details/i })).toHaveLength(3)
  })
})
