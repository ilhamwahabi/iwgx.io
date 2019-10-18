import React from 'react';
import { BLOCKS, Document } from '@contentful/rich-text-types';
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';

const List = ({ children }) => <ol className="pl-4">{children}</ol>;
const ListItem = ({ children }) => {
  return <li>{children}</li>;
};

const options: Options = {
  renderNode: {
    [BLOCKS.OL_LIST]: (node, children) => <List>{children}</List>,
    [BLOCKS.LIST_ITEM]: (node, children) => <ListItem>{children}</ListItem>,
  },
};

export const renderRichText = (content: Document) => {
  return documentToReactComponents(content, options);
};
