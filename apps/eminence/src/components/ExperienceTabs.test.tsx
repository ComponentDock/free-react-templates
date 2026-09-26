import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { ExperienceTabs } from './ExperienceTabs'

describe('ExperienceTabs', () => {
  it('renders with experience tab active by default', () => {
    render(<ExperienceTabs />)
    expect(screen.getByRole('tab', { name: 'My Experiences' })).toHaveAttribute(
      'aria-selected',
      'true',
    )
    expect(screen.getByRole('tab', { name: 'My Education' })).toHaveAttribute(
      'aria-selected',
      'false',
    )
    expect(screen.getByText('TechCorp')).toBeInTheDocument()
    expect(screen.getByText(/Senior Web Developer/)).toBeInTheDocument()
  })

  it('switches to education tab on click', async () => {
    const user = userEvent.setup()
    render(<ExperienceTabs />)

    await user.click(screen.getByRole('tab', { name: 'My Education' }))
    expect(screen.getByRole('tab', { name: 'My Education' })).toHaveAttribute(
      'aria-selected',
      'true',
    )
    expect(screen.getByRole('tab', { name: 'My Experiences' })).toHaveAttribute(
      'aria-selected',
      'false',
    )
    expect(screen.getByText('State University')).toBeInTheDocument()
    expect(screen.getByText(/B\.S\. Computer Science/)).toBeInTheDocument()
  })

  it('shows all experience entries', () => {
    render(<ExperienceTabs />)
    expect(screen.getByText('TechCorp')).toBeInTheDocument()
    expect(screen.getByText('DesignStudio')).toBeInTheDocument()
    expect(screen.getByText('CreativeAgency')).toBeInTheDocument()
  })

  it('shows all education entries', async () => {
    const user = userEvent.setup()
    render(<ExperienceTabs />)
    await user.click(screen.getByRole('tab', { name: 'My Education' }))
    expect(screen.getByText('State University')).toBeInTheDocument()
    expect(screen.getByText('Tech Institute')).toBeInTheDocument()
  })
})
