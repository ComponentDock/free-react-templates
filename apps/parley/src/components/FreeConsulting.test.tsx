import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { FreeConsulting } from './FreeConsulting'
import { consultServices, guidanceOptions } from '../data'

describe('FreeConsulting', () => {
  it('renders the heading and every quote-form field with the pink submit', () => {
    render(<FreeConsulting />)
    expect(screen.getByRole('heading', { level: 2, name: 'Free Consulting' })).toBeInTheDocument()
    expect(screen.getByLabelText('First Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone')).toBeInTheDocument()
    const select = screen.getByLabelText('Select Guidance')
    for (const option of guidanceOptions) {
      expect(select).toHaveTextContent(option)
    }
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    const submit = screen.getByRole('button', { name: 'Request A Quote' })
    expect(submit).toHaveAttribute('type', 'submit')
    expect(submit.className).toContain('bg-accent')
  })

  it('renders the brand block and the 2×2 services grid', () => {
    render(<FreeConsulting />)
    expect(screen.getByText('Parley')).toBeInTheDocument()
    expect(screen.getByText('A Consulting Agency')).toBeInTheDocument()
    for (const service of consultServices) {
      expect(screen.getByRole('heading', { level: 3, name: service.title })).toBeInTheDocument()
    }
  })

  it('shows a success message that replaces the form after submitting', async () => {
    const user = userEvent.setup()
    render(<FreeConsulting />)
    await user.click(screen.getByRole('button', { name: 'Request A Quote' }))
    expect(screen.getByText(/Thank you! Our team/)).toBeInTheDocument()
    expect(screen.queryByLabelText('First Name')).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Request A Quote' })).not.toBeInTheDocument()
  })
})
