import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders footer sections', () => {
    render(<Footer />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText('Recent Blog')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
  })

  it('contains the Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /More templates at Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders social media links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
  })

  it('has a newsletter email input and subscribe button', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Email for newsletter')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Subscribe/i })).toBeInTheDocument()
  })

  it('has a copyright notice', () => {
    render(<Footer />)
    expect(screen.getByText(/Corkage\. All rights reserved/)).toBeInTheDocument()
  })

  it('prevents newsletter form default submission', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const emailInput = screen.getByLabelText('Email for newsletter')
    const form = emailInput.closest('form')!
    const prevented = { value: false }
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      prevented.value = true
    })
    await user.click(screen.getByRole('button', { name: /Subscribe/i }))
    expect(prevented.value).toBe(true)
  })
})
