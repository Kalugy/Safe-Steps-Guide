import { beforeContent } from '../content/data';
import { HubPage } from './Hub';

export function Before() {
  return <HubPage content={beforeContent} />;
}
