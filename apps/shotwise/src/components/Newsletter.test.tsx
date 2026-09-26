import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders heading', () => {
    render(<Newsletter />)
    expect(screen.getByText(/Subscribe for our/)).toBeInTheDocument()
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
  })

  it('renders email input', () => {
    render(<Newsletter />)
    expect(screen.getByPlaceholderText('Your Email address')).toBeInTheDocument()
  })

  it('renders subscribe button', () => {
    render(<Newsletter />)
    expect(screen.getByRole('button', { name: /get started/i })).toBeInTheDocument()
  })

  it('renders spam disclaimer', () => {
    render(<Newsletter />)
    expect(screen.getByText(/We won't send any types of spam/)).toBeInTheDocument()
  })

  it('submits newsletter form without navigation', () => {
    render(<Newsletter />)
    const form = screen.getByRole('form', { name: /newsletter subscription/i })
    fireEvent.submit(form)
    expect(form).toBeInTheDocument()
  })
})
