import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Header } from './Header'

describe('Header', () => {
  it('renders the site title', () => {
    render(<Header />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/awesome.*magazine/i)
  })

  it('renders navigation links', () => {
    render(<Header />)
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
    expect(screen.getByText('Log In Or Sign Up')).toBeInTheDocument()
  })

  it('renders the template subtitle', () => {
    render(<Header />)
    expect(screen.getByText('Colorlib Template')).toBeInTheDocument()
  })
})
