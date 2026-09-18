import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders contact information', () => {
    render(<TopBar />)
    expect(screen.getByText('+38 068 005 3570')).toBeInTheDocument()
    expect(screen.getByText('fastsales@gmail.com')).toBeInTheDocument()
  })

  it('renders language and currency selectors', () => {
    render(<TopBar />)
    expect(screen.getByText('English')).toBeInTheDocument()
    expect(screen.getByText('$ US Dollar')).toBeInTheDocument()
  })

  it('renders register and sign in links', () => {
    render(<TopBar />)
    expect(screen.getByText('Register')).toBeInTheDocument()
    expect(screen.getByText('Sign in')).toBeInTheDocument()
  })
})
