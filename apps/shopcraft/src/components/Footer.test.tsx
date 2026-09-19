import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders all footer sections', () => {
    render(<Footer />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
    expect(screen.getByText('Instagram Feed')).toBeInTheDocument()
    expect(screen.getByText('Follow Us')).toBeInTheDocument()
  })

  it('renders newsletter form', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Email for newsletter')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('allows typing in newsletter email', async () => {
    render(<Footer />)
    const input = screen.getByLabelText('Email for newsletter')
    await userEvent.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
  })

  it('renders social links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Facebook' })).toHaveAttribute('href', '#facebook')
    expect(screen.getByRole('link', { name: 'Twitter' })).toHaveAttribute('href', '#twitter')
    expect(screen.getByRole('link', { name: 'Dribbble' })).toHaveAttribute('href', '#dribbble')
    expect(screen.getByRole('link', { name: 'Behance' })).toHaveAttribute('href', '#behance')
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('renders 8 Instagram thumbnails', () => {
    render(<Footer />)
    expect(screen.getAllByAltText('Instagram post')).toHaveLength(8)
  })

  it('handles form submission', async () => {
    render(<Footer />)
    const input = screen.getByLabelText('Email for newsletter')
    const submitBtn = screen.getByRole('button', { name: 'Subscribe' })
    await userEvent.type(input, 'test@example.com')
    await userEvent.click(submitBtn)
    // Form should not navigate (preventDefault)
    expect(input).toHaveValue('test@example.com')
  })
})
