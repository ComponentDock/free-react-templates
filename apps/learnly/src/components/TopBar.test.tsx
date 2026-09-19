import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders contact links', () => {
    render(<TopBar />)
    expect(screen.getByText('Have a question?')).toBeInTheDocument()
    expect(screen.getByText('10 20 123 456')).toBeInTheDocument()
    expect(screen.getByText('info@mydomain.com')).toBeInTheDocument()
  })

  it('renders login and register links', () => {
    render(<TopBar />)
    expect(screen.getByText('Log In')).toBeInTheDocument()
    expect(screen.getByText('Register')).toBeInTheDocument()
  })

  it('register link points to register section', () => {
    render(<TopBar />)
    const register = screen.getByText('Register').closest('a')
    expect(register).toHaveAttribute('href', '#register')
  })
})
