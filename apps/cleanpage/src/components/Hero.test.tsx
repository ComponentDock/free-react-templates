import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the heading', () => {
    render(<Hero />)
    expect(screen.getByText('We Help to Build You the Product')).toBeInTheDocument()
  })

  it('renders the subheading', () => {
    render(<Hero />)
    expect(screen.getByText('Welcome')).toBeInTheDocument()
  })

  it('renders the business solution text', () => {
    render(<Hero />)
    expect(screen.getByText('Business Solution')).toBeInTheDocument()
  })

  it('renders a clickable CTA button', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const cta = screen.getByText('Get in touch')
    expect(cta).toBeInTheDocument()
    await user.click(cta)
  })
})
