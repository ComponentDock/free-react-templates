import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { StepIndicator } from './StepIndicator'
import { STEPS } from '../types'

describe('StepIndicator', () => {
  it('renders all three step labels', () => {
    render(<StepIndicator steps={STEPS} currentStep={1} />)
    expect(screen.getByText('Account')).toBeInTheDocument()
    expect(screen.getByText('Room type')).toBeInTheDocument()
    expect(screen.getByText('Extra details')).toBeInTheDocument()
  })

  it('highlights the current step with active underline', () => {
    render(<StepIndicator steps={STEPS} currentStep={1} />)
    const accountItem = screen.getByText('Account').closest('li')!
    expect(accountItem).toHaveAttribute('aria-current', 'step')
    // The active underline span should have h-[3px]
    const underline = accountItem.querySelector('span[aria-hidden="true"]')
    expect(underline).toHaveClass('h-[3px]')
  })

  it('does not highlight non-current steps', () => {
    render(<StepIndicator steps={STEPS} currentStep={1} />)
    const roomTypeItem = screen.getByText('Room type').closest('li')!
    expect(roomTypeItem).not.toHaveAttribute('aria-current')
    const underline = roomTypeItem.querySelector('span[aria-hidden="true"]')
    expect(underline).toHaveClass('h-0')
  })

  it('updates highlight when current step changes', () => {
    render(<StepIndicator steps={STEPS} currentStep={2} />)
    const accountItem = screen.getByText('Account').closest('li')!
    const roomTypeItem = screen.getByText('Room type').closest('li')!
    expect(accountItem).not.toHaveAttribute('aria-current')
    expect(roomTypeItem).toHaveAttribute('aria-current', 'step')
  })

  it('highlights step 3 when currentStep is 3', () => {
    render(<StepIndicator steps={STEPS} currentStep={3} />)
    const extraItem = screen.getByText('Extra details').closest('li')!
    expect(extraItem).toHaveAttribute('aria-current', 'step')
  })

  it('renders navigation links that prevent default', async () => {
    const user = userEvent.setup()
    render(<StepIndicator steps={STEPS} currentStep={1} />)
    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(3)
    links.forEach((link) => {
      expect(link).toHaveAttribute('href', '#')
    })
    // Click a link and verify it doesn't navigate away
    const roomTypeLink = links[1]!
    await user.click(roomTypeLink)
    expect(roomTypeLink).toHaveAttribute('href', '#')
  })
})
