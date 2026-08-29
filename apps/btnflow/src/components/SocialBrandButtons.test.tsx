import { render, screen } from '@testing-library/react'
import { SocialBrandButtons } from './SocialBrandButtons'

describe('SocialBrandButtons', () => {
  it('renders social brand buttons for Twitter, Facebook, and Dribbble', () => {
    render(<SocialBrandButtons />)
    expect(screen.getAllByText(/twitter/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/facebook/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/dribbble/i).length).toBeGreaterThan(0)
  })

  it('renders 4 columns of social buttons', () => {
    const { container } = render(<SocialBrandButtons />)
    const columns = container.querySelectorAll('[data-social-column]')
    expect(columns.length).toBe(4)
  })
})
