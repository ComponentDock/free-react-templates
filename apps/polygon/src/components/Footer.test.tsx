import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders about section', () => {
    render(<Footer />)
    expect(screen.getByText('About Polygon')).toBeInTheDocument()
  })

  it('renders quick links', () => {
    render(<Footer />)
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders follow links', () => {
    render(<Footer />)
    expect(screen.getByText('Follow Links')).toBeInTheDocument()
    expect(screen.getByText('Instagram')).toBeInTheDocument()
    expect(screen.getByText('Facebook')).toBeInTheDocument()
    expect(screen.getByText('Twitter')).toBeInTheDocument()
    expect(screen.getByText('LinkedIn')).toBeInTheDocument()
    expect(screen.getByText('Dribbble')).toBeInTheDocument()
  })

  it('renders newsletter subscription form', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Newsletter subscription')).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByLabelText('Subscribe')).toBeInTheDocument()
  })

  it('renders copyright with current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`${year}`))).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const emailInput = screen.getByLabelText('Email address')
    const submitBtn = screen.getByLabelText('Subscribe')

    await user.type(emailInput, 'test@example.com')
    await user.click(submitBtn)
    // No navigation should happen (form prevented)
    expect(emailInput).toHaveValue('test@example.com')
  })

  it('has correct footer structure', () => {
    const { container } = render(<Footer />)
    expect(container.querySelector('footer')).toBeInTheDocument()
  })

  it('renders about description', () => {
    render(<Footer />)
    expect(screen.getByText(/creative architecture and design studio/)).toBeInTheDocument()
  })

  it('renders newsletter description', () => {
    render(<Footer />)
    expect(screen.getByText(/Get the latest news/)).toBeInTheDocument()
  })
})
