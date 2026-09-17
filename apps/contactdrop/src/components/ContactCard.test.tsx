import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactCard } from './ContactCard'

describe('ContactCard', () => {
  it('renders the contact us heading', () => {
    render(<ContactCard onClose={vi.fn()} />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Contact Us')
  })

  it('renders the close button', () => {
    render(<ContactCard onClose={vi.fn()} />)
    expect(screen.getByRole('button', { name: /close contact form/i })).toBeInTheDocument()
  })

  it('calls onClose when close button is clicked', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<ContactCard onClose={onClose} />)
    await user.click(screen.getByRole('button', { name: /close contact form/i }))
    expect(onClose).toHaveBeenCalledOnce()
  })

  it('renders the form fields', () => {
    render(<ContactCard onClose={vi.fn()} />)
    expect(screen.getByLabelText(/your name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/your email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/your phone/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/your message/i)).toBeInTheDocument()
  })

  it('renders the banner image', () => {
    const { container } = render(<ContactCard onClose={vi.fn()} />)
    const img = container.querySelector('img')
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
