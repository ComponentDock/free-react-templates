import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TabBar } from './TabBar'

describe('TabBar', () => {
  it('renders both tabs', () => {
    render(<TabBar activeTab="signup" onTabChange={vi.fn()} />)
    expect(screen.getByRole('button', { name: /sign up/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument()
  })

  it('calls onTabChange with signup when sign up tab is clicked', async () => {
    const onTabChange = vi.fn()
    const user = userEvent.setup()
    render(<TabBar activeTab="signin" onTabChange={onTabChange} />)

    await user.click(screen.getByRole('button', { name: /sign up/i }))
    expect(onTabChange).toHaveBeenCalledWith('signup')
  })

  it('calls onTabChange with signin when sign in tab is clicked', async () => {
    const onTabChange = vi.fn()
    const user = userEvent.setup()
    render(<TabBar activeTab="signup" onTabChange={onTabChange} />)

    await user.click(screen.getByRole('button', { name: /sign in/i }))
    expect(onTabChange).toHaveBeenCalledWith('signin')
  })

  it('applies active styling to the current tab', () => {
    render(<TabBar activeTab="signup" onTabChange={vi.fn()} />)
    const signUpBtn = screen.getByRole('button', { name: /sign up/i })
    expect(signUpBtn.className).toContain('border-tab-active')
    expect(signUpBtn.className).toContain('text-white')
  })

  it('applies inactive styling to the non-current tab', () => {
    render(<TabBar activeTab="signup" onTabChange={vi.fn()} />)
    const signInBtn = screen.getByRole('button', { name: /sign in/i })
    expect(signInBtn.className).toContain('text-tab-inactive')
  })
})
