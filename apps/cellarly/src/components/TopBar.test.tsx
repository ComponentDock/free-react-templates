import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders phone number', () => {
    render(<TopBar />)
    expect(screen.getByText('+00 1234 567')).toBeInTheDocument()
  })

  it('renders email', () => {
    render(<TopBar />)
    expect(screen.getByText('youremail@email.com')).toBeInTheDocument()
  })

  it('renders Sign Up and Log In links', () => {
    render(<TopBar />)
    expect(screen.getByText('Sign Up')).toBeInTheDocument()
    expect(screen.getByText('Log In')).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<TopBar />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })
})
