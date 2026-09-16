import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders all four columns', () => {
    render(<Newsletter />)
    expect(screen.getByText('About Agency')).toBeInTheDocument()
    expect(screen.getByText('Navigation Links')).toBeInTheDocument()
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
    expect(screen.getByText('InstaFeed')).toBeInTheDocument()
  })

  it('renders the email input', () => {
    render(<Newsletter />)
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Newsletter />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('submits the newsletter form without page reload', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByLabelText('Email address')
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(input).toHaveValue('test@example.com')
  })
})
