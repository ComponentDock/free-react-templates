import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('displays the heading and subtitle', () => {
    render(<Portfolio />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Portfolio')
    expect(screen.getByText('MY WORK')).toBeInTheDocument()
  })

  it('renders all filter tabs', () => {
    render(<Portfolio />)
    expect(screen.getByRole('button', { name: 'ALL' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'WEB DESIGN' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'BRANDING' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'GRAPHIC DESIGN' })).toBeInTheDocument()
  })

  it('shows all images when ALL is active', () => {
    render(<Portfolio />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(6)
  })

  it('filters images when a category is selected', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)
    await user.click(screen.getByRole('button', { name: 'WEB DESIGN' }))
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(2)
    images.forEach((img) => {
      expect(img).toHaveAttribute('alt', expect.stringContaining('Portfolio'))
    })
  })

  it('filters to branding images', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)
    await user.click(screen.getByRole('button', { name: 'BRANDING' }))
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(2)
  })

  it('filters to graphic design images', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)
    await user.click(screen.getByRole('button', { name: 'GRAPHIC DESIGN' }))
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(2)
  })

  it('returns to all images when ALL is clicked after filtering', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)
    await user.click(screen.getByRole('button', { name: 'WEB DESIGN' }))
    expect(screen.getAllByRole('img').length).toBe(2)
    await user.click(screen.getByRole('button', { name: 'ALL' }))
    expect(screen.getAllByRole('img').length).toBe(6)
  })
})
