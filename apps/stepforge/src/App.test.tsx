import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the wizard heading', () => {
    render(<App />)
    expect(screen.getByText('Form Booking Wizard')).toBeInTheDocument()
  })

  it('shows step 1 as initial state', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'Personal Info' })).toBeInTheDocument()
    expect(screen.getByText('1/3')).toBeInTheDocument()
  })

  it('navigates to step 2 when Next is clicked', async () => {
    render(<App />)
    await userEvent.click(screen.getByText('Next'))
    expect(screen.getByRole('heading', { name: 'Booking Information' })).toBeInTheDocument()
    expect(screen.getByText('2/3')).toBeInTheDocument()
  })

  it('navigates back to step 1 when Previous is clicked', async () => {
    render(<App />)
    await userEvent.click(screen.getByText('Next'))
    await userEvent.click(screen.getByText('Previous'))
    expect(screen.getByRole('heading', { name: 'Personal Info' })).toBeInTheDocument()
    expect(screen.getByText('1/3')).toBeInTheDocument()
  })

  it('navigates to step 3 (confirm)', async () => {
    render(<App />)
    await userEvent.click(screen.getByText('Next'))
    await userEvent.click(screen.getByText('Next'))
    expect(screen.getByRole('heading', { name: 'Confirm Details' })).toBeInTheDocument()
    expect(screen.getByText('3/3')).toBeInTheDocument()
  })

  it('submits and shows confirmation', async () => {
    render(<App />)
    await userEvent.click(screen.getByText('Next'))
    await userEvent.click(screen.getByText('Next'))
    await userEvent.click(screen.getByText('Submit'))
    expect(screen.getByText('Booking Confirmed!')).toBeInTheDocument()
  })

  it('shows Guest when submitted with empty name', async () => {
    render(<App />)
    await userEvent.click(screen.getByText('Next'))
    await userEvent.click(screen.getByText('Next'))
    await userEvent.click(screen.getByText('Submit'))
    expect(screen.getByText(/thank you, guest/i)).toBeInTheDocument()
  })

  it('shows entered first name in confirmation', async () => {
    render(<App />)
    const firstNameInput = screen.getByPlaceholderText('First Name')
    await userEvent.type(firstNameInput, 'Bob')
    await userEvent.click(screen.getByText('Next'))
    await userEvent.click(screen.getByText('Next'))
    await userEvent.click(screen.getByText('Submit'))
    expect(screen.getByText(/thank you, bob/i)).toBeInTheDocument()
  })

  it('renders footer with Component Dock', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /component dock/i })).toBeInTheDocument()
  })
})
