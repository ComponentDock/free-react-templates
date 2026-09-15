import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders heading and eight service cards', () => {
    render(<Services />)
    expect(screen.getByText('Our Services & Offers')).toBeInTheDocument()
    const titles = [
      'Family Task',
      'Online Research',
      'Management Task',
      'Project Management',
      'Writing Editing',
      'Multilingual Services',
      'Customer Service',
      'Executive Admin',
    ]
    for (const t of titles) {
      expect(screen.getByText(t)).toBeInTheDocument()
    }
  })
})
