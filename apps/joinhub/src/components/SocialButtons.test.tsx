import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SocialButtons } from './SocialButtons'

describe('SocialButtons', () => {
  it('renders three social buttons', () => {
    render(<SocialButtons />)
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(3)
  })

  it('renders Google button with accessible label', () => {
    render(<SocialButtons />)
    expect(screen.getByRole('button', { name: /google/i })).toBeInTheDocument()
  })

  it('renders Facebook button with accessible label', () => {
    render(<SocialButtons />)
    expect(screen.getByRole('button', { name: /facebook/i })).toBeInTheDocument()
  })

  it('renders Twitter button with accessible label', () => {
    render(<SocialButtons />)
    expect(screen.getByRole('button', { name: /twitter/i })).toBeInTheDocument()
  })

  it('buttons have circular shape class', () => {
    render(<SocialButtons />)
    const buttons = screen.getAllByRole('button')
    for (const btn of buttons) {
      expect(btn).toHaveClass('rounded-full')
    }
  })

  it('buttons are clickable', async () => {
    const user = userEvent.setup()
    render(<SocialButtons />)
    const googleBtn = screen.getByRole('button', { name: /google/i })
    await user.click(googleBtn)
    // buttons should not throw on click
  })
})
