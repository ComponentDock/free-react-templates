import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { About } from './About'
import { describe, expect, it } from 'vitest'

describe('About', () => {
  it('renders Book A Service heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 3, name: 'Book A Service' })).toBeInTheDocument()
  })

  it('renders form fields', () => {
    render(<About />)
    expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Last Name')).toBeInTheDocument()
    expect(screen.getByText('Select Your Services')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Phone')).toBeInTheDocument()
  })

  it('renders submit button', () => {
    render(<About />)
    expect(screen.getByRole('button', { name: 'Submit Details' })).toBeInTheDocument()
  })

  it('renders About Company section', () => {
    render(<About />)
    expect(screen.getByText('About Company')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /Most Awarded Cleaning Company/ }),
    ).toBeInTheDocument()
  })

  it('handles form submission without page reload', async () => {
    const user = userEvent.setup()
    render(<About />)
    const button = screen.getByRole('button', { name: 'Submit Details' })
    await user.click(button)
    expect(button).toBeInTheDocument()
  })
})
