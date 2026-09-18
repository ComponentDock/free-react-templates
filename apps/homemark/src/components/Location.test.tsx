import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Location } from './Location'

describe('Location', () => {
  it('renders heading and default active tab', () => {
    render(<Location />)
    expect(screen.getByText('Location')).toBeInTheDocument()
    expect(screen.getByText('Surroundings')).toBeInTheDocument()
    expect(screen.getByText('Interior Design')).toBeInTheDocument()
    expect(screen.getByText('Community Pool')).toBeInTheDocument()
    expect(screen.getByText('Views')).toBeInTheDocument()
  })

  it('switches tab on click', async () => {
    const user = userEvent.setup()
    render(<Location />)
    const interiorTab = screen.getByText('Interior Design')
    await user.click(interiorTab)
    // The tab should now be selected
    expect(interiorTab.closest('[role="tab"]')).toHaveAttribute('aria-selected', 'true')
  })

  it('renders play button', () => {
    render(<Location />)
    expect(screen.getByLabelText('Play video for Surroundings')).toBeInTheDocument()
  })
})
