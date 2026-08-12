import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Salus — Medical & Hospital Template')
  })

  it('composes the page sections in order', () => {
    render(<App />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: 'Our Departments' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Expert Doctors' })).toBeInTheDocument()
  })

  it('opens the appointment modal from the navbar button', async () => {
    const user = userEvent.setup()
    render(<App />)

    const header = screen.getByRole('banner')
    await user.click(
      within(header).getByRole('button', {
        name: 'Make an Appointment',
        hidden: true,
      }),
    )

    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('opens the appointment modal from the services card', async () => {
    const user = userEvent.setup()
    render(<App />)

    const services = screen.getByRole('region', { name: 'Services' })
    await user.click(within(services).getByRole('button', { name: 'Make an Appointment' }))

    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('opens the appointment modal from the emergency band', async () => {
    const user = userEvent.setup()
    render(<App />)

    const emergency = screen.getByRole('region', {
      name: 'Emergency contact',
    })
    await user.click(within(emergency).getByRole('button', { name: 'Make an Appointment' }))

    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('closes the appointment modal', async () => {
    const user = userEvent.setup()
    render(<App />)

    const services = screen.getByRole('region', { name: 'Services' })
    await user.click(within(services).getByRole('button', { name: 'Make an Appointment' }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
