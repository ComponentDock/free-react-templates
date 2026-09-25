import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Education } from './Education'

describe('Education', () => {
  it('renders education section', () => {
    render(<Education />)
    const headings = screen.getAllByText('Education')
    expect(headings.length).toBeGreaterThanOrEqual(1)
  })

  it('renders all education entries', () => {
    render(<Education />)
    expect(screen.getByText('Master Degree Graphic Design')).toBeDefined()
    expect(screen.getByText('Bachelor Degree of Computer Science')).toBeDefined()
    expect(screen.getByText('Diploma in Information Technology')).toBeDefined()
    expect(screen.getByText('Certificate in Web Development')).toBeDefined()
    expect(screen.getByText('High School Secondary Education')).toBeDefined()
  })

  it('shows first entry content by default', () => {
    render(<Education />)
    expect(screen.getByText(/behind the word mountains/)).toBeDefined()
  })

  it('toggles education entry on click', async () => {
    const user = userEvent.setup()
    render(<Education />)
    const bachelorBtn = screen.getByText('Bachelor Degree of Computer Science')
    await user.click(bachelorBtn)
    expect(bachelorBtn.getAttribute('aria-expanded')).toBe('true')
  })

  it('collapses entry when clicked again', async () => {
    const user = userEvent.setup()
    render(<Education />)
    const masterBtn = screen.getByText('Master Degree Graphic Design')
    await user.click(masterBtn)
    expect(masterBtn.getAttribute('aria-expanded')).toBe('false')
  })
})
