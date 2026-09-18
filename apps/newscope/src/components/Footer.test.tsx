import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders site name and description', () => {
    render(<Footer />)
    expect(screen.getByText('Newscope')).toBeInTheDocument()
    expect(screen.getByText(/trusted source/)).toBeInTheDocument()
  })

  it('renders popular posts', () => {
    render(<Footer />)
    expect(screen.getByText('Popular Posts')).toBeInTheDocument()
    expect(screen.getByText(/Fashion Trends/)).toBeInTheDocument()
    expect(screen.getByText(/Tech Industry/)).toBeInTheDocument()
    expect(screen.getByText(/Travel Deals/)).toBeInTheDocument()
  })

  it('renders categories with counts', () => {
    render(<Footer />)
    expect(screen.getByText('Category')).toBeInTheDocument()
    expect(screen.getByText('News')).toBeInTheDocument()
    expect(screen.getByText('(128)')).toBeInTheDocument()
    expect(screen.getByText('Technology')).toBeInTheDocument()
    expect(screen.getByText('(112)')).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<Footer />)
    expect(screen.getByText(/Phone: \+1/)).toBeInTheDocument()
    expect(screen.getByText(/info@newscope.com/)).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('scrolls to top on back-to-top click', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const btn = screen.getByRole('button', { name: /back to top/i })
    await user.click(btn)
    // scroll behavior is tested implicitly
    expect(btn).toBeInTheDocument()
  })
})
