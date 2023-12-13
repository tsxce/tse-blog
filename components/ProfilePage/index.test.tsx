import { render, fireEvent, screen } from '@testing-library/react'
import ProfilePage from '.'

describe('Profile Page', () => {
  it('renders the SocialMediaBar', () => {
    render(<ProfilePage />)
    const socialMediaBar = screen.getByTestId('social-media-bar')

    expect(socialMediaBar).toBeInTheDocument()
  })

  it('renders the TechStack', () => {
    render(<ProfilePage />)
    const techStack = screen.getByTestId('tech-stack-desktop-view')

    expect(techStack).toBeInTheDocument()
  })

  it('renders the introduction text', () => {
    render(<ProfilePage />)
    const textElement = screen.getByText(
      /I have over 3\+ years extensive experience in the web development industry/i,
    )
    expect(textElement).toBeInTheDocument()
  })

  it('handles mouse enter and leave events', () => {
    render(<ProfilePage />)
    const profilePage = screen.getByTestId('profile-page')

    fireEvent.mouseEnter(profilePage)
    let lightCircle = screen.queryByTestId('light-circle')
    expect(lightCircle).toBeInTheDocument()

    fireEvent.mouseLeave(profilePage)
    lightCircle = screen.queryByTestId('light-circle')
    expect(lightCircle).not.toBeInTheDocument()
  })
})
