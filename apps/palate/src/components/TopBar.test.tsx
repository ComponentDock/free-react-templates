import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders the black info strip with contact details and open hours', () => {
    const { container } = render(<TopBar />)

    expect(screen.getByText('+ 1235 2355 98')).toBeInTheDocument()
    expect(screen.getByText('youremail@email.com')).toBeInTheDocument()
    expect(screen.getByText('Open hours: Monday - Sunday 8:00AM - 9:00PM')).toBeInTheDocument()

    // Black strip styling + orange icons.
    expect(container.firstElementChild).toHaveClass('bg-ink')
    expect(container.querySelectorAll('svg')).toHaveLength(2)
  })
})
