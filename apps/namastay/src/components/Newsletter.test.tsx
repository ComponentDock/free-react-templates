import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders section heading', () => {
    render(<Newsletter />)
    expect(screen.getByRole('heading', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('renders email input', () => {
    render(<Newsletter />)
    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument()
  })

  it('renders subscribe button', () => {
    render(<Newsletter />)
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('handles form submission with valid email', async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn()
    render(<Newsletter onSubmit={onSubmit} />)
    const input = screen.getByRole('textbox', { name: /email/i })
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    expect(onSubmit).toHaveBeenCalledWith('test@example.com')
    expect(input).toHaveValue('')
  })

  it('does not call onSubmit when email is empty', async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn()
    render(<Newsletter onSubmit={onSubmit} />)
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    expect(onSubmit).not.toHaveBeenCalled()
  })

  it('does not call onSubmit when email is whitespace only', async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn()
    render(<Newsletter onSubmit={onSubmit} />)
    const input = screen.getByRole('textbox', { name: /email/i })
    await user.type(input, '   ')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    expect(onSubmit).not.toHaveBeenCalled()
  })

  it('works without onSubmit prop', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByRole('textbox', { name: /email/i })
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    expect(input).toHaveValue('')
  })
})
