import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand name', () => {
    render(<Footer />)
    expect(screen.getAllByText('Briefly').length).toBeGreaterThanOrEqual(1)
  })

  it('renders about section', () => {
    render(<Footer />)
    expect(screen.getByText('About Briefly')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Services' })).toBeInTheDocument()
  })

  it('renders newsletter form', () => {
    render(<Footer />)
    expect(screen.getByPlaceholderText('Enter Email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('renders Component Dock attribution', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders social links', () => {
    render(<Footer />)
    const fbLinks = screen.getAllByRole('link', { name: 'Facebook' })
    expect(fbLinks.length).toBeGreaterThanOrEqual(1)
    const xLinks = screen.getAllByRole('link', { name: 'X' })
    expect(xLinks.length).toBeGreaterThanOrEqual(1)
    const liLinks = screen.getAllByRole('link', { name: 'LinkedIn' })
    expect(liLinks.length).toBeGreaterThanOrEqual(1)
  })

  it('submits the newsletter form', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByPlaceholderText('Enter Email')
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(input).toHaveValue('')
  })
})
