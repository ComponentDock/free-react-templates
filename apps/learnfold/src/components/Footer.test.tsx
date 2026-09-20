import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders contact info with address, phone, email', () => {
    render(<Footer />)

    expect(screen.getByText('Contact Info')).toBeInTheDocument()
    expect(screen.getByText(/123 Learning Street/)).toBeInTheDocument()
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument()
    expect(screen.getByText('info@learnfold.com')).toBeInTheDocument()
  })

  it('renders 3 link columns with 5 links each', () => {
    render(<Footer />)

    expect(screen.getByText('Engineering')).toBeInTheDocument()
    expect(screen.getByText('Graphic Design')).toBeInTheDocument()
    expect(screen.getByText('Development')).toBeInTheDocument()

    const engineeringLinks = [
      'Web Development',
      'Mobile Apps',
      'Data Science',
      'Cloud Computing',
      'DevOps',
    ]
    for (const link of engineeringLinks) {
      expect(screen.getByText(link)).toBeInTheDocument()
    }
  })

  it('renders newsletter form', () => {
    render(<Footer />)

    expect(screen.getByText('Newsletter')).toBeInTheDocument()
    expect(screen.getByLabelText('Newsletter email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('renders footer bottom with terms links and copyright', () => {
    render(<Footer />)

    expect(screen.getByText('Terms & Conditions')).toBeInTheDocument()
    expect(screen.getByText('Register')).toBeInTheDocument()
    expect(screen.getByText('Privacy')).toBeInTheDocument()
    expect(screen.getByText(/Learnfold\. All rights reserved/)).toBeInTheDocument()
  })

  it('submits newsletter form without error', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const emailInput = screen.getByLabelText('Newsletter email')
    await user.type(emailInput, 'test@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
  })

  it('links to Component Dock', () => {
    render(<Footer />)

    const link = screen.getByText('More templates at Component Dock')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
