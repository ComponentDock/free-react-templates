import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the section heading', () => {
    render(<Gallery />)
    expect(screen.getByText('Gallery')).toBeInTheDocument()
  })

  it('renders filter buttons', () => {
    render(<Gallery />)
    expect(screen.getByRole('button', { name: 'All' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Events' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Party' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Holidays' })).toBeInTheDocument()
  })

  it('shows all images by default', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(9)
  })

  it('filters images when a category is clicked', async () => {
    const user = userEvent.setup()
    render(<Gallery />)
    await user.click(screen.getByRole('button', { name: 'Events' }))
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(3)
  })

  it('shows all images when All is clicked', async () => {
    const user = userEvent.setup()
    render(<Gallery />)
    await user.click(screen.getByRole('button', { name: 'Events' }))
    await user.click(screen.getByRole('button', { name: 'All' }))
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(9)
  })
})
