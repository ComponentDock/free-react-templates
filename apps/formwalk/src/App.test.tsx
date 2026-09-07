import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the wizard header', () => {
    render(<App />)
    expect(screen.getByText('Form Wizard')).toBeInTheDocument()
  })

  it('renders step indicator navigation', () => {
    render(<App />)
    expect(screen.getByRole('navigation', { name: 'Form steps' })).toBeInTheDocument()
  })

  it('renders Component Dock footer link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('renders step 1 fields by default', () => {
    render(<App />)
    expect(screen.getByLabelText('First Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument()
  })

  it('navigates to step 2 on Next click', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByText('Next'))
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument()
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
  })
})
