import React from 'react';
import { TopbarBlock, TopbarWrapper } from './Topbar.styles';
import { Search, FavoriteBorder, Menu } from '@material-ui/icons';

export default function Topbar() {
  return (
    <TopbarBlock>
        <TopbarWrapper>
            <Search className="topbarIcon" onClick={() => null} />
            <FavoriteBorder className="topbarIcon" onClick={() => null} />
            <Menu className="topbarIcon" onClick={() => null} />
        </TopbarWrapper>
    </TopbarBlock>
  )
}
