import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the Keynest logo', () => {
    render(<Footer />)
    expect(screen.getByText('Key')).toBeInTheDocument()
    expect(screen.getByText('nest')).toBeInTheDocument()
  })

  it('renders About links', () => {
    render(<Footer />)
    expect(screen.getByText('About')).toBeInTheDocument()
    const whyChoose = screen.getAllByText('Why choose us')
    expect(whyChoose.length).toBeGreaterThanOrEqual(1)
  })

  it('renders Services links', () => {
    render(<Footer />)
    expect(screen.getByText('Services')).toBeInTheDocument()
  })

  it('renders Newsletter section', () => {
    render(<Footer />)
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email Address')).toBeInTheDocument()
  })

  it('renders the Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders copyright with current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })

  it('newsletter form submission does not navigate', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const emailInput = screen.getByPlaceholderText('Email Address')
    await user.type(emailInput, 'test@example.com')
    const submitBtn = screen.getByLabelText('Subscribe')
    await user.click(submitBtn)
    expect(emailInput).toHaveValue('test@example.com')
  })
})
