import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WelcomeIntro } from './WelcomeIntro'

describe('WelcomeIntro', () => {
  it('renders the heading, two paragraphs and a Learn More action', () => {
    render(<WelcomeIntro />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Welcome To Our Website' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Learn More' })).toHaveAttribute('href', '#services')
    const paragraphs = screen.getAllByText(/Far far away|A small river/)
    expect(paragraphs).toHaveLength(2)
  })
})
