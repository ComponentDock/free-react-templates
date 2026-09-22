import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders quick links section', () => {
    render(<Footer />)

    expect(screen.getAllByText('About Us').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Terms & Conditions')).toBeInTheDocument()
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<Footer />)

    expect(screen.getByText('(+1) 435 3533')).toBeInTheDocument()
    expect(screen.getByText('info@lodgely.com')).toBeInTheDocument()
    expect(screen.getByText(/198 West 21th Street/)).toBeInTheDocument()
  })

  it('renders newsletter form', () => {
    render(<Footer />)

    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('clears email on form submission', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByLabelText('Email address')
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(input).toHaveValue('')
  })

  it('links to Component Dock', () => {
    render(<Footer />)

    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders social media links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
  })

  it('shows current year in copyright', () => {
    const { container } = render(<Footer />)

    const copyright = container.querySelector('p.text-xs')
    expect(copyright).toBeTruthy()
    expect(copyright!.textContent).toContain(new Date().getFullYear().toString())
  })
})
