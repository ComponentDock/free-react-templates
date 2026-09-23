import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RightPanel } from './RightPanel'

describe('RightPanel', () => {
  it('renders the submit button', () => {
    render(<RightPanel />)
    expect(screen.getByText('Sign me in now')).toBeInTheDocument()
  })

  it('renders the Remember Me checkbox checked by default', () => {
    render(<RightPanel />)
    const checkbox = screen.getByRole('checkbox', { name: /remember me/i })
    expect(checkbox).toBeChecked()
  })

  it('unchecks the Remember Me checkbox when clicked', async () => {
    const user = userEvent.setup()
    render(<RightPanel />)

    const checkbox = screen.getByRole('checkbox', { name: /remember me/i })
    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })

  it('renders the Forgot Password link', () => {
    render(<RightPanel />)
    expect(screen.getByText('Forgot Password')).toBeInTheDocument()
  })

  it('renders the Or Sign In With divider', () => {
    render(<RightPanel />)
    expect(screen.getByText('— Or Sign In With —')).toBeInTheDocument()
  })

  it('renders Facebook social icon', () => {
    render(<RightPanel />)
    expect(screen.getByLabelText('Login with Facebook')).toBeInTheDocument()
  })

  it('renders Twitter social icon', () => {
    render(<RightPanel />)
    expect(screen.getByLabelText('Login with Twitter')).toBeInTheDocument()
  })
})
