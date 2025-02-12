import RovingFocusRoot from './fragments/RovingFocusRoot';
import RovingFocusItem from './fragments/RovingFocusItem';

const RovingFocusGroup = {} as const;

RovingFocusGroup.Root = RovingFocusRoot;
RovingFocusGroup.Item = RovingFocusItem;

export default RovingFocusGroup;