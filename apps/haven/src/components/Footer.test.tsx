import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand name and description', () => {
    render(<Footer />)

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByText('Haven')).toBeInTheDocument()
    expect(screen.getByText(/inspire and reach millions/)).toBeInTheDocument()
  })

  it('renders social links with SVG icons', () => {
    render(<Footer />)

    const facebook = screen.getByRole('link', { name: 'Facebook' })
    expect(facebook).toBeInTheDocument()
    expect(facebook.querySelector('svg')).toBeTruthy()

    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'YouTube' })).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<Footer />)

    expect(screen.getByText('(12) 345 67890')).toBeInTheDocument()
    expect(screen.getByText('info@haven.com')).toBeInTheDocument()
    expect(screen.getByText(/856 Cordia Extension/)).toBeInTheDocument()
  })

  it('renders the newsletter form', () => {
    render(<Footer />)

    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('clears the email input on form submission', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByLabelText('Email address')
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(input).toHaveValue('')
  })

  it('links to Component Dock in the copyright', () => {
    render(<Footer />)

    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('shows the current year in the copyright', () => {
    const { container } = render(<Footer />)

    // Year is split across JSX text nodes, so query the <p> directly
    const copyrightP = container.querySelector('p.text-xs')
    expect(copyrightP).toBeTruthy()
    expect(copyrightP!.textContent).toContain(new Date().getFullYear().toString())
    expect(copyrightP!.textContent).toContain('All rights reserved')
  })
})
