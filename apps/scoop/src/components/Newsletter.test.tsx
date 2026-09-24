import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the section heading', () => {
    render(<Newsletter />)
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
  })

  it('renders the subscribe heading and description', () => {
    render(<Newsletter />)
    expect(screen.getByText('Subscribe to our Newsletter')).toBeInTheDocument()
    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()
  })

  it('renders email input', () => {
    render(<Newsletter />)
    const input = screen.getByLabelText('Email address')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('placeholder', 'Enter your email address')
  })

  it('allows typing in the email input', () => {
    render(<Newsletter />)
    const input = screen.getByLabelText('Email address')
    fireEvent.change(input, { target: { value: 'test@example.com' } })
    expect(input).toHaveValue('test@example.com')
  })

  it('renders subscribe button', () => {
    render(<Newsletter />)
    expect(screen.getByText('Subscribe')).toBeInTheDocument()
  })
})
