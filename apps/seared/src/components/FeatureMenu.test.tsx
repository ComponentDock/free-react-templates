import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FeatureMenu } from './FeatureMenu'

describe('FeatureMenu', () => {
  it('renders section heading and tab buttons', () => {
    render(<FeatureMenu />)
    expect(screen.getByText('Feature Menu')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /breakfast/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /lunch/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /dinner/i })).toBeInTheDocument()
  })

  it('shows breakfast items by default', () => {
    render(<FeatureMenu />)
    expect(screen.getByText('Eggs Benedict')).toBeInTheDocument()
    expect(screen.getByText('Avocado Toast')).toBeInTheDocument()
    expect(screen.getByText('Pancake Stack')).toBeInTheDocument()
  })

  it('switches to lunch tab', async () => {
    const user = userEvent.setup()
    render(<FeatureMenu />)
    await user.click(screen.getByRole('button', { name: /lunch/i }))
    expect(screen.getByText('Caesar Salad')).toBeInTheDocument()
    expect(screen.getByText('Grilled Chicken')).toBeInTheDocument()
    expect(screen.getByText('Mushroom Risotto')).toBeInTheDocument()
  })

  it('switches to dinner tab', async () => {
    const user = userEvent.setup()
    render(<FeatureMenu />)
    await user.click(screen.getByRole('button', { name: /dinner/i }))
    expect(screen.getByText('Filet Mignon')).toBeInTheDocument()
    expect(screen.getByText('Pan-Seared Salmon')).toBeInTheDocument()
    expect(screen.getByText('Lobster Tail')).toBeInTheDocument()
  })

  it('renders View All Menu button', () => {
    render(<FeatureMenu />)
    expect(screen.getByRole('link', { name: /view all menu/i })).toBeInTheDocument()
  })
})
