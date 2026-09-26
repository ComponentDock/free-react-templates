import { render, screen } from '@testing-library/react'
import { BlogGrid } from './BlogGrid'

describe('BlogGrid', () => {
  it('renders all grid items', () => {
    render(<BlogGrid />)
    expect(screen.getByText('Photoshop PSD Notebook MockUp')).toBeInTheDocument()
    expect(screen.getByText('Business Card Mockup Sample')).toBeInTheDocument()
    expect(screen.getByText('Premium Icon Set Collection')).toBeInTheDocument()
    expect(screen.getByText('Modern Brand Identity Kit')).toBeInTheDocument()
    expect(screen.getByText('Playful Font Duo Pack')).toBeInTheDocument()
    expect(screen.getByText('Video Editing LUT Presets')).toBeInTheDocument()
  })

  it('renders 6 article elements', () => {
    render(<BlogGrid />)
    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(6)
  })

  it('renders category labels', () => {
    render(<BlogGrid />)
    expect(screen.getAllByText('Mockup')).toHaveLength(1)
    expect(screen.getAllByText('Branding')).toHaveLength(2)
    expect(screen.getByText('Icons')).toBeInTheDocument()
    expect(screen.getByText('Fonts')).toBeInTheDocument()
    expect(screen.getByText('Video')).toBeInTheDocument()
  })
})
