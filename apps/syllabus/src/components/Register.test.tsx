import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Register } from './Register'

describe('Register', () => {
  it('renders the promo heading with discount text', () => {
    render(<Register />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toContain('Register now')
    expect(heading.textContent).toContain('50% discount')
  })

  it('renders the CTA button', () => {
    render(<Register />)
    expect(screen.getByRole('button', { name: /register now/i })).toBeInTheDocument()
  })

  it('renders a form with three inputs and a submit button', () => {
    render(<Register />)

    const courseInput = screen.getByRole('textbox', { name: /course name/i })
    const locationInput = screen.getByRole('textbox', { name: /location/i })
    const categoryInput = screen.getByRole('textbox', { name: /category/i })

    expect(courseInput).toBeInTheDocument()
    expect(locationInput).toBeInTheDocument()
    expect(categoryInput).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /search course/i })).toBeInTheDocument()
  })

  it('allows typing in form inputs', async () => {
    const user = userEvent.setup()
    render(<Register />)

    const courseInput = screen.getByRole('textbox', { name: /course name/i })
    await user.type(courseInput, 'Marketing')
    expect(courseInput).toHaveValue('Marketing')
  })

  it('handles form submission without navigating', async () => {
    const user = userEvent.setup()
    const { container } = render(<Register />)

    const submitBtn = screen.getByRole('button', { name: /search course/i })
    await user.click(submitBtn)
    // Form should not navigate (onSubmit prevents default)
    expect(container.querySelector('form')).toBeInTheDocument()
  })
})
