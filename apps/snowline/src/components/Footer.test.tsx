import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the four footer columns', () => {
    render(<Footer />)
    expect(screen.getByText('Category')).toBeInTheDocument()
    expect(screen.getByText('Company')).toBeInTheDocument()
    expect(screen.getByText('Address')).toBeInTheDocument()
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
  })

  it('renders category and company links', () => {
    render(<Footer />)
    expect(screen.getByText('Male')).toBeInTheDocument()
    expect(screen.getByText('Female')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('News')).toBeInTheDocument()
  })

  it('renders address information', () => {
    render(<Footer />)
    expect(screen.getByText('200, Green block, New York')).toBeInTheDocument()
    expect(screen.getByText('+10 456 267 1678')).toBeInTheDocument()
    expect(screen.getByText('contact@snowline.com')).toBeInTheDocument()
  })

  it('renders newsletter form with email input and submit', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByPlaceholderText('Email Address')
    const submit = screen.getByRole('button', { name: 'Subscribe' })
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
    await user.click(submit)
    expect(input).toHaveValue('')
  })

  it('renders social media links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })

  it('renders the Component Dock copyright link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
