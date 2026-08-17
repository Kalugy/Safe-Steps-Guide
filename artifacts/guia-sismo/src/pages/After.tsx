import { homeContent } from '../content/data';
import { HubPage } from './Hub';

export function After() {
  return <HubPage content={homeContent} />;
}
