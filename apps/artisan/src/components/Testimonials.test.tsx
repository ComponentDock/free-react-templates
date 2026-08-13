import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('shows the first slide with author, stars and quote', () => {
    render(<Testimonials />)
    expect(screen.getByText('Fanny Spencer')).toBeInTheDocument()
    expect(screen.getByText(/As conscious traveling/)).toBeInTheDocument()
    expect(screen.getAllByRole('img', { name: 'Star' })).toHaveLength(5)
  })

  it('cycles to the next slide via the next arrow', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByText('Martin Cole')).toBeInTheDocument()
    expect(screen.getByText(/Far far away/)).toBeInTheDocument()
  })

  it('cycles to the previous slide via the prev arrow', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.click(screen.getByRole('button', { name: /previous/i }))
    expect(screen.getByText('Fanny Spencer')).toBeInTheDocument()
  })

  it('wraps around after the last slide', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByText('Fanny Spencer')).toBeInTheDocument()
  })

  it('jumps to a slide via its dot bar', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /go to slide 2/i }))
    expect(screen.getByText('Martin Cole')).toBeInTheDocument()
  })
})
