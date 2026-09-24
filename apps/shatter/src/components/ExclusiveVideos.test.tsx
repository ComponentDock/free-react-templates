import { render, screen } from '@testing-library/react'
import { ExclusiveVideos } from './ExclusiveVideos'

describe('ExclusiveVideos', () => {
  it('renders the section heading', () => {
    render(<ExclusiveVideos />)
    expect(screen.getByText('Exclusive Videos')).toBeInTheDocument()
  })

  it('renders 3 video cards', () => {
    render(<ExclusiveVideos />)
    expect(screen.getByText("Inside the World's Most Advanced Research Lab")).toBeInTheDocument()
    expect(screen.getByText('CEO Roundtable: The Future of AI')).toBeInTheDocument()
    expect(screen.getByText('Climate Change Impact on Coastal Cities')).toBeInTheDocument()
  })

  it('renders carousel navigation arrows', () => {
    render(<ExclusiveVideos />)
    expect(screen.getByLabelText('Previous videos')).toBeInTheDocument()
    expect(screen.getByLabelText('Next videos')).toBeInTheDocument()
  })

  it('has correct aria-labelledby', () => {
    render(<ExclusiveVideos />)
    const section = screen.getByLabelText('Exclusive Videos')
    expect(section).toHaveAttribute('aria-labelledby', 'videos-heading')
  })
})
