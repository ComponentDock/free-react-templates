import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Departments } from './Departments'

describe('Departments', () => {
  it('renders the heading and all department tabs', () => {
    render(<Departments />)

    expect(screen.getByRole('heading', { name: 'Our Departments' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Cardiology/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Neurology/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Diagnostic/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Dental/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Ophthalmology/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Emergency/ })).toBeInTheDocument()
  })

  it('switches the active department when a tab is clicked', async () => {
    const user = userEvent.setup()
    render(<Departments />)

    // Cardiology is active by default
    expect(screen.getByRole('heading', { name: 'Cardiology' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /Neurology/ }))
    expect(screen.getByRole('heading', { name: 'Neurology' })).toBeInTheDocument()
    expect(
      screen.getByText(/diagnosing and treating disorders of the nervous system/),
    ).toBeInTheDocument()
  })

  it('shows a Learn More link for the active department', () => {
    render(<Departments />)

    expect(screen.getByRole('link', { name: 'Learn More' })).toBeInTheDocument()
  })

  it('falls back to the first department when defaultId is invalid', () => {
    render(<Departments defaultId="nonexistent" />)

    expect(screen.getByRole('heading', { name: 'Cardiology' })).toBeInTheDocument()
  })
})
