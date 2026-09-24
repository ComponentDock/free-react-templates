import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { InfoBoxes } from './InfoBoxes'

describe('InfoBoxes', () => {
  it('renders all three info box headings', () => {
    render(<InfoBoxes />)
    expect(screen.getByText('Free Consultations')).toBeInTheDocument()
    expect(screen.getByText('Emergency Care')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Make an Appointment' })).toBeInTheDocument()
  })

  it('has Department and Doctor select fields', () => {
    render(<InfoBoxes />)
    expect(screen.getByLabelText('Department')).toBeInTheDocument()
    expect(screen.getByLabelText('Doctor')).toBeInTheDocument()
  })

  it('has Name and Phone inputs', () => {
    render(<InfoBoxes />)
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Phone No')).toBeInTheDocument()
  })

  it('allows selecting department and doctor', async () => {
    const user = userEvent.setup()
    render(<InfoBoxes />)
    const dept = screen.getByLabelText('Department')
    await user.selectOptions(dept, 'cardiology')
    expect(dept).toHaveValue('cardiology')
    const doc = screen.getByLabelText('Doctor')
    await user.selectOptions(doc, 'dr-smith')
    expect(doc).toHaveValue('dr-smith')
  })

  it('allows typing in the phone input', async () => {
    const user = userEvent.setup()
    render(<InfoBoxes />)
    const phone = screen.getByPlaceholderText('Phone No')
    await user.type(phone, '555-1234')
    expect(phone).toHaveValue('555-1234')
  })

  it('shows confirmation on form submit', async () => {
    const user = userEvent.setup()
    render(<InfoBoxes />)
    await user.type(screen.getByPlaceholderText('Name'), 'John Doe')
    const submitBtn = screen.getByRole('button', { name: /make an appointment/i })
    await user.click(submitBtn)
    expect(screen.getByRole('status')).toHaveTextContent(/appointment request submitted/i)
  })

  it('has Read More links in consultation and emergency boxes', () => {
    render(<InfoBoxes />)
    const links = screen.getAllByRole('link', { name: /read more/i })
    expect(links.length).toBeGreaterThanOrEqual(2)
  })
})
