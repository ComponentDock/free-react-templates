import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading and all three service blocks with titles', () => {
    render(<Services />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'How Can We Help Your with Appco!' }),
    ).toBeInTheDocument()

    for (const title of ['Easily Manage', 'Get Payments Easily', 'Quick Messaging']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }

    expect(screen.getByText(/organize your workflow/i)).toBeInTheDocument()
    expect(screen.getByText(/accept payments/i)).toBeInTheDocument()
    expect(screen.getByText(/instant messaging/i)).toBeInTheDocument()
  })
})
