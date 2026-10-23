import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading and all six feature tiles', () => {
    render(<About />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Form Female From Cattle Evening.' }),
    ).toBeInTheDocument()

    for (const title of [
      'Cloud Compatibility',
      'On Time Delivery',
      'Easy to Use',
      'Mobile Application',
      'Add New Project',
      'Generating Leads',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })
})
