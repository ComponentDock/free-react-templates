import { render, screen, within } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders footer content', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
    expect(within(footer).getByRole('heading', { name: 'About' })).toBeInTheDocument()
    expect(within(footer).getByRole('heading', { name: 'Links' })).toBeInTheDocument()
    expect(within(footer).getByRole('heading', { name: 'Services' })).toBeInTheDocument()
    expect(within(footer).getByRole('heading', { name: 'Have a Question?' })).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders social media links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
  })

  it('renders footer navigation links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '#about')
    expect(screen.getByRole('link', { name: 'Chapters' })).toHaveAttribute('href', '#chapters')
  })
})
