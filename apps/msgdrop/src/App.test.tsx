import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the split-screen layout', () => {
    render(<App />)
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
    expect(screen.getByText(/component dock/i)).toBeInTheDocument()
  })

  it('renders the map panel', () => {
    render(<App />)
    expect(screen.getByRole('img', { name: /map/i })).toBeInTheDocument()
  })

  it('renders all contact form fields', () => {
    render(<App />)
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
  })

  it('renders the send button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument()
  })

  it('renders the phone badge', () => {
    render(<App />)
    expect(screen.getByText(/00\) 345 6389/)).toBeInTheDocument()
  })

  it('has responsive layout classes', () => {
    const { container } = render(<App />)
    const flexContainer = container.querySelector('.flex')
    expect(flexContainer).toHaveClass('md:flex-row')
  })
})
