import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders contact information', () => {
    render(<TopBar />)
    expect(screen.getByText('Have any questions?')).toBeInTheDocument()
    expect(screen.getByText('001-1234-88888')).toBeInTheDocument()
    expect(screen.getByText('info@uniwell.edu')).toBeInTheDocument()
  })

  it('renders register/login link', () => {
    render(<TopBar />)
    expect(screen.getByText('Register or Login')).toBeInTheDocument()
  })

  it('has correct aria-labels for contact links', () => {
    render(<TopBar />)
    expect(screen.getByLabelText('Call us at 001-1234-88888')).toHaveAttribute(
      'href',
      'tel:001-1234-88888',
    )
    expect(screen.getByLabelText('Email us at info@uniwell.edu')).toHaveAttribute(
      'href',
      'mailto:info@uniwell.edu',
    )
  })
})
