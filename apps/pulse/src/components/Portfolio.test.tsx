import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders the section heading', () => {
    render(<Portfolio />)
    expect(screen.getByRole('heading', { name: 'Featured Projects' })).toBeInTheDocument()
  })

  it('renders filter tabs', () => {
    render(<Portfolio />)
    for (const cat of [
      'All',
      'Web Design',
      'Web Development',
      'Branding',
      'Marketing',
      'UI/UX Design',
    ]) {
      expect(screen.getByRole('button', { name: cat })).toBeInTheDocument()
    }
  })

  it('renders all 8 project cards initially', () => {
    render(<Portfolio />)
    expect(screen.getByText('Brand Identity System')).toBeInTheDocument()
    expect(screen.getByText('E-Commerce Platform')).toBeInTheDocument()
    expect(screen.getByText('Mobile App Design')).toBeInTheDocument()
    expect(screen.getByText('Marketing Campaign')).toBeInTheDocument()
    expect(screen.getByText('Corporate Website')).toBeInTheDocument()
    expect(screen.getByText('Startup Branding')).toBeInTheDocument()
    expect(screen.getByText('Social Media Strategy')).toBeInTheDocument()
    expect(screen.getByText('Dashboard Design')).toBeInTheDocument()
  })

  it('filters projects when a category tab is clicked', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)
    await user.click(screen.getByRole('button', { name: 'Branding' }))
    expect(screen.getByText('Brand Identity System')).toBeInTheDocument()
    expect(screen.getByText('Startup Branding')).toBeInTheDocument()
    expect(screen.queryByText('E-Commerce Platform')).not.toBeInTheDocument()
  })

  it('shows all projects when All tab is clicked', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)
    await user.click(screen.getByRole('button', { name: 'Branding' }))
    await user.click(screen.getByRole('button', { name: 'All' }))
    expect(screen.getByText('Brand Identity System')).toBeInTheDocument()
    expect(screen.getByText('E-Commerce Platform')).toBeInTheDocument()
  })

  it('renders zoom and link buttons for each project', () => {
    render(<Portfolio />)
    expect(screen.getByLabelText('Zoom Brand Identity System')).toBeInTheDocument()
    expect(screen.getByLabelText('Link Brand Identity System')).toBeInTheDocument()
  })

  it('renders project images with alt text', () => {
    render(<Portfolio />)
    expect(screen.getByRole('img', { name: 'Brand Identity System' })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})
