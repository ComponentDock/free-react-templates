import { describe, expect, it, vi } from 'vitest'
import { render, screen, fireEvent, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CallBackCta } from './CallBackCta'

describe('CallBackCta', () => {
  it('renders the heading, subtext and headphone icon', () => {
    render(<CallBackCta />)
    expect(screen.getByRole('heading', { level: 2, name: /Get a Call Back/i })).toBeInTheDocument()
    expect(screen.getByText(/Leave your phone number, we will call back/i)).toBeInTheDocument()
    expect(document.querySelector('[data-testid="cta-headphones"]')).toBeInTheDocument()
  })

  it('renders the name and phone inputs with a royal-blue submit button', () => {
    render(<CallBackCta />)
    expect(screen.getByPlaceholderText('Your name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Phone no.')).toBeInTheDocument()
    const submit = screen.getByRole('button', { name: /Submit/i })
    expect(submit.className).toContain('bg-royal')
  })

  it('submits the form without navigating (no backend)', async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn()
    render(<CallBackCta onSubmitted={onSubmit} />)
    fireEvent.submit(screen.getByRole('form', { name: /Call back request/i }))
    expect(onSubmit).toHaveBeenCalledTimes(1)
    await user.type(screen.getByPlaceholderText('Your name'), 'Jane')
    await user.click(screen.getByRole('button', { name: /Submit/i }))
    expect(onSubmit).toHaveBeenCalledTimes(2)
    expect(
      within(screen.getByRole('form', { name: /Call back request/i })).getByPlaceholderText(
        'Your name',
      ),
    ).toHaveValue('Jane')
  })
})
