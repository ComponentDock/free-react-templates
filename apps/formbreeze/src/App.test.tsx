import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the page with gradient background', () => {
    const { container } = render(<App />)
    const wrapper = container.firstElementChild as HTMLElement
    expect(wrapper).toHaveClass('bg-gradient-to-r')
    expect(wrapper).toHaveClass('from-brand-blue-start')
    expect(wrapper).toHaveClass('to-brand-blue-end')
  })

  it('renders the contact form title', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /get in touch/i })).toBeInTheDocument()
  })

  it('renders all form fields', () => {
    render(<App />)
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Subject')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument()
  })

  it('renders the send button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /send email/i })).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders the illustration section', () => {
    render(<App />)
    expect(screen.getByText(/we'd love to hear from you/i)).toBeInTheDocument()
  })
})
