import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Subscribe } from './Subscribe'

describe('Subscribe', () => {
  it('renders the heading', () => {
    render(<Subscribe />)
    expect(screen.getByText(/We have top executive/)).toBeInTheDocument()
  })

  it('renders the email input', () => {
    render(<Subscribe />)
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
  })

  it('renders the Subscribe button', () => {
    render(<Subscribe />)
    expect(screen.getByText('Subscribe')).toBeInTheDocument()
  })

  it('handles form submission without page reload', () => {
    render(<Subscribe />)
    const form = screen.getByLabelText(/email/i).closest('form')!
    fireEvent.submit(form)
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
  })

  it('has a landmark section', () => {
    render(<Subscribe />)
    expect(document.querySelector('section')).toBeInTheDocument()
  })
})
