import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { OverlapStrip } from './OverlapStrip'
import { describe, expect, it } from 'vitest'

describe('OverlapStrip', () => {
  it('renders the two feature cards and the quote form', () => {
    render(<OverlapStrip />)
    expect(screen.getByRole('heading', { level: 2, name: 'Best Prices' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: '24/7 Support' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Get Free Quote' })).toBeInTheDocument()
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
  })

  it('submits the quote form to a client-side success state', async () => {
    const user = userEvent.setup()
    render(<OverlapStrip />)
    await user.type(screen.getByLabelText('Name'), 'Jane Doe')
    await user.type(screen.getByLabelText('Email'), 'jane@example.com')
    await user.click(screen.getByRole('button', { name: 'Get Quote' }))
    expect(screen.getByRole('status')).toHaveTextContent(/quote shortly/)
    expect(screen.queryByLabelText('Name')).not.toBeInTheDocument()
  })
})
