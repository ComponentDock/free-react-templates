import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders the announcement text', () => {
    render(<TopBar />)
    expect(
      screen.getByText(/This handy little bar is great for informing visitors/),
    ).toBeInTheDocument()
  })

  it('renders a "Learn More" link with href', () => {
    render(<TopBar />)
    const link = screen.getByRole('link', { name: 'Learn More' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#learn-more')
  })
})
