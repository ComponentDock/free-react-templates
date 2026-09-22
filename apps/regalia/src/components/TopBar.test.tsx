import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('displays phone number', () => {
    render(<TopBar />)
    expect(screen.getByText('+1 234 567 890')).toBeInTheDocument()
  })

  it('displays email', () => {
    render(<TopBar />)
    expect(screen.getByText('info@regalia.com')).toBeInTheDocument()
  })

  it('has correct phone link', () => {
    render(<TopBar />)
    const link = screen.getByText('+1 234 567 890').closest('a')!
    expect(link).toHaveAttribute('href', 'tel:+1234567890')
  })

  it('has correct email link', () => {
    render(<TopBar />)
    const link = screen.getByText('info@regalia.com').closest('a')!
    expect(link).toHaveAttribute('href', 'mailto:info@regalia.com')
  })

  it('displays social media links', () => {
    render(<TopBar />)
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
  })
})
