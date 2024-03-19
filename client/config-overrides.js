import { alias, configPaths } from 'react-app-rewire-alias';
import { override }from 'customize-cra';

export default override(
  alias({
    '@context': 'src/components/context',
  })
);