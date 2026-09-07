import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FormCheckbox } from './FormCheckbox'

describe('FormCheckbox', () => {
  it('renders the label text', () => {
    render(<FormCheckbox id="c1" label="Accept terms" />)
    expect(screen.getByText('Accept terms')).toBeInTheDocument()
  })

  it('defaults to unchecked', () => {
    render(<FormCheckbox id="c1" label="Accept terms" />)
    expect(screen.getByRole('checkbox')).not.toBeChecked()
  })

  it('can be defaultChecked', () => {
    render(<FormCheckbox id="c1" label="Accept terms" defaultChecked />)
    expect(screen.getByRole('checkbox')).toBeChecked()
  })

  it('toggles on click', async () => {
    const user = userEvent.setup()
    render(<FormCheckbox id="c1" label="Accept terms" />)
    await user.click(screen.getByLabelText('Accept terms'))
    expect(screen.getByRole('checkbox')).toBeChecked()
    await user.click(screen.getByLabelText('Accept terms'))
    expect(screen.getByRole('checkbox')).not.toBeChecked()
  })

  it('renders a link when linkText is provided', () => {
    render(
      <FormCheckbox
        id="c1"
        label="Please accept terms and conditions?"
        linkText="terms and conditions"
        linkHref="#terms"
      />,
    )
    const link = screen.getByRole('link', { name: /terms and conditions/i })
    expect(link).toHaveAttribute('href', '#terms')
  })
})
