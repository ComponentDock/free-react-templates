import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { About } from './About'

describe('About', () => {
  it('renders the welcome heading, blurb, and founder signature', () => {
    render(<About />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/Welcome To\s+Our Company/i)
    expect(screen.getByText(/Bruce Smith/i)).toBeInTheDocument()
    expect(screen.getByText(/Founder, CEO/i)).toBeInTheDocument()
  })

  it('shows the first about photo and carousel controls', () => {
    render(<About />)
    expect(
      screen.getByRole('img', { name: /Architectural interior view one/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Previous about photo/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Next about photo/i })).toBeInTheDocument()
  })

  it('advances and wraps the photo carousel', async () => {
    const user = userEvent.setup()
    render(<About />)
    await user.click(screen.getByRole('button', { name: /Next about photo/i }))
    expect(screen.getByRole('img', { name: /interior view two/i })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /Previous about photo/i }))
    await user.click(screen.getByRole('button', { name: /Previous about photo/i }))
    expect(screen.getByRole('img', { name: /interior view three/i })).toBeInTheDocument()
  })

  it('jumps to a photo via its dot', async () => {
    const user = userEvent.setup()
    render(<About />)
    await user.click(screen.getByRole('button', { name: 'Go to about photo 3' }))
    expect(screen.getByRole('img', { name: /interior view three/i })).toBeInTheDocument()
  })
})
