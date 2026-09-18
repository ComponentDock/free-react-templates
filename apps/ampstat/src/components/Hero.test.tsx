import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Hero from './Hero'

describe('Hero', () => {
  it('renders the heading with music text', () => {
    render(<Hero />)
    expect(screen.getByText('your')).toBeInTheDocument()
    expect(screen.getByText('music.')).toBeInTheDocument()
  })

  it('renders the ticket form', () => {
    render(<Hero />)
    expect(screen.getByTestId('ticket-form')).toBeInTheDocument()
  })

  it('renders event dropdown button', () => {
    render(<Hero />)
    expect(screen.getByTestId('event-dropdown')).toBeInTheDocument()
  })

  it('renders ticket input', () => {
    render(<Hero />)
    expect(screen.getByTestId('ticket-input')).toBeInTheDocument()
  })

  it('renders get your tickets button', () => {
    render(<Hero />)
    expect(screen.getByTestId('ticket-button')).toBeInTheDocument()
  })

  it('opens event dropdown and selects an event', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByTestId('event-dropdown'))
    expect(screen.getByTestId('event-options')).toBeInTheDocument()
    await user.click(screen.getByText('Summer Festival'))
    expect(screen.getByText('Summer Festival')).toBeInTheDocument()
  })

  it('allows typing ticket count', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.type(screen.getByTestId('ticket-input'), '2')
    expect(screen.getByTestId('ticket-input')).toHaveValue('2')
  })

  it('submits the ticket form', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByTestId('ticket-button'))
  })

  it('renders scroll down indicator', () => {
    render(<Hero />)
    expect(screen.getByText('follow')).toBeInTheDocument()
  })
})
