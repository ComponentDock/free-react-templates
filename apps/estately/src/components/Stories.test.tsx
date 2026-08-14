import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Stories } from './Stories'

describe('Stories', () => {
  it('renders the heading, paragraph, image and Find out more link', () => {
    const { container } = render(<Stories />)
    expect(screen.getByRole('heading', { name: 'Seller Success Stories' })).toBeInTheDocument()
    expect(screen.getByText(/Lorem ipsum dolor sit amet/i)).toBeInTheDocument()
    expect(screen.getByText('Find out more')).toBeInTheDocument()
    expect(container.querySelector('img')).toHaveAttribute(
      'src',
      'https://picsum.photos/id/235/600/450',
    )
  })
})
