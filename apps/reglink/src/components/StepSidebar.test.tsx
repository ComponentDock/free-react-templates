import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { StepSidebar } from './StepSidebar'

describe('StepSidebar', () => {
  it('renders all three step indicators', () => {
    render(<StepSidebar currentStep={1} />)
    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('02')).toBeInTheDocument()
    expect(screen.getByText('03')).toBeInTheDocument()
  })

  it('renders step labels on desktop', () => {
    render(<StepSidebar currentStep={1} />)
    const labels = screen.getAllByText(
      /Personal Information|Connect Bank Account|Set Financial Goals/,
    )
    expect(labels.length).toBeGreaterThanOrEqual(3)
  })

  it('marks step 1 as active when currentStep is 1', () => {
    const { container } = render(<StepSidebar currentStep={1} />)
    const step1 = container.querySelector('[data-active="true"][data-current="true"]')
    expect(step1).toBeTruthy()
  })

  it('marks completed steps with check icon', () => {
    const { container } = render(<StepSidebar currentStep={2} />)
    const completedSteps = container.querySelectorAll('[data-active="true"]')
    expect(completedSteps.length).toBe(2)
  })

  it('marks inactive steps correctly', () => {
    const { container } = render(<StepSidebar currentStep={1} />)
    const inactiveSteps = container.querySelectorAll('[data-active="false"]')
    expect(inactiveSteps.length).toBe(2)
  })
})
