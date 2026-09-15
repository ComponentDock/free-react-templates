import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { About } from './About'

describe('About', () => {
  it('renders the about section with heading and introduction', () => {
    render(<About />)

    expect(screen.getByText('Welcome & Introduce')).toBeInTheDocument()
    expect(screen.getByText(/Hi! I'm a Creative Designer/)).toBeInTheDocument()
  })

  it('renders the description paragraph', () => {
    render(<About />)

    expect(screen.getByText(/passionate designer and developer/)).toBeInTheDocument()
  })

  it('renders all three accordion panels', () => {
    render(<About />)

    expect(screen.getByRole('button', { name: 'Why choose me?' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'What I do?' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'My Specialties' })).toBeInTheDocument()
  })

  it('expands the first panel by default', () => {
    render(<About />)

    expect(screen.getByRole('button', { name: 'Why choose me?' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(screen.getByText(/years of experience/)).toBeInTheDocument()
  })

  it('switches accordion panels on click', async () => {
    const user = userEvent.setup()
    render(<About />)

    await user.click(screen.getByRole('button', { name: 'What I do?' }))

    expect(screen.getByRole('button', { name: 'What I do?' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(screen.getByRole('button', { name: 'Why choose me?' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    expect(screen.getByText(/branding, web design/)).toBeInTheDocument()
  })

  it('closes the currently open panel when clicked again', async () => {
    const user = userEvent.setup()
    render(<About />)

    // "Why choose me?" is open by default — click it to close
    await user.click(screen.getByRole('button', { name: 'Why choose me?' }))

    expect(screen.getByRole('button', { name: 'Why choose me?' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('applies custom className', () => {
    const { container } = render(<About className="custom-class" />)
    expect(container.firstChild).toHaveClass('custom-class')
  })
})
