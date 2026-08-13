import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { footer } from '../data'
import { footerSocial } from './social-icons'

describe('Footer', () => {
  it('renders logo, About Us paragraphs, phone and email', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    for (const paragraph of footer.aboutParagraphs) {
      expect(screen.getByText(paragraph)).toBeInTheDocument()
    }
    expect(screen.getByText(/\+564/)).toBeInTheDocument()
    expect(screen.getByText('7885 3222')).toBeInTheDocument()
    expect(screen.getByText(footer.email)).toBeInTheDocument()
  })

  it('renders the copyright strip with the Component Dock link', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`Copyright © ${year}`))).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('renders four plain white social icons', () => {
    render(<Footer />)
    for (const { label } of footerSocial) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('validates the newsletter email and shows a success message', () => {
    render(<Footer />)
    fireEvent.click(screen.getByRole('button', { name: 'Send' }))
    expect(screen.getByText('Email address is required')).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()

    fireEvent.change(screen.getByLabelText('Newsletter email'), { target: { value: 'nope' } })
    fireEvent.click(screen.getByRole('button', { name: 'Send' }))
    expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument()

    fireEvent.change(screen.getByLabelText('Newsletter email'), {
      target: { value: 'hello@example.com' },
    })
    fireEvent.click(screen.getByRole('button', { name: 'Send' }))
    expect(screen.getByRole('status')).toHaveTextContent('Thanks — you are subscribed!')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })
})
