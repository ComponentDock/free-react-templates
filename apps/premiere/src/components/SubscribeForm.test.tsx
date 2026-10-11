import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SubscribeForm } from './SubscribeForm'

describe('SubscribeForm', () => {
  it('renders the white pill field and the purple Subscribe button', () => {
    render(<SubscribeForm />)

    const input = screen.getByLabelText('Email Address')
    expect(input).toHaveAttribute('placeholder', 'Enter Email Address')
    expect(input).toHaveClass('h-[70px]', 'rounded-pill', 'bg-white')
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('warns on an empty or malformed address and clears the warning on focus', async () => {
    const user = userEvent.setup()
    render(<SubscribeForm />)

    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('alert')).toHaveTextContent('Email is required')

    const input = screen.getByLabelText('Email Address')
    await user.type(input, 'hello@')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('alert')).toHaveTextContent('Valid email is required: ex@abc.xyz')
    expect(input).toHaveAttribute('aria-invalid', 'true')

    await user.click(input)
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('accepts a valid address as React state without navigating', async () => {
    const user = userEvent.setup()
    render(<SubscribeForm />)

    await user.type(screen.getByLabelText('Email Address'), 'hello@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    expect(screen.getByRole('status')).toHaveTextContent(/thanks/i)
  })

  it('plays the focus glow layer and drops it on blur', async () => {
    const user = userEvent.setup()
    const { container } = render(<SubscribeForm />)

    await user.click(screen.getByLabelText('Email Address'))
    expect(container.querySelector('.animate-glow')).not.toBeNull()

    await user.tab()
    expect(container.querySelector('.animate-glow')).toBeNull()
  })

  it('accepts a className override', () => {
    const { container } = render(<SubscribeForm className="opacity-50" />)

    expect(container.firstElementChild).toHaveClass('opacity-50')
  })
})
