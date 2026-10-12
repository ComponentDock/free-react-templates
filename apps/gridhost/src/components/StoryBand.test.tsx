import { render, screen } from '@testing-library/react'
import { StoryBand } from './StoryBand'

describe('StoryBand', () => {
  it('pairs the 44px navy heading and two paragraphs with a pill action', () => {
    render(<StoryBand />)

    expect(screen.getByText('Since 2014')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'We are on call at every step' })).toHaveClass(
      'min-[768px]:text-[44px]',
    )
    expect(screen.getByRole('link', { name: 'See the plans' })).toHaveAttribute('href', '#pricing')
    expect(screen.getByRole('img', { name: 'Engineers working beside a server rack' })).toBeInTheDocument()
  })
})
