import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders all projects initially', () => {
    render(<Portfolio />)
    expect(screen.getByText('Print Template')).toBeInTheDocument()
    expect(screen.getByText('UI Prototype')).toBeInTheDocument()
  })

  it('filters projects by category', async () => {
    render(<Portfolio />)
    await userEvent.click(screen.getByRole('button', { name: /Coding/i }))
    expect(screen.getByText('Coding Dashboard')).toBeInTheDocument()
    expect(screen.queryByText('Print Template')).not.toBeInTheDocument()
  })
})
