import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the link columns, subscribe form, social links, and copyright bar', () => {
    render(<Footer />)

    for (const title of ['About', 'Solutions', 'Company']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }

    expect(screen.getByText('Manage Team')).toBeInTheDocument()
    expect(screen.getByText('Digital Agency')).toBeInTheDocument()
    expect(screen.getByText('Creative Agency')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 3, name: 'Subscribe for More Features' }),
    ).toBeInTheDocument()
    expect(screen.getByLabelText('Subscribe email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()

    for (const social of ['GitHub', 'X', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: social })).toBeInTheDocument()
    }

    expect(
      screen.getByText(`Copyright © ${new Date().getFullYear()} Appy. All rights reserved.`),
    ).toBeInTheDocument()
  })

  it('clears the subscribe input after submitting', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByLabelText('Subscribe email')
    await user.type(input, 'hello@appy.com')
    expect(input).toHaveValue('hello@appy.com')

    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(input).toHaveValue('')
  })
})
