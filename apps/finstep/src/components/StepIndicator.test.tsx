import { render } from '@testing-library/react'
import { StepIndicator } from './StepIndicator'

describe('StepIndicator', () => {
  it('renders the step indicator container', () => {
    const { container } = render(<StepIndicator currentStep={1} />)
    expect(container.querySelector('.flex.items-center.justify-center')).toBeInTheDocument()
  })

  it('renders 4 step circles', () => {
    const { container } = render(<StepIndicator currentStep={1} />)
    const circles = container.querySelectorAll('.rounded-full')
    expect(circles.length).toBe(4)
  })

  it('highlights the active step with gradient background', () => {
    const { container } = render(<StepIndicator currentStep={2} />)
    const circles = container.querySelectorAll('.rounded-full')
    // Step 2 is active (index 1) - should have gradient
    expect(circles[1]).toHaveAttribute('class', expect.stringContaining('linear-gradient'))
  })

  it('marks completed steps with checkmark', () => {
    const { container } = render(<StepIndicator currentStep={3} />)
    const circles = container.querySelectorAll('.rounded-full')
    // Step 1 and 2 are done
    expect(circles[0]).toHaveTextContent('✓')
    expect(circles[1]).toHaveTextContent('✓')
  })

  it('shows gradient connector for completed steps', () => {
    const { container } = render(<StepIndicator currentStep={3} />)
    const connectors = container.querySelectorAll('[class*="h-[2px]"]')
    // First connector (between step 1 and 2) should have gradient
    expect(connectors[0]).toHaveAttribute('class', expect.stringContaining('linear-gradient'))
    // Second connector (between step 2 and 3) should have gradient
    expect(connectors[1]).toHaveAttribute('class', expect.stringContaining('linear-gradient'))
  })

  it('shows inactive connector for uncompleted steps', () => {
    const { container } = render(<StepIndicator currentStep={1} />)
    const connectors = container.querySelectorAll('[class*="h-[2px]"]')
    // All connectors should be inactive
    for (const connector of connectors) {
      expect(connector).toHaveAttribute('class', expect.stringContaining('bg-connector'))
    }
  })

  it('shows inactive circle for uncompleted steps', () => {
    const { container } = render(<StepIndicator currentStep={1} />)
    const circles = container.querySelectorAll('.rounded-full')
    // Steps 2, 3, 4 should be inactive
    expect(circles[1]).toHaveAttribute('class', expect.stringContaining('bg-step-inactive'))
    expect(circles[2]).toHaveAttribute('class', expect.stringContaining('bg-step-inactive'))
    expect(circles[3]).toHaveAttribute('class', expect.stringContaining('bg-step-inactive'))
  })

  it('shows all steps as done when on step 4', () => {
    const { container } = render(<StepIndicator currentStep={4} />)
    const circles = container.querySelectorAll('.rounded-full')
    // Steps 1, 2, 3 are done
    expect(circles[0]).toHaveTextContent('✓')
    expect(circles[1]).toHaveTextContent('✓')
    expect(circles[2]).toHaveTextContent('✓')
    // Step 4 is active
    expect(circles[3]).toHaveAttribute('class', expect.stringContaining('linear-gradient'))
  })
})
