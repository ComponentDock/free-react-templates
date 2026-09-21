import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders email', () => {
    render(<Footer />)
    expect(screen.getByText('finloan@support.com')).toBeInTheDocument()
  })

  it('renders phone', () => {
    render(<Footer />)
    expect(screen.getByText('+10 873 672 6782')).toBeInTheDocument()
  })

  it('renders address', () => {
    render(<Footer />)
    expect(screen.getByText('600/D, Green road, NewYork')).toBeInTheDocument()
  })

  it('renders service links', () => {
    render(<Footer />)
    expect(screen.getByText('SEO/SEM')).toBeInTheDocument()
    expect(screen.getByText('Web design')).toBeInTheDocument()
  })

  it('renders useful links', () => {
    render(<Footer />)
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders newsletter form', () => {
    render(<Footer />)
    expect(screen.getByPlaceholderText('Email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('allows submitting the newsletter form', async () => {
    render(<Footer />)
    const input = screen.getByPlaceholderText('Email address')
    const button = screen.getByRole('button', { name: 'Subscribe' })
    await userEvent.type(input, 'test@example.com')
    await userEvent.click(button)
    expect(input).toHaveValue('test@example.com')
  })
})
