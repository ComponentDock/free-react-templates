import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { LaunchSection } from './LaunchSection'

describe('LaunchSection', () => {
  it('renders the heading', () => {
    render(<LaunchSection onLaunch={vi.fn()} />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Entrywell')
  })

  it('renders the launch button', () => {
    render(<LaunchSection onLaunch={vi.fn()} />)
    expect(screen.getByRole('button', { name: /launch modal/i })).toBeInTheDocument()
  })

  it('calls onLaunch when button is clicked', async () => {
    const user = userEvent.setup()
    const onLaunch = vi.fn()
    render(<LaunchSection onLaunch={onLaunch} />)
    await user.click(screen.getByRole('button', { name: /launch modal/i }))
    expect(onLaunch).toHaveBeenCalledTimes(1)
  })
})
