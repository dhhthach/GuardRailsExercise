import { memo } from "react";
import { Dimmer, Loader } from "semantic-ui-react"

export const Loading: React.FC = () => {
  return <Dimmer active inverted><Loader size='massive'>Loading</Loader></Dimmer>
}

export default memo(Loading);
