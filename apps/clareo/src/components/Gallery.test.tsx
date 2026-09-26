import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import Gallery from './Gallery'

describe('Gallery', () => {
  it('renders the heading', () => {
    render(<Gallery />)
    expect(screen.getByText('Our Works')).toBeInTheDocument()
  })

  it('renders 8 gallery images', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(8)
  })

  it('shows caption on hover', async () => {
    const user = userEvent.setup()
    render(<Gallery />)
    const links = screen.getAllByRole('link')
    const firstLink = links[0]!
    await user.hover(firstLink)
    expect(screen.getByText('Fashion Editorial')).toBeInTheDocument()
  })

  it('hides caption on mouse leave', async () => {
    const user = userEvent.setup()
    render(<Gallery />)
    const links = screen.getAllByRole('link')
    const firstLink = links[0]!
    await user.hover(firstLink)
    await user.unhover(firstLink)
    // jsdom doesn't apply CSS opacity, so check the overlay has opacity-0 class
    const overlay = firstLink.querySelector('.opacity-0')
    expect(overlay).toBeInTheDocument()
  })
})
