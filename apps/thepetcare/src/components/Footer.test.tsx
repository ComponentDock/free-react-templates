import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand blurb, navigation and services columns, and social links', () => {
    render(<Footer />)

    expect(screen.getByText('Thepetcare')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Navigation' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Services' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Subscribe newsletter' })).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('link', { name: 'Pet Treatment' })).toHaveAttribute('href', '#services')

    expect(screen.getByRole('link', { name: 'Facebook' })).toHaveAttribute(
      'href',
      'https://facebook.com',
    )
    expect(screen.getByRole('link', { name: 'Twitter' })).toHaveAttribute(
      'href',
      'https://twitter.com',
    )
    expect(screen.getByRole('link', { name: 'Dribbble' })).toHaveAttribute(
      'href',
      'https://dribbble.com',
    )
    expect(screen.getByRole('link', { name: 'Behance' })).toHaveAttribute(
      'href',
      'https://behance.net',
    )

    expect(screen.getByText(/Copyright ©/)).toBeInTheDocument()
  })

  it('subscribes a newsletter email and clears the input', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByLabelText('Email address')
    await user.type(input, 'pet@example.com')
    expect(input).toHaveValue('pet@example.com')

    await user.click(screen.getByRole('button', { name: /Subscribe/ }))
    expect(input).toHaveValue('')
  })
})
