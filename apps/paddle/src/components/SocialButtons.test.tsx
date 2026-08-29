import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SocialButtons } from './SocialButtons'

describe('SocialButtons', () => {
  it('renders the Social Buttons heading', () => {
    render(<SocialButtons />)
    expect(screen.getByText('Social Buttons')).toBeInTheDocument()
  })

  it('renders Twitter buttons across both sections', () => {
    render(<SocialButtons />)
    const twitterBtns = screen.getAllByLabelText(/twitter/i)
    expect(twitterBtns.length).toBeGreaterThanOrEqual(2)
  })

  it('renders Facebook buttons across both sections', () => {
    render(<SocialButtons />)
    const fbBtns = screen.getAllByLabelText(/facebook/i)
    expect(fbBtns.length).toBeGreaterThanOrEqual(2)
  })

  it('renders Dribbble buttons across both sections', () => {
    render(<SocialButtons />)
    const drBtns = screen.getAllByLabelText(/dribbble/i)
    expect(drBtns.length).toBeGreaterThanOrEqual(2)
  })

  it('renders Linkedin buttons in headed section', () => {
    render(<SocialButtons />)
    const liBtns = screen.getAllByLabelText(/linkedin/i)
    expect(liBtns.length).toBeGreaterThanOrEqual(1)
  })

  it('renders Pinterest buttons in headed section', () => {
    render(<SocialButtons />)
    const pinBtns = screen.getAllByLabelText(/pinterest/i)
    expect(pinBtns.length).toBeGreaterThanOrEqual(1)
  })

  it('renders unheaded grid with icon-only variants', () => {
    render(<SocialButtons />)
    expect(screen.getAllByLabelText('Twitter solid').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByLabelText('Twitter outline').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByLabelText('Twitter round').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByLabelText('Twitter round outline').length).toBeGreaterThanOrEqual(1)
  })

  it('renders headed section with unique variant labels', () => {
    render(<SocialButtons />)
    expect(screen.getByLabelText('Twitter round solid')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter flat')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter round flat')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter tag')).toBeInTheDocument()
  })
})
