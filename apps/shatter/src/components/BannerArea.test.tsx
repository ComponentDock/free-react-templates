import { render, screen } from '@testing-library/react'
import { BannerArea } from './BannerArea'

describe('BannerArea', () => {
  it('renders the section with correct aria-label', () => {
    render(<BannerArea />)
    expect(screen.getByLabelText('Featured stories banner')).toBeInTheDocument()
  })

  it('renders 3 left column post cards', () => {
    render(<BannerArea />)
    expect(screen.getByText('The Future of Urban Living Spaces')).toBeInTheDocument()
    expect(screen.getByText('Mental Wellness in the Digital Age')).toBeInTheDocument()
    expect(screen.getByText('Breakthrough in Renewable Energy')).toBeInTheDocument()
  })

  it('renders the featured post headline', () => {
    render(<BannerArea />)
    expect(
      screen.getByText('Global Markets Rally as Trade Agreements Progress'),
    ).toBeInTheDocument()
  })

  it('renders carousel navigation arrows', () => {
    render(<BannerArea />)
    expect(screen.getByLabelText('Previous slide')).toBeInTheDocument()
    expect(screen.getByLabelText('Next slide')).toBeInTheDocument()
  })

  it('renders weather widget', () => {
    render(<BannerArea />)
    expect(screen.getByText('Weather')).toBeInTheDocument()
    expect(screen.getByText('28°C')).toBeInTheDocument()
    expect(screen.getByText('Partly Cloudy')).toBeInTheDocument()
  })

  it('renders music playlist widget', () => {
    render(<BannerArea />)
    expect(screen.getByText('Playlist')).toBeInTheDocument()
    expect(screen.getByText('Morning Headlines Recap')).toBeInTheDocument()
    expect(screen.getByText('Tech Talk Weekly')).toBeInTheDocument()
    expect(screen.getByText('Evening News Digest')).toBeInTheDocument()
  })

  it('renders playlist numbers', () => {
    render(<BannerArea />)
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
  })
})
