import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the newsletter section', () => {
    render(<Footer />)
    expect(screen.getByText('Stay Updated')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email Address')).toBeInTheDocument()
    expect(screen.getByText('Subscribe Now')).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
    expect(screen.getByLabelText('YouTube')).toBeInTheDocument()
  })

  it('renders footer link columns', () => {
    render(<Footer />)
    const headings = screen.getAllByText('About Us')
    expect(headings.length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Campus')).toBeInTheDocument()
    expect(screen.getByText('Study')).toBeInTheDocument()
    expect(screen.getAllByText('Support').length).toBeGreaterThanOrEqual(1)
  })

  it('renders footer links', () => {
    render(<Footer />)
    expect(screen.getByText('Online Learning')).toBeInTheDocument()
    expect(screen.getByText('Careers')).toBeInTheDocument()
    expect(screen.getByText('Our Plans')).toBeInTheDocument()
    expect(screen.getByText('Admissions Policy')).toBeInTheDocument()
  })

  it('renders Component Dock copyright link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('allows typing in newsletter email input', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const emailInput = screen.getByPlaceholderText('Email Address')
    await user.type(emailInput, 'test@example.com')
    expect(emailInput).toHaveValue('test@example.com')
  })

  it('submits newsletter form without crashing', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByPlaceholderText('Email Address'), 'a@b.com')
    await user.click(screen.getByText('Subscribe Now'))
  })
})
