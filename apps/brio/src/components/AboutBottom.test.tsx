import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { AboutBottom } from './AboutBottom'

describe('AboutBottom', () => {
  it('renders heading and description', () => {
    render(<AboutBottom />)
    expect(screen.getByText('Powerful Performance')).toBeInTheDocument()
    expect(screen.getByText(/lorem ipsum dolor sit amet/i)).toBeInTheDocument()
  })

  it('renders Learn More button', async () => {
    const user = userEvent.setup()
    render(<AboutBottom />)
    const link = screen.getByRole('link', { name: /learn more/i })
    expect(link).toBeInTheDocument()
    await user.click(link)
  })

  it('renders the about image', () => {
    render(<AboutBottom />)
    expect(screen.getByAltText('About our app')).toBeInTheDocument()
  })
})
