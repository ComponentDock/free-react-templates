import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders all 12 gallery items initially', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(12)
  })

  it('shows filter tabs: All, Featured, Portrait, Landscape', () => {
    render(<Gallery />)
    for (const tab of ['All', 'Featured', 'Portrait', 'Landscape']) {
      expect(screen.getByRole('button', { name: tab })).toBeInTheDocument()
    }
  })

  it('filters items when a tab is clicked', async () => {
    const user = userEvent.setup()
    render(<Gallery />)
    await user.click(screen.getByRole('button', { name: 'Portrait' }))
    const images = screen.getAllByRole('img')
    // Portrait items: Urban Portrait, Studio Session, Candid Smile, Natural Light = 4
    expect(images.length).toBe(4)
  })

  it('shows all items when All tab is clicked after filtering', async () => {
    const user = userEvent.setup()
    render(<Gallery />)
    await user.click(screen.getByRole('button', { name: 'Landscape' }))
    expect(screen.getAllByRole('img').length).toBe(4)
    await user.click(screen.getByRole('button', { name: 'All' }))
    expect(screen.getAllByRole('img').length).toBe(12)
  })

  it('has a Load More button', () => {
    render(<Gallery />)
    expect(screen.getByRole('button', { name: /load more images/i })).toBeInTheDocument()
  })

  it('shows gallery item titles on hover', () => {
    render(<Gallery />)
    // Title is rendered but hidden (opacity-0), still in DOM
    expect(screen.getByText('Golden Hour')).toBeInTheDocument()
    expect(screen.getByText('Desert Dunes')).toBeInTheDocument()
  })
})
