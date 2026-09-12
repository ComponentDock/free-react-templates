import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders Component Dock attribution link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders latest posts section', () => {
    render(<Footer />)
    expect(screen.getByText('Latest Posts')).toBeInTheDocument()
    expect(screen.getByText(/Top 5 upcoming indie games/)).toBeInTheDocument()
    expect(screen.getByText(/How to optimize your gaming setup/)).toBeInTheDocument()
    expect(screen.getByText(/Best mechanical keyboards/)).toBeInTheDocument()
  })

  it('renders top comments section', () => {
    render(<Footer />)
    expect(screen.getByText('Top Comments')).toBeInTheDocument()
    expect(screen.getByText('Alex Morgan')).toBeInTheDocument()
    expect(screen.getByText('Jordan Lee')).toBeInTheDocument()
    expect(screen.getByText('Sam Rivera')).toBeInTheDocument()
    expect(screen.getByText('Casey Park')).toBeInTheDocument()
  })

  it('renders footer navigation links', () => {
    render(<Footer />)
    const nav = screen.getByLabelText('Footer navigation')
    expect(nav).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Games' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Forums' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('renders Fragzone brand', () => {
    render(<Footer />)
    expect(screen.getByText('Fragzone')).toBeInTheDocument()
  })
})
