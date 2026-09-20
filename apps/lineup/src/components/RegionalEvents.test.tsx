import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RegionalEvents } from './RegionalEvents'

describe('RegionalEvents', () => {
  it('renders default location heading', () => {
    render(<RegionalEvents />)

    expect(screen.getByText('Events in New York')).toBeInTheDocument()
  })

  it('renders location selector with options', () => {
    render(<RegionalEvents />)

    const select = screen.getByRole('combobox', { name: /select location/i })
    expect(select).toBeInTheDocument()

    expect(screen.getByRole('option', { name: 'New York' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'California' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'South Carolina' })).toBeInTheDocument()
  })

  it('updates heading when location changes', async () => {
    const user = userEvent.setup()
    render(<RegionalEvents />)

    const select = screen.getByRole('combobox', { name: /select location/i })
    await user.selectOptions(select, 'California')

    expect(screen.getByText('Events in California')).toBeInTheDocument()
  })

  it('renders event cards in slider', () => {
    render(<RegionalEvents />)

    expect(screen.getByText('U2 Concert')).toBeInTheDocument()
    expect(screen.getByText('Broadway Hit')).toBeInTheDocument()
    expect(screen.getByText('Gallery Exhibition')).toBeInTheDocument()
    expect(screen.getByText('Art Gallery')).toBeInTheDocument()
    expect(screen.getByText('Music Concert')).toBeInTheDocument()
    expect(screen.getByText('EDM Festival')).toBeInTheDocument()
  })

  it('renders partners section', () => {
    render(<RegionalEvents />)

    expect(screen.getByText('Partners')).toBeInTheDocument()
    expect(screen.getByText('Partner Alpha')).toBeInTheDocument()
    expect(screen.getByText('Partner Beta')).toBeInTheDocument()
    expect(screen.getByText('Partner Gamma')).toBeInTheDocument()
    expect(screen.getByText('Partner Delta')).toBeInTheDocument()
    expect(screen.getByText('Partner Epsilon')).toBeInTheDocument()
  })

  it('renders slider navigation arrows', () => {
    render(<RegionalEvents />)

    expect(screen.getByRole('button', { name: /previous/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument()
  })
})
