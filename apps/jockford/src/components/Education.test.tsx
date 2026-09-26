import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Education } from './Education'

describe('Education', () => {
  it('renders the heading', () => {
    render(<Education />)
    expect(screen.getByText('Education')).toBeInTheDocument()
  })

  it('renders all 5 education items', () => {
    render(<Education />)
    expect(screen.getByText('Master Degree Graphic Design')).toBeInTheDocument()
    expect(screen.getByText('Bachelor Degree of Computer Science')).toBeInTheDocument()
    expect(screen.getByText('Diploma in Information Technology')).toBeInTheDocument()
    expect(screen.getByText('Certificate in Web Development')).toBeInTheDocument()
    expect(screen.getByText('High School Secondary Education')).toBeInTheDocument()
  })

  it('shows first item expanded by default', () => {
    render(<Education />)
    expect(screen.getByText(/Advanced studies in visual communication/)).toBeInTheDocument()
  })

  it('toggles accordion items on click', async () => {
    const user = userEvent.setup()
    render(<Education />)
    await user.click(screen.getByText('Bachelor Degree of Computer Science'))
    expect(screen.getByText(/Comprehensive education in software engineering/)).toBeInTheDocument()
  })

  it('collapses item when clicked again', async () => {
    const user = userEvent.setup()
    render(<Education />)
    // First item is open by default
    expect(screen.getByText(/Advanced studies/)).toBeInTheDocument()
    // Click first item to collapse
    await user.click(screen.getByText('Master Degree Graphic Design'))
    expect(screen.queryByText(/Advanced studies/)).not.toBeInTheDocument()
  })
})
