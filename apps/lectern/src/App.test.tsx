import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Lectern — University Template')
  })

  it('toggles dark mode on the html element', async () => {
    const user = userEvent.setup()
    render(<App />)

    const toggle = screen.getByRole('button', { name: /switch to (light|dark) mode/i })
    expect(document.documentElement.classList.contains('dark')).toBe(false)

    await user.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(true)

    await user.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })
})
