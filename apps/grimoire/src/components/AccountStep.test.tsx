import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AccountStep } from './AccountStep'

describe('AccountStep', () => {
  it('renders username field', () => {
    render(<AccountStep />)
    expect(screen.getByLabelText('Username')).toBeInTheDocument()
  })

  it('renders email field', () => {
    render(<AccountStep />)
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
  })

  it('renders password field', () => {
    render(<AccountStep />)
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
  })

  it('renders avatar file input', () => {
    render(<AccountStep />)
    expect(screen.getByLabelText('Select avatar')).toBeInTheDocument()
  })
})
