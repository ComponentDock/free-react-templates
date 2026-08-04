import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the newsletter signup, link columns, social links, and clears the form on submit', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Subscribe Newsletter' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/sanitary and disinfection guidelines/)).toBeInTheDocument()

    const input = screen.getByLabelText('Email address')
    await user.type(input, 'pet@example.com')
    expect(input).toHaveValue('pet@example.com')

    await user.click(screen.getByRole('button', { name: 'Free Trial' }))
    expect(input).toHaveValue('')

    for (const heading of ['Menu', 'Contact', 'Address', 'Opening Hour']) {
      expect(screen.getByRole('heading', { level: 3, name: heading })).toBeInTheDocument()
    }
    expect(screen.getByText('700, Green lane, New York, USA')).toBeInTheDocument()
    expect(screen.getByText('Mon-Fri (9.00-6.00)')).toBeInTheDocument()

    const social = screen.getByRole('link', { name: 'GitHub' })
    expect(social).toHaveAttribute('href', 'https://github.com')
    expect(screen.getByRole('link', { name: 'X' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()

    expect(screen.getByText(/Copyright ©/)).toBeInTheDocument()
  })
})
