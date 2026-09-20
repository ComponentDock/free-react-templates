import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Speakers } from './Speakers'

describe('Speakers', () => {
  it('renders the section heading', () => {
    render(<Speakers />)
    expect(screen.getByText('Our Speakers')).toBeDefined()
  })

  it('renders all three speakers', () => {
    render(<Speakers />)
    expect(screen.getByText('Sarah Mitchell')).toBeDefined()
    expect(screen.getByText('David Chen')).toBeDefined()
    expect(screen.getByText('Emily Watson')).toBeDefined()
  })

  it('renders speaker roles', () => {
    render(<Speakers />)
    expect(screen.getByText('Keynote Speaker')).toBeDefined()
    expect(screen.getByText('Panel Moderator')).toBeDefined()
    expect(screen.getByText('Workshop Lead')).toBeDefined()
  })

  it('has social link aria-labels', () => {
    render(<Speakers />)
    expect(screen.getByLabelText(/Sarah Mitchell on LinkedIn/)).toBeDefined()
    expect(screen.getByLabelText(/David Chen on X/)).toBeDefined()
  })

  it('links to the speaker section', () => {
    render(<Speakers />)
    const section = screen.getByText('Our Speakers').closest('section')
    expect(section?.id).toBe('speaker')
  })
})
