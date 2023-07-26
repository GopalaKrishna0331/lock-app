import {useState} from 'react'

import {Container, Image, Paragraph, Button} from './styledComponents'

const Unlock = () => {
  const [flag, setFlag] = useState(false)
  return (
    <Container>
      <Image
        src={
          flag
            ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
            : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
        }
        alt={flag ? 'unlock' : 'lock'}
      />
      <Paragraph>
        {flag ? 'Your Device is Unlocked' : 'Your Device is Locked'}
      </Paragraph>
      <Button onClick={() => setFlag(prevFlag => !prevFlag)}>
        {flag ? 'Lock' : 'Unlock'}
      </Button>
    </Container>
  )
}

export default Unlock
