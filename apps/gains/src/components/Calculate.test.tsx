import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { Calculate } from './Calculate'

describe('Calculate', () => {
  it('renders the heading, gender radios, and CTA', () => {
    render(<Calculate />)

    expect(screen.getByText('BMI checker')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Calculate your bmi' }),
    ).toBeInTheDocument()

    const male = screen.getByRole('radio', { name: 'Male' })
    const female = screen.getByRole('radio', { name: 'Female' })
    const other = screen.getByRole('radio', { name: 'Other' })
    expect(male).toBeChecked()
    expect(female).not.toBeChecked()
    expect(other).not.toBeChecked()

    expect(screen.getByRole('button', { name: 'Calculate Now' })).toBeInTheDocument()
  })

  it('switches the selected gender', async () => {
    const user = userEvent.setup()
    render(<Calculate />)

    await user.click(screen.getByRole('radio', { name: 'Female' }))
    expect(screen.getByRole('radio', { name: 'Female' })).toBeChecked()
    expect(screen.getByRole('radio', { name: 'Male' })).not.toBeChecked()
  })

  it('submits the form without errors', async () => {
    const user = userEvent.setup()
    render(<Calculate />)

    await user.click(screen.getByRole('button', { name: 'Calculate Now' }))
    expect(screen.getByRole('radio', { name: 'Male' })).toBeChecked()
  })
})
