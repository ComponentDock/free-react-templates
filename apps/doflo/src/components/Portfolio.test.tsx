import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders the heading', () => {
    render(<Portfolio />)
    expect(screen.getByRole('heading', { name: /Our Projects/i })).toBeInTheDocument()
  })

  it('renders filter tabs', () => {
    render(<Portfolio />)
    expect(screen.getByRole('tab', { name: 'All' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Web Design' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Mobile App' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Web Development' })).toBeInTheDocument()
  })

  it('filters projects when a tab is clicked', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)
    // All projects visible by default
    const allImages = screen.getAllByRole('img')
    expect(allImages.length).toBe(4)

    // Click "Mobile App" filter
    await user.click(screen.getByRole('tab', { name: 'Mobile App' }))
    const filteredImages = screen.getAllByRole('img')
    expect(filteredImages.length).toBe(1)
  })

  it('shows all projects when "All" is clicked', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)
    await user.click(screen.getByRole('tab', { name: 'Web Design' }))
    await user.click(screen.getByRole('tab', { name: 'All' }))
    expect(screen.getAllByRole('img').length).toBe(4)
  })
})
