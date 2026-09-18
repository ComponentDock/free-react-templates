import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders page with gray background', () => {
    const { container } = render(<App />)
    const page = container.querySelector('.bg-\\[\\#F5F5F5\\]') || container.firstElementChild
    expect(page).toBeInTheDocument()
  })

  it('renders two-column layout', () => {
    render(<App />)
    const leftPanel = screen.getByText('Address').closest('div')
    const rightPanel = screen.getByText('Send Us A Message').closest('div')
    expect(leftPanel).toBeInTheDocument()
    expect(rightPanel).toBeInTheDocument()
  })

  it('left panel has contact info with address, phone, and email', () => {
    render(<App />)
    expect(screen.getByText(/media center 8th floor/i)).toBeInTheDocument()
    expect(screen.getByText('+1 800 1236879')).toBeInTheDocument()
    expect(screen.getByText('contact@example.com')).toBeInTheDocument()
  })

  it('right panel has form with all fields', () => {
    render(<App />)
    expect(screen.getByPlaceholderText('First name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Last name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Eg. example@email.com')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Eg. +1 800 000000')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Write us a message')).toBeInTheDocument()
  })

  it('footer has Component Dock link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('submit button exists', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('responsive stacking on mobile', () => {
    const { container } = render(<App />)
    const columns = container.querySelector('main')
    expect(columns).toHaveClass('flex-col', 'md:flex-row')
  })
})
