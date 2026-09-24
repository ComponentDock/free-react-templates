import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders email and location info', () => {
    render(<TopBar />)
    expect(screen.getByText('medical@example.com')).toBeInTheDocument()
    expect(screen.getByText('Find our Location')).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<TopBar />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
    expect(screen.getByLabelText('Skype')).toBeInTheDocument()
    expect(screen.getByLabelText('Vimeo')).toBeInTheDocument()
  })

  it('has correct email link href', () => {
    render(<TopBar />)
    const link = screen.getByText('medical@example.com')
    expect(link).toHaveAttribute('href', 'mailto:medical@example.com')
  })
})
