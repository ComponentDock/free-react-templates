import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the widget columns, contact details, and social links', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /subscribe/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /company/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /quick links/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /contact us/i })).toBeInTheDocument()
    expect(screen.getByText('Los Angeles Gournadi, 1230 Bariasl')).toBeInTheDocument()
    expect(screen.getByText('1-677-124-44227')).toBeInTheDocument()
    expect(screen.getByText('Support@gmail.com')).toBeInTheDocument()
    for (const social of ['GitHub', 'X', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: social })).toBeInTheDocument()
    }
  })

  it('shows a confirmation after subscribing', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByLabelText('Email'), 'reader@example.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    expect(screen.getByRole('status')).toHaveTextContent(/thank you for subscribing/i)
    expect(screen.queryByLabelText('Email')).not.toBeInTheDocument()
  })
})
