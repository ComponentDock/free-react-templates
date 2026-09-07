import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ContactStep } from './ContactStep'

describe('ContactStep', () => {
  it('renders contact label', () => {
    render(<ContactStep />)
    expect(screen.getByText(/Enter your information manually below/)).toBeInTheDocument()
  })

  it('renders First Name and Last Name inputs', () => {
    render(<ContactStep />)
    expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Last Name')).toBeInTheDocument()
  })

  it('renders Email input', () => {
    render(<ContactStep />)
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
  })

  it('renders Phone number input', () => {
    render(<ContactStep />)
    expect(screen.getByPlaceholderText('Phone number')).toBeInTheDocument()
  })

  it('renders illustration image', () => {
    render(<ContactStep />)
    const img = screen.getByAltText('Contact illustration')
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
