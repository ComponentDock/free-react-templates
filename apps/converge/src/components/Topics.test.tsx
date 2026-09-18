import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Topics } from './Topics'

describe('Topics', () => {
  it('renders the section heading', () => {
    render(<Topics />)
    expect(screen.getByRole('heading', { name: /the topics/i })).toBeInTheDocument()
  })

  it('renders all 6 tab buttons', () => {
    render(<Topics />)
    expect(screen.getByText('01. Marketing Intro')).toBeInTheDocument()
    expect(screen.getByText('06. Special Guest')).toBeInTheDocument()
  })

  it('shows the first topic by default', () => {
    render(<Topics />)
    expect(screen.getByText('Marketing 101 — Studies for Beginners')).toBeInTheDocument()
  })

  it('switches to a different tab on click', async () => {
    const user = userEvent.setup()
    render(<Topics />)
    await user.click(screen.getByText('02. Marketing Strategy'))
    expect(screen.getByText('Strategic Marketing Planning')).toBeInTheDocument()
    expect(screen.queryByText('Marketing 101 — Studies for Beginners')).not.toBeInTheDocument()
  })

  it('renders Read More links', () => {
    render(<Topics />)
    const links = screen.getAllByText('Read More')
    expect(links.length).toBeGreaterThanOrEqual(1)
  })

  it('renders an image for the active topic', () => {
    render(<Topics />)
    expect(screen.getByAltText('Marketing 101 — Studies for Beginners')).toBeInTheDocument()
  })
})
