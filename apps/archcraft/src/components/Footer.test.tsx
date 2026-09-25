import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders site name and copyright', () => {
    render(<Footer />)
    expect(screen.getByText('Archcraft')).toBeInTheDocument()
    expect(screen.getByText(/2025 Archcraft/)).toBeInTheDocument()
  })

  it('has Component Dock attribution link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders navigation links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Services' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'News' })).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
  })

  it('renders newsletter form and submits', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const emailInput = screen.getByLabelText('Email for newsletter')
    expect(emailInput).toBeInTheDocument()
    await user.type(emailInput, 'test@example.com')
    expect(emailInput).toHaveValue('test@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
  })

  it('renders recent news items', () => {
    render(<Footer />)
    expect(screen.getByText('Modern Architecture Trends')).toBeInTheDocument()
    expect(screen.getByText('Sustainable Design Principles')).toBeInTheDocument()
    expect(screen.getByText('Future of Interior Spaces')).toBeInTheDocument()
  })
})
