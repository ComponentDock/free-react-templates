import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Models } from './Models'

const allNames = [
  'Alicia Williams',
  'Bianca Ross',
  'Chloe Bennett',
  'Daniel Cross',
  'Ethan Shaw',
  'Fiona Grant',
  'Grace Lin',
  'Henry Cole',
  'Ivy Parker',
]

describe('Models', () => {
  it('renders the rotated title, filters, see-all square, and all nine tiles', () => {
    render(<Models />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/see the models/i)

    for (const label of ['All', 'Female', 'Male', 'Children']) {
      expect(screen.getByRole('button', { name: label })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'See all models' })).toHaveTextContent('+')
    for (const name of allNames) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
    expect(screen.getAllByText('View Portfolio')).toHaveLength(9)
  })

  it('marks All as the active filter by default', () => {
    render(<Models />)
    expect(screen.getByRole('button', { name: 'All' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: 'Female' })).toHaveAttribute('aria-pressed', 'false')
  })

  it('filters the grid by category and back to All', async () => {
    const user = userEvent.setup()
    render(<Models />)

    await user.click(screen.getByRole('button', { name: 'Male' }))
    expect(screen.getByText('Daniel Cross')).toBeInTheDocument()
    expect(screen.getByText('Ethan Shaw')).toBeInTheDocument()
    expect(screen.getByText('Henry Cole')).toBeInTheDocument()
    expect(screen.queryByText('Alicia Williams')).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Male' })).toHaveAttribute('aria-pressed', 'true')

    await user.click(screen.getByRole('button', { name: 'Children' }))
    expect(screen.getByText('Ivy Parker')).toBeInTheDocument()
    expect(screen.queryByText('Bianca Ross')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'All' }))
    for (const name of allNames) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })
})
