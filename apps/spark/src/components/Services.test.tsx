import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'How Can We Help You with Spark!',
    )
  })

  it('renders all three service items', () => {
    render(<Services />)
    expect(screen.getByText('Easily Manage')).toBeInTheDocument()
    expect(screen.getByText('Get Payments Easily')).toBeInTheDocument()
    expect(screen.getByText('Quick Messaging')).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/Streamline your tasks/i)).toBeInTheDocument()
    expect(screen.getByText(/Integrated payment/i)).toBeInTheDocument()
    expect(screen.getByText(/Built-in messaging/i)).toBeInTheDocument()
  })
})
