import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the footer section', () => {
    render(<Footer />)
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  it('renders category column', () => {
    render(<Footer />)
    expect(screen.getByText('Category')).toBeInTheDocument()
    expect(screen.getByText(/Photography/)).toBeInTheDocument()
    expect(screen.getByText(/Fashion/)).toBeInTheDocument()
    expect(screen.getByText(/Technology/)).toBeInTheDocument()
    expect(screen.getByText(/Travel/)).toBeInTheDocument()
  })

  it('renders archives column', () => {
    render(<Footer />)
    expect(screen.getByText('Archives')).toBeInTheDocument()
    expect(screen.getByText(/November 2018/)).toBeInTheDocument()
    expect(screen.getByText(/October 2018/)).toBeInTheDocument()
  })

  it('renders contact column', () => {
    render(<Footer />)
    expect(screen.getByText('Have a Questions?')).toBeInTheDocument()
    expect(screen.getByText(/203 Fake St/)).toBeInTheDocument()
    expect(screen.getByText('+2 392 3929 210')).toBeInTheDocument()
    expect(screen.getByText('info@yourdomain.com')).toBeInTheDocument()
  })

  it('renders copyright with Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /Component Dock/ })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('applies custom className', () => {
    render(<Footer className="custom-class" />)
    expect(screen.getByTestId('footer')).toHaveClass('custom-class')
  })
})
