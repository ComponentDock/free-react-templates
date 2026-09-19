import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders sidebar with logo', () => {
    render(<App />)
    const logos = screen.getAllByText('Stockroom')
    expect(logos.length).toBeGreaterThanOrEqual(1)
  })

  it('renders product grid', () => {
    render(<App />)
    expect(screen.getAllByRole('link').length).toBeGreaterThanOrEqual(9)
  })

  it('renders newsletter section', () => {
    render(<App />)
    expect(screen.getByText('Subscribe for a')).toBeInTheDocument()
  })

  it('renders footer with Component Dock', () => {
    render(<App />)
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })

  it('opens search overlay when Search is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByText('Search'))
    expect(screen.getByPlaceholderText('Type your keyword...')).toBeInTheDocument()
  })

  it('closes search overlay when close button is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByText('Search'))
    expect(screen.getByPlaceholderText('Type your keyword...')).toBeInTheDocument()
    await user.click(screen.getByLabelText('Close search'))
    expect(screen.queryByPlaceholderText('Type your keyword...')).not.toBeInTheDocument()
  })
})
