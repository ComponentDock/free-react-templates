import { render, screen } from '@testing-library/react'
import { SocialGrid } from './SocialGrid'

describe('SocialGrid', () => {
  it('renders 4 variant columns', () => {
    render(<SocialGrid />)
    const section = screen.getByTestId('social-grid')
    const columns = section.querySelectorAll('.grid > div')
    expect(columns.length).toBe(4)
  })

  it('renders Twitter, Facebook, and Dribbble buttons in each column', () => {
    render(<SocialGrid />)
    const twitterButtons = screen.getAllByText('Twitter')
    const facebookButtons = screen.getAllByText('Facebook')
    const dribbbleButtons = screen.getAllByText('Dribbble')
    expect(twitterButtons.length).toBe(4)
    expect(facebookButtons.length).toBe(4)
    expect(dribbbleButtons.length).toBe(4)
  })

  it('renders rounded variant buttons', () => {
    render(<SocialGrid />)
    const section = screen.getByTestId('social-grid')
    const roundButtons = section.querySelectorAll('.btn-matrix-round')
    expect(roundButtons.length).toBeGreaterThan(0)
  })
})
