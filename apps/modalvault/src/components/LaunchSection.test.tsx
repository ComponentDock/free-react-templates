import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LaunchSection } from './LaunchSection'

describe('LaunchSection', () => {
  it('renders the heading', () => {
    render(<LaunchSection onOpenModal={() => {}} />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('ModalVault')
  })

  it('renders the description text', () => {
    render(<LaunchSection onOpenModal={() => {}} />)
    expect(screen.getByText(/password-protected modal/i)).toBeInTheDocument()
  })

  it('renders the launch button', () => {
    render(<LaunchSection onOpenModal={() => {}} />)
    expect(screen.getByRole('button', { name: /launch modal/i })).toBeInTheDocument()
  })

  it('calls onOpenModal when the button is clicked', async () => {
    let clicked = false
    const user = userEvent.setup()
    render(
      <LaunchSection
        onOpenModal={() => {
          clicked = true
        }}
      />,
    )

    await user.click(screen.getByRole('button', { name: /launch modal/i }))

    expect(clicked).toBe(true)
  })
})
