import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Welcome } from './Welcome'

describe('Welcome', () => {
  it('renders welcome heading and accordion panels', () => {
    render(<Welcome />)

    expect(screen.getByRole('heading', { name: /welcome to cognita/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /what courses are available/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /how do i enroll/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /are certificates provided/i })).toBeInTheDocument()
  })

  it('shows first panel content by default', () => {
    render(<Welcome />)

    expect(screen.getByText(/we offer courses in web development/i)).toBeInTheDocument()
  })

  it('toggles panel on click', async () => {
    const user = userEvent.setup()
    render(<Welcome />)

    const enrollBtn = screen.getByRole('button', { name: /how do i enroll/i })
    await user.click(enrollBtn)

    expect(screen.getByText(/simply create an free account/i)).toBeInTheDocument()
    // First panel should be closed
    expect(screen.queryByText(/we offer courses in web development/i)).not.toBeInTheDocument()
  })

  it('closes an open panel when clicked again', async () => {
    const user = userEvent.setup()
    render(<Welcome />)

    // First panel is open by default
    expect(screen.getByText(/we offer courses in web development/i)).toBeInTheDocument()

    // Click the first panel button to close it
    await user.click(screen.getByRole('button', { name: /what courses are available/i }))

    // First panel content should be gone
    expect(screen.queryByText(/we offer courses in web development/i)).not.toBeInTheDocument()
  })
})
