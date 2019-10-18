import React from 'react';
import { BLOCKS, Document } from '@contentful/rich-text-types';
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';

const OrderedList = ({ children }) => <ol className="pl-4 list-decimal">{children}</ol>;
const ListItem = ({ children }) => {
  return <li>{children}</li>;
};

const options: Options = {
  renderNode: {
    [BLOCKS.OL_LIST]: (node, children) => <OrderedList>{children}</OrderedList>,
    [BLOCKS.LIST_ITEM]: (node, children) => <ListItem>{children}</ListItem>,
  },
};

export const renderRichText = (content: Document) => {
  return documentToReactComponents(content, options);
};
