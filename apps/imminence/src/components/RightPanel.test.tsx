import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RightPanel } from './RightPanel'

describe('RightPanel', () => {
  it('renders the heading and description', () => {
    render(<RightPanel />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Under Construction')
    expect(screen.getByText(/undergoing scheduled maintenance/i)).toBeInTheDocument()
  })

  it('renders the logo', () => {
    render(<RightPanel />)

    expect(screen.getByText('Imminence')).toBeInTheDocument()
  })

  it('renders the email form', () => {
    render(<RightPanel />)

    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /notify us/i })).toBeInTheDocument()
  })

  it('renders social icons', () => {
    render(<RightPanel />)

    expect(screen.getByText('Stay in touch :')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Pinterest' })).toBeInTheDocument()
  })

  it('shows confirmation message after form submit', async () => {
    const user = userEvent.setup()
    render(<RightPanel />)

    await user.type(screen.getByRole('textbox', { name: /email/i }), 'test@example.com')
    await user.click(screen.getByRole('button', { name: /notify us/i }))

    expect(screen.getByText(/thank you.*notify you/i)).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: /notify us/i })).not.toBeInTheDocument()
  })

  it('renders the subtext below form', () => {
    render(<RightPanel />)

    expect(screen.getByText(/sign up now to get early notification/i)).toBeInTheDocument()
  })
})
