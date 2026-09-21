import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the section heading', () => {
    render(<Gallery />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Yoga Gallery')
  })

  it('renders filter buttons', () => {
    render(<Gallery />)
    expect(screen.getByRole('button', { name: 'All' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Classes' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Training' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Workshop' })).toBeInTheDocument()
  })

  it('shows all images by default', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(6)
  })

  it('filters images when a category is selected', async () => {
    const user = userEvent.setup()
    render(<Gallery />)
    await user.click(screen.getByRole('button', { name: 'Classes' }))
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(2)
  })

  it('filters to Training items', async () => {
    const user = userEvent.setup()
    render(<Gallery />)
    await user.click(screen.getByRole('button', { name: 'Training' }))
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(2)
  })

  it('filters to Workshop items', async () => {
    const user = userEvent.setup()
    render(<Gallery />)
    await user.click(screen.getByRole('button', { name: 'Workshop' }))
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(2)
  })

  it('shows all images again when All is clicked', async () => {
    const user = userEvent.setup()
    render(<Gallery />)
    await user.click(screen.getByRole('button', { name: 'Classes' }))
    await user.click(screen.getByRole('button', { name: 'All' }))
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(6)
  })
})
