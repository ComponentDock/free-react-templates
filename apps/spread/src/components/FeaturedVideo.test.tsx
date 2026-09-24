import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturedVideo } from './FeaturedVideo'

describe('FeaturedVideo', () => {
  it('renders the featured video heading', () => {
    render(<FeaturedVideo />)
    expect(screen.getByText(/A Closer Look At Our Front Porch/)).toBeInTheDocument()
  })

  it('renders the category badge', () => {
    render(<FeaturedVideo />)
    expect(screen.getByText('Travel')).toBeInTheDocument()
  })

  it('renders the excerpt text', () => {
    render(<FeaturedVideo />)
    expect(screen.getByText(/Excepteur sint occaecat/)).toBeInTheDocument()
  })

  it('renders the play button', () => {
    render(<FeaturedVideo />)
    expect(screen.getByLabelText('Play featured video')).toBeInTheDocument()
  })

  it('renders share and social buttons', () => {
    render(<FeaturedVideo />)
    expect(screen.getByLabelText('Share')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
  })

  it('renders view/like/comment stats', () => {
    render(<FeaturedVideo />)
    expect(screen.getByText('4.2k')).toBeInTheDocument()
    expect(screen.getByText('312')).toBeInTheDocument()
    expect(screen.getByText('45')).toBeInTheDocument()
  })
})
