import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { UpdateNews } from './UpdateNews'

describe('UpdateNews', () => {
  it('renders the section title', () => {
    render(<UpdateNews />)
    expect(screen.getByText(/Update News/)).toBeInTheDocument()
  })

  it('renders tab buttons', () => {
    render(<UpdateNews />)
    expect(screen.getByRole('tab', { name: 'PlayStation' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Windows' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Mobile' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Xbox' })).toBeInTheDocument()
  })

  it('defaults to PlayStation tab content', () => {
    render(<UpdateNews />)
    expect(screen.getByText(/Monster Prom poster/)).toBeInTheDocument()
  })

  it('switches tab content on click', async () => {
    const user = userEvent.setup()
    render(<UpdateNews />)
    await user.click(screen.getByRole('tab', { name: 'Windows' }))
    expect(screen.getByText(/Steam Summer Sale/)).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Windows' })).toHaveAttribute('aria-selected', 'true')
  })

  it('has correct section id', () => {
    const { container } = render(<UpdateNews />)
    const section = container.querySelector('section')
    expect(section).toHaveAttribute('id', 'updates')
  })
})
