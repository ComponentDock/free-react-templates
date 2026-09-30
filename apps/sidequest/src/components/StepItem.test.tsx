import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import StepItem from './StepItem'

describe('StepItem', () => {
  it('renders title and description', () => {
    render(
      <StepItem title="Create project" description="Some description text" completed={false} />,
    )
    expect(screen.getByText('Create project')).toBeInTheDocument()
    expect(screen.getByText('Some description text')).toBeInTheDocument()
  })

  it('renders checkmark icon when completed', () => {
    render(<StepItem title="Done step" description="Completed" completed={true} />)
    // The check icon is rendered inside a span with bg-check-green
    const checkSpan = document.querySelector('.bg-check-green')
    expect(checkSpan).toBeInTheDocument()
  })

  it('does not render checkmark when not completed', () => {
    render(<StepItem title="Pending step" description="Not done" completed={false} />)
    const checkSpan = document.querySelector('.bg-check-green')
    expect(checkSpan).not.toBeInTheDocument()
  })
})
