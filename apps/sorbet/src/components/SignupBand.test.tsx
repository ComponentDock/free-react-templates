import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SignupBand } from './SignupBand'

describe('SignupBand', () => {
  it('renders the login card over its photo band', () => {
    const { container } = render(<SignupBand />)

    const section = container.querySelector('section')!
    expect(section.id).toBe('signup')
    expect(section.style.backgroundImage).toContain('picsum.photos/seed/sorbet-signup')

    expect(screen.getByRole('heading', { name: 'Card Login' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Sign in with Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Sign in with Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Sign in with Instagram' })).toBeInTheDocument()

    expect(screen.getByLabelText('Username')).toHaveAttribute('type', 'text')
    expect(screen.getByLabelText('Password')).toHaveAttribute('type', 'password')
    expect(screen.getByLabelText('I Agree to the terms and conditions.')).not.toBeChecked()
    expect(screen.getByRole('button', { name: 'Get Started' })).toHaveAttribute('type', 'submit')
  })

  it('blocks the submission and reports every missing field', async () => {
    render(<SignupBand />)

    await userEvent.click(screen.getByRole('button', { name: 'Get Started' }))

    expect(screen.getAllByRole('alert')).toHaveLength(3)
    expect(screen.getByText('Please enter your username')).toBeInTheDocument()
    expect(screen.getByText('Please enter your password')).toBeInTheDocument()
    expect(screen.getByText('Please accept the terms and conditions')).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('reports only the missing terms once the credentials are filled', async () => {
    render(<SignupBand />)

    await userEvent.type(screen.getByLabelText('Username'), 'sorbet')
    await userEvent.type(screen.getByLabelText('Password'), 's3cret')
    await userEvent.click(screen.getByRole('button', { name: 'Get Started' }))

    expect(screen.getAllByRole('alert')).toHaveLength(1)
    expect(screen.getByText('Please accept the terms and conditions')).toBeInTheDocument()
  })

  it('accepts a complete submission', async () => {
    render(<SignupBand />)

    await userEvent.type(screen.getByLabelText('Username'), 'sorbet')
    await userEvent.type(screen.getByLabelText('Password'), 's3cret')
    await userEvent.click(screen.getByLabelText('I Agree to the terms and conditions.'))
    await userEvent.click(screen.getByRole('button', { name: 'Get Started' }))

    expect(screen.queryAllByRole('alert')).toHaveLength(0)
    expect(screen.getByRole('status')).toHaveTextContent('Welcome aboard')
  })
})
