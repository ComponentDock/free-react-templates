import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FeaturedSection } from './FeaturedSection'

describe('FeaturedSection', () => {
  it('renders section heading', () => {
    render(<FeaturedSection />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Featured Posts')
  })

  it('renders featured post title', () => {
    render(<FeaturedSection />)
    expect(screen.getByText('The New Apple Release Ceremony')).toBeInTheDocument()
  })

  it('renders newsletter form with email input', () => {
    render(<FeaturedSection />)
    expect(screen.getByPlaceholderText(/your e-mail here/i)).toBeInTheDocument()
  })

  it('renders subscribe button', () => {
    render(<FeaturedSection />)
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('renders latest posts', () => {
    render(<FeaturedSection />)
    expect(screen.getByText('New tech development')).toBeInTheDocument()
  })

  it('renders tags', () => {
    render(<FeaturedSection />)
    expect(screen.getAllByText('technology').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('design')).toBeInTheDocument()
  })

  it('handles newsletter form submission', async () => {
    const user = userEvent.setup()
    render(<FeaturedSection />)
    const input = screen.getByPlaceholderText(/your e-mail here/i)
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    expect(input).toHaveValue('test@example.com')
  })

  it('renders small post titles', () => {
    render(<FeaturedSection />)
    expect(screen.getByText('The Devices of the Future')).toBeInTheDocument()
    expect(screen.getByText('Smart Home Innovation Trends')).toBeInTheDocument()
  })
})
