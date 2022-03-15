import React from 'react';
import { TemplateBlock } from './Template.styles';

type Props = {
    children: React.ReactNode;
};

export default function Template({ children }: Props) {
  return (
    <TemplateBlock>{children}</TemplateBlock>
  )
};
