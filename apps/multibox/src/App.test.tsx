import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders the heading and multi-select component', () => {
    render(<App />)

    expect(document.title).toBe('Multibox — Multi-Select Snippet')

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toBe('Multi-Select #9')

    expect(screen.getByText('Select Categories')).toBeInTheDocument()
  })

  it('has a light gray background', () => {
    render(<App />)
    const root = screen.getByText('Multi-Select #9').closest('div')?.parentElement?.parentElement
    expect(root).toHaveStyle({ backgroundColor: '#efefef' })
  })

  it('shows variant color picker buttons', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: 'Select cream variant' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Select green variant' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Select blue variant' })).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    expect(screen.getByText('More templates at')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('switches variant when clicking a variant button', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Select green variant' }))

    // The green variant button should now have the active style
    const greenBtn = screen.getByRole('button', { name: 'Select green variant' })
    expect(greenBtn.className).toContain('border-gray-800')
  })
})
