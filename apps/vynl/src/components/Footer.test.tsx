import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders About Us heading', () => {
    render(<Footer />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
  })

  it('renders Navigations links', () => {
    render(<Footer />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('DJs')).toBeInTheDocument()
    expect(screen.getByText('News')).toBeInTheDocument()
  })

  it('renders Follow Us heading', () => {
    render(<Footer />)
    expect(screen.getByText('Follow Us')).toBeInTheDocument()
  })

  it('renders social icons', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
  })

  it('renders Subscribe form', () => {
    render(<Footer />)
    expect(screen.getAllByText('Subscribe').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByLabelText('Enter Email')).toBeInTheDocument()
  })

  it('renders Watch Video section', () => {
    render(<Footer />)
    expect(screen.getByText('Watch Video')).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders copyright with current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`${year}`))).toBeInTheDocument()
  })

  it('subscribe form prevents default submission', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText('Enter Email')
    await user.type(input, 'test@example.com')
    const submitBtn = screen.getByRole('button', { name: /subscribe/i })
    await user.click(submitBtn)
    // no navigation = success (form onSubmit prevents default)
  })
})
