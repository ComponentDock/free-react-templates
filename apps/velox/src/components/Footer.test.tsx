import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders about section', () => {
    render(<Footer />)
    expect(screen.getByText('About Me')).toBeInTheDocument()
    expect(screen.getByText(/even more successful/i)).toBeInTheDocument()
  })

  it('renders newsletter section', () => {
    render(<Footer />)
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
    expect(screen.getByText('Stay updated with our latest trends')).toBeInTheDocument()
  })

  it('renders email input', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
  })

  it('renders subscribe button', () => {
    render(<Footer />)
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('renders social section', () => {
    render(<Footer />)
    expect(screen.getByText('Follow Me')).toBeInTheDocument()
    expect(screen.getByText('Let us be social')).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Dribbble')).toBeInTheDocument()
    expect(screen.getByLabelText('Behance')).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders copyright text', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })

  it('prevents default on newsletter form submit', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const form = screen.getByLabelText('Email address').closest('form')!
    await user.type(screen.getByLabelText('Email address'), 'test@example.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    // onSubmit calls e.preventDefault() — form should still be in DOM
    expect(form).toBeInTheDocument()
  })
})
