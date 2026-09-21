import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TeamGrid } from './TeamGrid'

describe('TeamGrid', () => {
  it('renders section heading', () => {
    render(<TeamGrid />)
    expect(screen.getByText('Sweet Baker')).toBeInTheDocument()
  })

  it('renders Join Us button', () => {
    render(<TeamGrid />)
    expect(screen.getByText('Join Us')).toBeInTheDocument()
  })

  it('renders 4 team member cards', () => {
    render(<TeamGrid />)
    const names = screen.getAllByText('Randy Butler')
    expect(names.length).toBe(4)
  })

  it('renders member roles', () => {
    render(<TeamGrid />)
    const roles = screen.getAllByText('Decorater')
    expect(roles.length).toBe(4)
  })

  it('renders social media icons for each team member', () => {
    render(<TeamGrid />)
    const facebookBtns = screen.getAllByLabelText('Facebook')
    expect(facebookBtns.length).toBe(4)
    const twitterBtns = screen.getAllByLabelText('Twitter')
    expect(twitterBtns.length).toBe(4)
    const instagramBtns = screen.getAllByLabelText('Instagram')
    expect(instagramBtns.length).toBe(4)
    const youtubeBtns = screen.getAllByLabelText('YouTube')
    expect(youtubeBtns.length).toBe(4)
  })

  it('renders team member images', () => {
    render(<TeamGrid />)
    const images = screen.getAllByAltText('Randy Butler')
    expect(images.length).toBe(4)
  })
})
