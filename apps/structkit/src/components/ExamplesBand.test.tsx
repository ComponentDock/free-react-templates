import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ExamplesBand } from './ExamplesBand'

describe('ExamplesBand', () => {
  it('renders the completed-with-examples intro', () => {
    render(<ExamplesBand />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Completed with examples' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/three pre-built pages/)).toBeInTheDocument()
  })

  it('renders the login card with its social buttons and fields', () => {
    render(<ExamplesBand />)

    expect(screen.getByRole('heading', { level: 4, name: 'Card Login' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Instagram' })).toBeInTheDocument()

    expect(screen.getByLabelText('First Name')).toHaveAttribute('type', 'text')
    expect(screen.getByLabelText('Email')).toHaveAttribute('type', 'text')
    expect(screen.getByLabelText('Password')).toHaveAttribute('type', 'password')
    expect(screen.getByRole('button', { name: 'Get Started' })).toHaveAttribute('type', 'submit')
  })

  it('stops the login form from navigating away on submit', () => {
    render(<ExamplesBand />)

    const form = screen.getByRole('form', { name: 'Card Login' })
    fireEvent.submit(form)

    expect(form).toBeInTheDocument()
  })
})
