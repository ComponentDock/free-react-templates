import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders sidebar and main content', () => {
    render(<App />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    expect(screen.getByText('Sidebar #04')).toBeInTheDocument()
    expect(screen.getByText('Kenitic')).toBeInTheDocument()
  })

  it('renders toggle button', () => {
    render(<App />)
    expect(screen.getByTestId('toggle-button')).toBeInTheDocument()
  })

  it('collapses sidebar when toggle is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    const toggle = screen.getByTestId('toggle-button')
    const sidebar = screen.getByTestId('sidebar')

    expect(sidebar).toHaveClass('translate-x-0')
    await user.click(toggle)
    expect(sidebar).toHaveClass('translate-x-full')
  })

  it('expands sidebar after collapse', async () => {
    const user = userEvent.setup()
    render(<App />)
    const toggle = screen.getByTestId('toggle-button')
    const sidebar = screen.getByTestId('sidebar')

    await user.click(toggle)
    expect(sidebar).toHaveClass('translate-x-full')
    await user.click(toggle)
    expect(sidebar).toHaveClass('translate-x-0')
  })

  it('main content adjusts margin when sidebar toggles', async () => {
    const user = userEvent.setup()
    render(<App />)
    const main = screen.getByRole('main')
    expect(main).toHaveClass('mr-[300px]')

    await user.click(screen.getByTestId('toggle-button'))
    expect(main).toHaveClass('mr-0')
  })
})
