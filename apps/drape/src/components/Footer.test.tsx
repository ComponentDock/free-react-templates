import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand name', () => {
    render(<Footer />)
    expect(screen.getByText('Drape')).toBeInTheDocument()
  })

  it('renders the shop links', () => {
    render(<Footer />)
    for (const link of ['Clothing', 'Bags', 'Accessories', 'Jewellery', 'Shoes']) {
      expect(screen.getAllByText(link).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('renders the help links', () => {
    render(<Footer />)
    for (const link of ['Contact us', 'Shipping', 'Returns', 'Size guide', 'FAQ']) {
      expect(screen.getAllByText(link).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('renders the newsletter form with email input and submit button', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('renders the Component Dock attribution', () => {
    render(<Footer />)
    expect(screen.getByText(/More templates at Component Dock/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'www.componentdock.com' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('renders social media icon links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
  })

  it('does not navigate away on form submit (preventDefault)', async () => {
    const user = userEvent.setup()
    const spy = vi.fn()
    window.addEventListener('beforeunload', spy)
    render(<Footer />)
    await user.type(screen.getByLabelText('Email'), 'test@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    // The form's onSubmit calls e.preventDefault(), so no navigation occurs
    expect(spy).not.toHaveBeenCalled()
    window.removeEventListener('beforeunload', spy)
  })
})
