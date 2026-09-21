import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ClassSection } from './ClassSection'

describe('ClassSection', () => {
  it('renders heading and subtitle', () => {
    render(<ClassSection />)
    expect(screen.getByText('Class cakes')).toBeInTheDocument()
    expect(screen.getByText('Made from your own hands')).toBeInTheDocument()
  })

  it('renders registration form with all fields', () => {
    render(<ClassSection />)
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone')).toBeInTheDocument()
    expect(screen.getByLabelText('Class Type')).toBeInTheDocument()
    expect(screen.getByLabelText('Requirements')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /registration/i })).toBeInTheDocument()
  })

  it('renders class type dropdown with 3 options', () => {
    render(<ClassSection />)
    const select = screen.getByLabelText('Class Type')
    expect(select.tagName).toBe('SELECT')
    expect(screen.getByText('Studying Class')).toBeInTheDocument()
    expect(screen.getByText('Writing Class')).toBeInTheDocument()
    expect(screen.getByText('Reading Class')).toBeInTheDocument()
  })

  it('renders video thumbnail with play button', () => {
    render(<ClassSection />)
    expect(screen.getByAltText('Baking class video')).toBeInTheDocument()
    expect(screen.getByLabelText('Play baking class video')).toBeInTheDocument()
  })

  it('shows thank you message after form submission', async () => {
    const user = userEvent.setup()
    render(<ClassSection />)
    await user.type(screen.getByLabelText('Name'), 'Jane Doe')
    await user.type(screen.getByLabelText('Phone'), '555-1234')
    await user.click(screen.getByRole('button', { name: /registration/i }))
    expect(screen.getByText('Thank you for registering!')).toBeInTheDocument()
    expect(screen.getByText(/We will contact you with class details soon/)).toBeInTheDocument()
  })

  it('form fields are no longer visible after submission', async () => {
    const user = userEvent.setup()
    render(<ClassSection />)
    await user.type(screen.getByLabelText('Name'), 'Jane')
    await user.type(screen.getByLabelText('Phone'), '555')
    await user.click(screen.getByRole('button', { name: /registration/i }))
    expect(screen.queryByLabelText('Name')).not.toBeInTheDocument()
  })
})
