import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Portfolio } from './Portfolio'
import { works } from '../data'

describe('Portfolio', () => {
  it('renders the heading, subheading, and six works', () => {
    render(<Portfolio />)
    expect(screen.getByRole('heading', { level: 2, name: 'Our Portfolio' })).toBeInTheDocument()
    expect(screen.getByText("We're Happy to share our complete Projects")).toBeInTheDocument()
    for (const work of works) {
      expect(screen.getByText(work.title)).toBeInTheDocument()
    }
    expect(screen.getAllByText('Branding')).toHaveLength(6)
  })

  it('advances through the works with the next control', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)
    await user.click(screen.getByRole('button', { name: 'Next project' }))
    expect(screen.getByRole('button', { name: 'Go to Work 02' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('wraps around at both ends of the carousel', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)
    await user.click(screen.getByRole('button', { name: 'Previous project' }))
    expect(screen.getByRole('button', { name: 'Go to Work 06' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    await user.click(screen.getByRole('button', { name: 'Next project' }))
    expect(screen.getByRole('button', { name: 'Go to Work 01' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('jumps to a work via the dot controls', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)
    await user.click(screen.getByRole('button', { name: 'Go to Work 04' }))
    expect(screen.getByRole('button', { name: 'Go to Work 04' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    await user.click(screen.getByRole('button', { name: 'Previous project' }))
    expect(screen.getByRole('button', { name: 'Go to Work 03' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })
})
