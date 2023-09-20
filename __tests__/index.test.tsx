/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import ProfilePage from '@/components/ProfilePage'

describe('Profile Page', () => {
  it('renders a heading', () => {
    render(<ProfilePage />)
    const heading = screen.getByText(/Frontend engineer/i)

    expect(heading).toBeInTheDocument()
  })
})
