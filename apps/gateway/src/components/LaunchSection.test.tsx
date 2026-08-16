import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LaunchSection } from './LaunchSection'

describe('LaunchSection', () => {
  it('renders the heading and a teal launch button on a full-viewport section', () => {
    render(<LaunchSection onLaunch={() => {}} />)

    expect(screen.getByRole('heading', { level: 1, name: /gateway/i })).toBeInTheDocument()
    const button = screen.getByRole('button', { name: /^launch signup$/i })
    expect(button).toHaveClass('rounded-[4px]')
    expect(button.textContent).toMatch(/launch signup/i)
  })

  it('calls onLaunch when the button is clicked', async () => {
    const user = userEvent.setup()
    const onLaunch = vi.fn()
    render(<LaunchSection onLaunch={onLaunch} />)

    await user.click(screen.getByRole('button', { name: /^launch signup$/i }))

    expect(onLaunch).toHaveBeenCalledTimes(1)
  })
})
